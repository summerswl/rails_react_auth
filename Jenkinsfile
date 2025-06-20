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
               withCredentials([sshUserPrivateKey(credentialsId: 'rails_react_auth_ec2_key', keyFileVariable: 'PK')]) { 
                  sh '''
                  npm install
                  npm run dev
                  '''
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