pipeline {
    agent any

    triggers {
        pollSCM('H/2 * * * *')
    }

    environment {
        COMPOSE_FILE = '/home/tgnazmi/docker-container/docker-compose.yml'
        REPO_DIR     = '/home/tgnazmi/docker-container/repos/frontend'
    }

    stages {
        stage('Pull Latest') {
            steps {
                dir("${REPO_DIR}") {
                    sh 'git pull origin main'
                }
            }
        }

        stage('Build') {
            steps {
                sh "docker compose -f ${COMPOSE_FILE} build frontend"
            }
        }

        stage('Deploy') {
            steps {
                sh "docker compose -f ${COMPOSE_FILE} up -d --no-deps frontend"
            }
        }

        stage('Health Check') {
            steps {
                retry(10) {
                    sleep 15
                    sh 'curl -f http://frontend:3000/ || curl -f http://localhost:3000/'
                }
            }
        }
    }

    post {
        failure {
            echo 'Frontend deployment failed!'
        }
        success {
            echo 'Frontend deployed successfully.'
        }
    }
}
