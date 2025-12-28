# 🚀 Portafolio Profesional & Cloud Resume Challenge

> **Ing. Roberth Rios Jesus** - Ingeniero de Sistemas Colegiado (CIP 321353)

Este repositorio aloja el código fuente de mi portafolio profesional. Más que una simple web, este proyecto es una implementación completa del **Cloud Resume Challenge**, demostrando competencias en arquitectura **Serverless**, desarrollo Fullstack (React + Python) y prácticas de DevOps/CI-CD en AWS.

## 📋 Características Clave

* **Arquitectura Serverless:** Backend desacoplado utilizando AWS Lambda y API Gateway.
* **Contador de Visitas Inteligente:**
* Implementación de **API RESTful** con Python (Boto3).
* Lógica de **Deduplicación de Visitas** basada en IP para métricas reales (no infladas por recargas).
* Uso de **DynamoDB Atomic Counters** para consistencia de datos.
* Gestión automática de registros temporales mediante **TTL (Time to Live)**.


* **Frontend Moderno:** UI responsiva con **React 18**, **Tailwind CSS** y animaciones con **Framer Motion**.
* **Infraestructura Global:** Alojamiento estático en **Amazon S3** (optimizado para CDN).
* **CI/CD Automatizado:** Pipeline de GitHub Actions que construye y despliega el frontend automáticamente al detectar cambios en la rama `main`.

## 🛠️ Stack Tecnológico

### ☁️ Backend & Cloud (AWS)

* **Compute:** AWS Lambda (Python 3.x).
* **API Management:** Amazon API Gateway (REST API).
* **Database:** Amazon DynamoDB (NoSQL con Streams & TTL).
* **Storage:** Amazon S3 (Hosting estático).

### 💻 Frontend

* **React.js + Vite:** Desarrollo de componentes y empaquetado optimizado.
* **Tailwind CSS:** Estilizado "utility-first".
* **Framer Motion:** Animaciones de conteo y transiciones de interfaz.
* **Lucide React:** Iconografía vectorial ligera.

### ⚙️ DevOps

* **GitHub Actions:** CI/CD para build y deploy.
* **Control de Versiones:** Git & GitHub.

## 🏗️ Arquitectura de la Solución

El sistema opera bajo un modelo híbrido: el contenido estático se sirve desde S3, mientras que los datos dinámicos (contador) se consultan vía API a una arquitectura Serverless.

```mermaid
graph TD
    User[Usuario Final]
    subgraph "Frontend Layer (AWS S3)"
        UI[React App]
    end
    
    subgraph "Serverless Backend Layer"
        API[API Gateway]
        Lambda[AWS Lambda (Python)]
        DB[(DynamoDB)]
    end

    User -- HTTPS Request --> UI
    UI -- Fetch Visitor Count --> API
    API -- Trigger --> Lambda
    Lambda -- Read/Write Atomic Update --> DB
    DB -- Return Data --> Lambda
    Lambda -- JSON Response --> UI

```

## 🚀 Instalación y Uso Local

1. **Clonar el repositorio:**

```bash
git clone https://github.com/Roberthrjr/portfolio-roberth.git
cd portfolio-roberth

```

2. **Instalar dependencias:**

```bash
npm install

```

3. **Configuración de Variables (Opcional):**
Si deseas conectar tu propio backend, edita la URL del API en `App.jsx`.
4. **Ejecutar servidor de desarrollo:**

```bash
npm run dev

```

5. **Construir para producción:**

```bash
npm run build

```

## 📂 Estructura del Proyecto

```text
/
├── public/             # Assets estáticos (CV, imágenes)
├── src/
│   ├── data/           # Datos del perfil (JSON desacoplado)
│   ├── App.jsx         # Lógica principal y consumo de API
│   ├── index.css       # Tailwind directives
│   └── main.jsx        # Entry point
├── backend/            # (Referencia) Scripts de Lambda en Python
├── .github/workflows/  # Pipeline CI/CD
└── vite.config.js      # Configuración del bundler

```

## 📬 Contacto

Si tienes alguna pregunta sobre la arquitectura o deseas contactarme por motivos profesionales:

* **LinkedIn:** [Roberth Rios Jesus](https://linkedin.com/in/roberthrjr)
* **GitHub:** [Roberthrjr](https://github.com/Roberthrjr)
* **Email:** tauroroberth00@gmail.com

---

© 2025 Roberth Rios Jesus. Desarrollado con ❤️ y desplegado en AWS.