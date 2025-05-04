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
                REM ---------- VALIDACIONES EXISTENTES ----------
                echo Validando que index.html exista...
                if not exist index.html (
                    echo "ERROR: index.html no encontrado"
                    exit 1
                )

                echo Validando que style.css exista...
                if not exist style.css (
                    echo "ERROR: style.css no encontrado"
                    exit 1
                )

                echo Validación de etiqueta </html>...
                findstr /C:"</html>" index.html >nul
                if %errorlevel% neq 0 (
                    echo "ERROR: index.html sin cierre </html>"
                    exit 1
                )

                REM ---------- NUEVA VALIDACIÓN script.js ----------
                echo Validando presencia de script.js...
                if not exist script.js (
                    echo "ERROR: script.js requerido no encontrado"
                    exit 1
                )


                echo Empaquetando build.zip...
                powerechoshell Compress-Archive -Path * -DestinationPath build.zip -Force
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
