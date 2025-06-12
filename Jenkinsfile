pipeline {

    agent any

    stages {

        stage("build") {
            
            steps {
                sh 'docker build rails_react_auth'
            }
        }

        stage("test") {

            steps {
               echo 'testing the application...' 
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