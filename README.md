# README

These are the current requirements to run this app in a local workspace. The app is located at https://github.com/summerswl under the name rails_react_auth. It has public viewing enabled and you should be able to fork off a new repo and run this in your local environment.

Setup required for app to load and run on local environment:

* Ruby version - 3.2.8

* Rails version - 7.2.2.1

* Node version - 16.20.2 - any version lower than 16 and the node_modules will not load correctly

* NPM version - 8.19.4

* Configuration:
    I am using the 'concurrently' node to run the React frontend seperately from the RoR backend. When the 'npm run app' command is executed the Rails section of the app will start on port 3001 and then the React web layer of the app will start on port 3000

* Database creation

* Database initialization

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions ...
        start application:
        Execute 'npm run app' command from terminal of your choice(I use Ubuntu 2404.1.68.0) to start application. Open up a tab in your browser and app should be running at http://localhost:3000

* How to run the test suite
