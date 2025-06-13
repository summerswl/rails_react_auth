pipeline {

    agent any

    stages {

        stage("build") {
            
            steps {
                sh 'docker-compose build '
            }
        }

        stage('Checkout') {
            steps {
                git 'https://github.com/summerswl/rails_react_auth'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }

        stage("test") {

            steps {
                script {
                    if (isUnix()) {
                            sh 'npm test'
                        } else {
                            bat 'npm test'
                        }
                }
            }        
        }

        stage("deploy") {

            steps {
               echo 'deploying the application...' 
            }
        }
    }
    post {
        always {
            echo 'Reaching the end of pipeline...'
        }
        success {
            echo 'Build, Test and Deployment completed successfully...'
        }
        failure {
            echo 'The Build, Test or Deployment failed...'
        }
    }
}