pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/JoshNisth/MiniGestorInventory.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                echo 'No hay build, es HTML plano.'
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                mkdir -p /tmp/deploy/minigestor
                cp -r * /tmp/deploy/minigestor/
                '''
            }
        }
    }
}
