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
                if exist C:\\xampp\\htdocs\\MiniGestorInventory-Practica rmdir /s /q C:\\xampp\\htdocs\\MiniGestorInventory-Practica
                mkdir C:\\xampp\\htdocs\\MiniGestorInventory-Practica
                xcopy * C:\\xampp\\htdocs\\MiniGestorInventory-Practica /E /Y /I
                '''
            }
        }
    }
}