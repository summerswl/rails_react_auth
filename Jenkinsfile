pipeline {

    agent any
    environment {
        CREDENTIALS = credentials('-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEAuYJIryLIk3drz4Xav8aWz6CnoR8RYLHjSHXnw7lTys76Um7Z
y8HLLeulcgYeJVUDQsdXz1uce32XNfCkErikPP0MQjZ8D5F6wiRdF0uGFs8TVQP8
cYOBkEMEoLYqN/jzMPHkBlSiJRzKRIcm0MedPQ7tdAPB7GJDXLIDeMFiFownzBJM
ALKb7fjURNrZwkVVce9viJo0uszApmjuxsxO4/+58jOKkijybz9PKFoQK1jxgpmd
5uTb/td05awq3lyC+UASrDeb/5AwZs1NBC6KtZ2QgO0HjYYRWZb8yEyyoawVSa5L
J+kfATY+floyh/yyKMf4Kfk9JOsRSgWB2qloiwIDAQABAoIBABYqmjLLLjpov6op
bW0S9rxSjxUymCn8t5LV+96oS3nlZ4XoFwBA5N1U1g0c7Ac79ErLdROi97zN0f6x
BXnzNDTRa+CRkBtwH8IJBFKfRKN/FOlIs6aAtz+csnXdrofHqI+Fp+CVxlY27Xho
yduSrpg4K2l8dXSgfTobT0zjlqvo2Ugj1GFnS6MVVVtcAYTLGuEhtoelU/4ZrvHY
Dnh2kYato0qRg98LxanrzWD+X7znsCRxomaO5WS0c6x9Jsy7sD17emNaMCF89cLN
BZxRvwOOkwBOzPMUSypEaHrYQOgSBcEQ9GGrRiu3Cx+/FU3frtHGmkbEHhYToW7F
QXFSa/ECgYEA5NmHGZ9fVwTDxx74elziTiQtvJbADP9It7UecsyHSMq4ZsZstRKA
SCfKMoEZWMKHE+siVcMq1Zv9NLUmPjS8cXUamsz1bmznyWoHrWXUvn8DrL/IxaOa
EmrQHZFf046X9HAoSRE3IVK6DmAXm6vA12cTOX2JBShjuUP3MGd5IQkCgYEAz4Rw
LWdReEnGtMudGvLRkOxie31hV7VQrTINDGM84lwgIT7oMlqyjBVDHkMIEoqsXjEv
NEHj75TGsHvQtgpXPBLh92dUoeWGhtX5r6iSPlODWPycvx9lTXhJk8Gj4aWAiTpU
b0E8q26y4nPFnIzDbrMDoCDm7E0nJsdM2SmS5fMCgYAJcvnjEvOK0kWLKTo1QzSM
6W2CBe90Ge5Ut4PEVbGYTdaDV9oRN+xYDlyI7U+wnIebSPAn/mD8ZO51iK1FkEPf
o2gv0BqqLpD7fgdHH5dDLldmgJy3nGO2MvbY4bHFOHQJwb/IFI/kLlhEU69l3Beg
TT879nT744kKk0XXl84mkQKBgBYAEHR/059REwPv4kQNIjKfHQHClSNbUaZK/B8o
FjhZU/6yUKOmAe/gATGgIab1lLiXtk1v/t5Tg40KU2I5Tm5MAjDcf5h6YPzCiqoY
0QhSikZQ4b1Rcsf3zLUhfmJZzXq++FyjKe9y2PwxEe467i06RVQgqNq8gz4VOwx6
39wJAoGAbjuv0tE5cdwUTLdMA1DPgBzwFWUOdIMsRKpYFyuMvGIWKaG3Pq8HKWVl
9B8pPIZN1PUsrTqEiybPMTRwJs/Xw4Z8Ip7pNB+IZzX+z1D4SssMHOlSqlft4nDf
pS4CPsXKLcXH/qwn+jbuSTRu2AYBqvl0wPx1yERkHv1LA8orYMU=
-----END RSA PRIVATE KEY-----')
    }

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
                def ec2_ip = 'ec2-18-225-3-48.us-east-2.compute.amazonaws.com'
                def ec2_user = 'ubuntu'
                
                sh """
                ssh -i ${CREDENTIALS} -o StrictHostKeyChecking=no -t ${ec2_user}@${ec2_ip} << EOF
                mkdir -p /home/ec2-user/rails_react_auth && cd /home/ec2-user/rails_react_auth
                git clone https://github.com/summerswl/rails_react_auth.git || (cd rails_react_auth)
                cd rails_react_auth
                npm install
                npm start
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