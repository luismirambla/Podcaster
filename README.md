<a name="readme-top"></a>

<div align="center">
  <a href="https://github.com/luismirambla/Podcaster">
    <img src="public/logo-podcaster-readme.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">PODCASTER</h1>
</div>
<br />

Se trata de una mini-aplicación, single-page application (SPA), para escuchar podcasts. La aplicación consta de tres vistas: vista principal, detalles de un podcast y detalles de un capítulo de un podcast.

<br/>

## Demo
Puede acceder a la demo en el siguiente enlace: [https://extraordinary-malabi-e79e68.netlify.app](https://extraordinary-malabi-e79e68.netlify.app)

<br/>

## App

### Vista principal
En la vista principal, los usuarios pueden ver una lista de podcasts disponibles. Cada podcast tiene una imagen, su nombre y el nombre del artista. Los usuarios pueden hacer clic en un podcast para ver más detalles.

### Detalles de un podcast
En la vista de detalles del podcast, los usuarios pueden ver información más detallada sobre un podcast específico, incluyendo su imagen, nombre, artista, descripción completa y una lista de capítulos disponibles. Los usuarios también pueden hacer clic en un capítulo para ver los detalles de ese capítulo.

### Detalles de un capítulo de un podcast
En la vista de detalles de un capítulo, los usuarios pueden ver información detallada sobre un capítulo específico de un podcast, incluyendo su título, descripción y un reproductor de audio para escuchar el episodio.

<br>

## Startup

### Development
1. Si no tiene el proyecto en su máquina local. Clone el [repositorio](https://github.com/luismirambla/Podcaster).
    ```sh
    git clone https://github.com/luismirambla/Podcaster.git
    ```
2. Abra una terminal y navegue a la carpeta del proyecto.
3. Instale todas las dependencias del proyecto.
    ```sh
    npm install
    ```
4. Inicia la aplicación en modo de desarrollo.
    ```sh
    npm run dev
    ```
5. La aplicación ahora debería estar disponible en http://localhost:5173/.

<br/>

### Production
1. Si no tiene el proyecto en su máquina local. Clona el [repositorio](https://github.com/luismirambla/Podcaster).
    ```sh
    git clone https://github.com/luismirambla/Podcaster.git
    ```
2. Abra una terminal y navegue a la carpeta del proyecto.
3. Instala todas las dependencias del proyecto.
    ```sh
    npm install
    ```
4. Compile la aplicación.
    ```sh
    npm run build
    ```
5. Inicie la aplicación en modo de producción.
    ```sh
    npm run preview
    ```
6. La aplicación ahora debería estar disponible en http://localhost:4173/.