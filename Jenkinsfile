pipeline {

    agent any

    stages {

        stage("build") {
            
            steps {
                echo 'Building the application...'
                sh 'docker-compose build '
            }
        }
        
        stage('Install Dependencies') {
            steps {
                echo 'Testing the application...'
                script {
                    if (isUnix()) {
                        sh 'npm install'
                    } else {
                        bat 'npm install'
                    }
                }
            }
        }

        stage("Test") {

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

        stage("Deploy to EC2") {

            steps {
               echo 'deploying the application...' 
               

                steps {
                   withCredentials([sshUserPrivateKey(credentialsId: 'rails_react_auth_ec2_key', keyFileVariable: 'PK')]) { // Replace 'my-ec2-key'
                       sh 'ssh -i $PK ec2-user@ec2-3-148-107-36.us-east-2.compute.amazonaws.com "npm install" "npm start"' // Replace with your actual commands
                   }
               }
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