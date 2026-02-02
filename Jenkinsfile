pipeline {
    agent any

    triggers {
        pollSCM('H/30 * * * *')
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
                    sh """
                        CONTAINER_ID=\$(docker compose -f ${COMPOSE_FILE} ps -q frontend)
                        STATUS=\$(docker inspect --format='{{.State.Health.Status}}' "\$CONTAINER_ID")
                        echo "Frontend health status: \$STATUS"
                        [ "\$STATUS" = "healthy" ]
                    """
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
