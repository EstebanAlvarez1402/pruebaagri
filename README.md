# Frontend AgriLink 🌱

Aplicación web Vue.js para la plataforma AgriLink que conecta agricultores con compradores.

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- npm (viene con Node.js)
- Git

## 🚀 Instalación y Ejecución Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/CC184-Grupo-7/Frontend-AgriLink.git
cd Frontend-AgriLink
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
npm run serve
```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:8080/`

**Nota:** El mensaje "Note that the development build is not optimized" es completamente normal y solo significa que estás en modo desarrollo. ¡No es un error!

## 🏗️ Compilar para Producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Esto generará los archivos en la carpeta `dist/`

## 📦 Vista Previa de la Compilación

Para ver cómo se verá en producción sin hacer deploy:

```bash
npm run preview
```

## 🌐 Deploy a GitHub Pages

### Opción 1: Deploy Manual

1. Asegúrate de que los cambios estén confirmados en Git:
```bash
git add .
git commit -m "Tu mensaje de commit"
git push origin main
```

2. Ejecuta el comando de deploy:
```bash
npm run deploy
```

Este comando:
- Compila el proyecto
- Crea/actualiza la rama `gh-pages`
- Publica los archivos en GitHub Pages

### Opción 2: Deploy Automático con GitHub Actions

El proyecto incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que:
- Se ejecuta automáticamente cuando haces push a la rama `main`
- Compila y despliega el proyecto a GitHub Pages

Para activarlo:

1. Ve a tu repositorio en GitHub
2. Navega a **Settings** → **Pages**
3. En **Source**, selecciona la rama `gh-pages` y la carpeta `/ (root)`
4. Haz clic en **Save**

Después de esto, cada vez que hagas `git push` a la rama `main`, el sitio se actualizará automáticamente.

## 🔧 Estructura del Proyecto

```
Frontend-AgriLink/
├── public/              # Archivos públicos estáticos
├── src/
│   ├── assets/         # Recursos (imágenes, estilos)
│   ├── components/     # Componentes Vue reutilizables
│   ├── router/         # Configuración de Vue Router
│   ├── services/       # Servicios API
│   ├── views/          # Páginas/Vistas principales
│   ├── App.vue         # Componente raíz
│   └── main.js         # Punto de entrada
├── dist/               # Archivos compilados (generado)
├── package.json        # Dependencias y scripts
└── vue.config.js       # Configuración de Vue CLI
```

## 🎨 Páginas Disponibles

- `/login` - Página de inicio de sesión
- `/register` - Página de registro
- `/productos` - Lista de productos
- `/perfil` - Perfil del usuario (agricultor)
- `/perfil-comprador` - Perfil del comprador
- `/compra/:productoId` - Página de compra de producto

## 🔑 Configuración del Entorno

El proyecto está configurado para funcionar automáticamente en:

- **Desarrollo local**: `http://localhost:8080/`
- **GitHub Pages**: `https://CC184-Grupo-7.github.io/Frontend-AgriLink/`

La configuración cambia automáticamente según el entorno (NODE_ENV).

## 🛠️ Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala las dependencias |
| `npm run serve` | Ejecuta el servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run preview` | Vista previa de la compilación |
| `npm run deploy` | Despliega a GitHub Pages |

## ⚠️ Solución de Problemas

### El mensaje "development build is not optimized" aparece

✅ **No es un error.** Es solo una nota informativa que indica que estás ejecutando el proyecto en modo desarrollo. Todo está funcionando correctamente.

### La aplicación no carga en GitHub Pages

1. Verifica que la rama `gh-pages` exista
2. Asegúrate de que GitHub Pages esté configurado para usar la rama `gh-pages`
3. Espera unos minutos después del deploy (puede tomar hasta 5 minutos)

### Error al instalar dependencias

Si encuentras errores al instalar, intenta:
```bash
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Contribuir

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es parte del curso CC184 - Grupo 7

## 👥 Equipo

Desarrollado por el Grupo 7 de CC184

---

**¿Tienes preguntas?** Abre un issue en el repositorio.
