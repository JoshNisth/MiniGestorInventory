# MiniGestorInventory - CI/CD Pipeline con Jenkins

**Materia**: [SIS-312] Gestión de Calidad de Sistemas  
**Proyecto**: Implementación de un pipeline de Integración y Entrega Continua (CI/CD) utilizando Jenkins para una aplicación web básica de gestión de inventario.

---

## Descripción

Este proyecto simula un sistema sencillo de gestión de inventario desarrollado en HTML puro.  
La finalidad es aplicar conceptos de Integración Continua y Entrega Continua (CI/CD) mediante Jenkins, desplegando automáticamente la aplicación en un servidor local utilizando XAMPP.

---

## Tecnologías utilizadas

- **HTML5** (Frontend simple)
- **Git** (Control de versiones)
- **GitHub** (Repositorio remoto)
- **Jenkins** (Automatización CI/CD)
- **XAMPP (Apache)** (Servidor local)
- **Windows 10/11**

---

##  Flujo de CI/CD implementado

1. **Checkout**: Jenkins descarga el código desde el repositorio GitHub.
2. **Build**: Se valida el proyecto (no se compila, al ser HTML).
3. **Deploy**: El contenido se copia automáticamente a `C:\xampp\htdocs\MiniGestorInventory-Practica`.
4. **Visualización**: El proyecto es accesible desde `http://localhost:81/MiniGestorInventory-Practica/`.
