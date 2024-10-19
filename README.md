# Documentación del código HTML/EJS 


> ## Detalles del estudiante. (Primera vista creada)

La primera vista que cree fue una vista en EJS que muestra los detalles de un estudiante registrado, utilizando datos dinámicos extraídos del backend. Está diseñado para ser parte de un sistema CRUD en Node.js.

## Estructura del Código

1. Estructura HTML básica.
2. Contenedor principal.
3. Datos dinámicos.
4. Inclusión de scripts comunes.

## 1. Estructura HTML Básica

```html
<!DOCTYPE html>

<html lang="es">
  <head>
    <%- include('../includes/head') %>
  </head>
  <body>
    <%- include('../includes/header') %>

    <div class="container" style="margin-top: 80px !important">
      <h2 class="text-center">Detalles del Estudiante</h2>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Nombre: <%= estudiante.nombre_alumno %></h5>
          <p class="card-text">Email: <%= estudiante.email_alumno %></p>
          <p class="card-text">Curso: <%= estudiante.curso_alumno %></p>
        </div>
      </div>
    </div>

    <%- include('../includes/scripts') %>
  </body>
</html>
```

---

### Explicación del Código
	
- `<!DOCTYPE html>`: Define el documento como HTML5.
- `<%- include('../includes/head') %>`: Se incluyen los archivos comunes `head.ejs` y `header.ejs` 
desde la carpeta includes, que contienen las etiquetas `<head>` y el encabezado del sitio.


## 2. Contenedor Principal

```html
<div class="container" style="margin-top: 80px !important">
  <h2 class="text-center">Detalles del Estudiante</h2>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Nombre: <%= estudiante.nombre_alumno %></h5>
      <p class="card-text">Email: <%= estudiante.email_alumno %></p>
      <p class="card-text">Curso: <%= estudiante.curso_alumno %></p>
    </div>
  </div>
</div>
```

---

### Explicación del Código

- `<div class="container">`: Utiliza el sistema de diseño de Bootstrap para organizar el contenido.
- `<h2>`: Un título que indica que esta página muestra los "Detalles del Estudiante".
- `<div class="card">`: Se utiliza un componente de "card" de Bootstrap para presentar 
los detalles de un estudiante de manera estructurada.

---


## 3. Datos Dinámicos


```html
<h5 class="card-title">Nombre: <%= estudiante.nombre_alumno %></h5>
<p class="card-text">Email: <%= estudiante.email_alumno %></p>
<p class="card-text">Curso: <%= estudiante.curso_alumno %></p>

```
---

### Explicación del Código


- `<%= estudiante.nombre_alumno %>`: Muestra dinámicamente el nombre del estudiante extraído 
de los datos enviados por el servidor.
- `<%= estudiante.email_alumno %>`: Muestra dinámicamente el correo electrónico del estudiante.
- `<%= estudiante.curso_alumno %>`: Muestra dinámicamente el curso en el que está 
inscrito el estudiante.

---

## 4. Inclusión de scripts comunes.

```html
<%- include('../includes/scripts') %>
```
---

### Explicación del Código


- `Includes`: Aquí se incluye el archivo scripts.ejs, que  contiene los enlaces a los archivos JavaScript del proyecto, 
tales como los archivos de Bootstrap o cualquier código adicional necesario para la funcionalidad de la página.

---

> ## Cursos. (Segunda vista creada)

## Estructura del Código

1. Estructura HTML básica.
2. Formulario de registro de curso.
3. Tabla lista de cursos

---

## 1. Estructura HTML Básica

```html
<!DOCTYPE html>

<html lang="es">
  <head>
    <%- include('../includes/head') %>
  </head>
  <body>
    <%- include('../includes/header') %>

    <div class="container" style="margin-top: 80px !important">
      <h3 class="text-center">Registrar Curso</h3>
      <form action="/cursos" method="POST">
        <div class="mb-3">
          <label for="nombre_curso" class="form-label">Nombre del Curso</label>
          <input type="text" name="nombre_curso" class="form-control" required />
        </div>
        <div class="d-grid gap-2 col-12 mx-auto mt-4 mb-4">
          <button class="btn btn-primary" type="submit">Registrar Curso</button>
        </div>
      </form>

      <h3 class="text-center mt-5">Lista de Cursos</h3>
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre del Curso</th>
          </tr>
        </thead>
        <tbody>
          <% let contador = 1; %>
          <% cursos.forEach(function(curso) { %>
            <tr>
              <td><%= contador %></td>
              <td><%= curso.nombre %></td>
            </tr>
            <% contador++; %>
          <% }); %>
        </tbody>
      </table>
    </div>

    <%- include('../includes/scripts') %>
  </body>
</html>
```
---

### Explicación del Código

- `<%- include('../includes/head') %>`: Incluye un archivo head.ejs, que contiene las meta etiquetas, enlaces de estilo 
CSS y otros elementos en el <head>.

- `<%- include('../includes/header') %>`: Incluye el encabezado, que contiene la barra de navegación y otros elementos 
comunes en la parte superior de la página.

---

## 2. Formulario de registro de curso

```html
<div class="container" style="margin-top: 80px !important">
  <h3 class="text-center">Registrar Curso</h3>
  <form action="/cursos" method="POST">
    <div class="mb-3">
      <label for="nombre_curso" class="form-label">Nombre del Curso</label>
      <input type="text" name="nombre_curso" class="form-control" required />
    </div>
    <div class="d-grid gap-2 col-12 mx-auto mt-4 mb-4">
      <button class="btn btn-primary" type="submit">Registrar Curso</button>
    </div>
  </form>
</div>
```
---

### Explicación del Código

- `<div class="container">`: Utiliza Bootstrap para definir un contenedor con márgenes adecuados. 
El estilo margin-top: 80px !important agrega espacio en la parte superior del formulario.
- `<h3 class="text-center">`: Un título centrado que indica la sección del formulario para registrar un nuevo curso.
- `<form action="/cursos" method="POST">`: Crea un formulario que enviará una petición POST al servidor en 
la ruta /cursos para registrar un curso.
- `<input type="text" name="nombre_curso" class="form-control" required />`: Un campo de entrada para que el usuario 
ingrese el nombre del curso. Utiliza el estilo form-control de Bootstrap para mejorar la apariencia.
- `<button class="btn btn-primary" type="submit">`: Un botón de tipo submit que envía los datos del formulario. 
Utiliza la clase btn btn-primary de Bootstrap para un botón estilizado.

---

## 3. Tabla lista de cursos

```html
<h3 class="text-center mt-5">Lista de Cursos</h3>
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre del Curso</th>
    </tr>
  </thead>
  <tbody>
    <% let contador = 1; %>
    <% cursos.forEach(function(curso) { %>
      <tr>
        <td><%= contador %></td>
        <td><%= curso.nombre %></td>
      </tr>
      <% contador++; %>
    <% }); %>
  </tbody>
</table>
```
---

### Explicación del Código

- `<h3 class="text-center mt-5">`: Un título centrado que muestra "Lista de Cursos" y añade un margen superior 
con mt-5 para separar del formulario.
- `<table class="table">`: Utiliza el componente table de Bootstrap para crear una tabla bien estilizada.
- `<thead>`: Define el encabezado de la tabla con dos columnas: una para el número y otra para el nombre del curso.
- `<tbody>`: Aquí se itera sobre el array cursos que contiene los cursos registrados.
- `let contador = 1`: Inicializa un contador para enumerar los cursos.
- `cursos.forEach(function(curso) { ... })`: Itera sobre la lista de cursos y genera una nueva fila `<tr>` 
en la tabla para cada curso.
- `<%= contador %>`: Muestra el número del curso en la tabla.
- `<%= curso.nombre %>`: Muestra dinámicamente el nombre del curso extraído de los datos proporcionados por el servidor.
- `contador++`: Incrementa el contador después de cada iteración para enumerar correctamente los cursos.

---

## Información Adicional

- EJS (Embedded JavaScript): El código usa EJS para generar dinámicamente el contenido del lado del servidor, especialmente en la tabla de cursos. La sintaxis `<%= %>` permite incrustar variables y mostrar datos dinámicos en el HTML.
- Bootstrap: Bootstrap se utiliza para el diseño del formulario, los botones y la tabla. Esto facilita una estructura responsive y una mejor experiencia de usuario visual.
- Flujo de trabajo: El formulario de `"Registrar Curso"` envía los datos al servidor mediante una solicitud POST. Luego, la tabla `"Lista de Cursos"` muestra todos los cursos registrados, que son proporcionados por el backend.

---

```markdown
Julián Felipe Quinche Cáceres
ID: 30000075612
Universidad de San Buenaventura Bogotá
```

