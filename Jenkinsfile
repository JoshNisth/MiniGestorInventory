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
                bat '''
                echo Validando que index.html exista...
                if not exist index.html (
                    echo "ERROR: index.html no encontrado"
                    exit 1
                )

                echo Validación manual de HTML...
                findstr /C:"</html>" index.html >nul
                if %errorlevel% neq 0 (
                    echo "ERROR: index.html parece incompleto o mal cerrado"
                    exit 1
                )

                echo Empaquetando como build.zip...
                powershell Compress-Archive -Path * -DestinationPath build.zip -Force
                '''
            }
        }
        stage('Deploy') {
            steps {
                bat '''
                if exist C:\\xampp\\htdocs\\MiniGestorInventory-Practica rmdir /s /q C:\\xampp\\htdocs\\MiniGestorInventory-Practica
                mkdir C:\\xampp\\htdocs\\MiniGestorInventory-Practica
                xcopy * C:\\xampp\\htdocs\\MiniGestorInventory-Practica /E /Y /I
                copy build.zip C:\\xampp\\htdocs\\MiniGestorInventory-Practica\\
                '''
            }
        }
    }
}
