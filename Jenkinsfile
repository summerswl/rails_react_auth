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
                echo 'Testing the application...'
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
               script {
                def ec2_ip = 'c2-18-225-3-48.us-east-2.compute.amazonaws.com'
                def ec2_user = 'ubuntu'
                def key_path = 'C:/key_pair/webserver_01.pem'

                sh """
                ls C:/key_pair/webserver_01.pem
                ssh -1 ${key_path} -o StrictHostKeyChecking=no -t ${ec2_user}@${ec2_ip} << EOF
                mkdir -p /home/ec2-user/rails_react_auth && cd /home/ec2-user/rails_react_auth
                git clone https://github.com/summerswl/rails_react_auth.git 
                cd rails_react_auth
                npm install 
                npm run dev
                EOF
                """
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