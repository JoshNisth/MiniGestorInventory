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
                bat '''
                mkdir C:\\deploy\\minigestor
                xcopy * C:\\deploy\\minigestor /E /Y /I
                '''
            }
        }
    }
}
