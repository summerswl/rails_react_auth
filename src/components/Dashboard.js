import React, { useState } from 'react';
import axios from 'axios';

const API_URL = '/weather';

export default function Dashboard() {
  const [address, setAddress] = useState('');
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (e) => {
  e.preventDefault();
  if (!address.trim()) return;

  setLoading(true);
  setForecast(null);

  try {
    const res = await axios.get(API_URL, { params: { address } });
    setForecast(res.data);
  } catch (err) {
    const errorMsg = err.response?.data?.error || 'Unknown error';
    setForecast({ error: errorMsg });
  } finally {
    setLoading(false);
  }
};

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 600, margin: '2rem auto', padding: '0 1rem' }}>
      <h1>Weather Forecast</h1>

      <form onSubmit={fetchWeather}>
        <input
          type="text"
          placeholder="Enter address (e.g., 1600 Pennsylvania Ave NW, Washington, DC)"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', fontSize: '1rem' }}
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ marginTop: '0.5rem', padding: '0.5rem 1rem' }}
        >
          {loading ? 'Loading...' : 'Get Forecast'}
        </button>
      </form>

      {forecast?.error && (
        <div style={{ color: 'red', marginTop: '1rem' }}>
          <strong>Error:</strong> {forecast.error}
        </div>
      )}

      {forecast && !forecast.error && (
        <div style={{ marginTop: '1.5rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <p><strong>Address:</strong> {forecast.address}</p>
          <p><strong>ZIP Code:</strong> {forecast.resolved_zip}</p>

          <h3>Current Conditions</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.icon}.png`}
              alt="Weather icon"
            />
            <div>
              <strong style={{ fontSize: '1.5rem' }}>{forecast.current_temp}°F</strong><br />
              {forecast.low}°F – {forecast.high}°F<br />
              <em>{forecast.description}</em>
            </div>
          </div>

          {forecast.from_cache && (
            <p style={{ color: '#2e8b57', fontStyle: 'italic', marginTop: '1rem' }}>
              Retrieved from cache (valid for 30 minutes)
            </p>
          )}
        </div>
      )}
    </div>
  );
}