# Landing Page de DemocraciaOS: 
Plataformas de participación ciudadana de Democracia en Red

Desarrollada utilizando [Gatsby](https://www.gatsbyjs.org/), framework basado en React, y [Bulma](https://bulma.io/), framework de CSS basado en Flexbox.

Para correr la aplicación:
1. Asegurarnos de tener utilizar la versión correcta de Node 
```bash
nvm use 
```

2. Instalar Gatsby Cli 
```bash
npm install -g gatsby-cli
```

3. Instalar dependencias del proyecto
```bash
npm install
```

4. Levantar en modo desarrollo (actualiza los cambios automáticamente)
```bash
gatsby develop
```
Se disponibiliza el sitio en [http://localhost:8000/](http://localhost:8000/)

5. Generar build productivo*
```bash
gatsby build
```
Genera archivos estáticos dentro de la carpeta `build`
* Se aconseja ejecutar `gatsby clean` previo a generar build productivo que limpia cache de gatsby

6. Para probar el build productivo:
```bash
gatsby serve
```
Se disponibiliza el sitio en [http://localhost:9000/](http://localhost:9000/)


En la carpeta `content` se encuentran los textos en formato .json de la landing para facilitar su edición.


