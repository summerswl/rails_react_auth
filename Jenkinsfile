pipeline {

    agent {
        docker { image 'node:22.16.0-alpine3.22' }
    }

    stages {

        stage("build") {
            
            steps {
                sh 'node --eval "console.log(process.platform,process.env.CI)"'
                label 'docker'
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