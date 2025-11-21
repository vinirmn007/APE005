# APE005 - Peticiones con CRUD hacia un MOCK

## Características

* **CRUD Completo:** Implementación de métodos `GET`, `POST`, `PUT` y `DELETE`.
* **API Mock:** Conectado a [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para pruebas seguras sin backend propio.

## Instrucciones de Ejecución
1.  Haz **doble clic** sobre el archivo main.html.
3.  Se abrirá automáticamente en tu navegador web predeterminado.

## Uso de la Herramienta

1.  **GET (Listar):**
    * Deja el campo `ID` vacío para traer una lista de 5 elementos.
    * Escribe un número en `ID` (ej. `1`) para traer un solo elemento.
2.  **POST (Crear):**
    * Escribe un `Título` y haz clic en POST. (El API simulará la creación devolviendo ID 101).
3.  **PUT (Actualizar) / DELETE (Borrar):**
    * **Importante:** Debes especificar un `ID` obligatoriamente (ej. `1`).
    * Haz clic en el botón correspondiente.

## Sobre CORS y JSONPlaceholder

Este proyecto utiliza `https://jsonplaceholder.typicode.com` como backend.
* **Observaciones CORS:** En la tabla de resultados verás **"cors"** o **"Permitido"**. Esto indica que el navegador ha realizado con éxito la negociación de seguridad con el servidor externo para permitirte ver los datos.
* **Persistencia:** Al ser una API pública de prueba, los cambios (POST/PUT/DELETE) **no se guardan realmente** en el servidor, pero la API responde como si lo hubieran hecho para efectos de prueba.

## Tabla de Resultados  

| Método | URL Solicitada | Código | Tiempo | Observaciones CORS |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `https://jsonplaceholder.typicode.com/posts?_limit=5` | <span style="color:green">200</span> | 45 ms | access-control-allow-credentials: true |
| **POST** | `https://jsonplaceholder.typicode.com/posts` | <span style="color:green">201</span> | 112 ms | access-control-allow-credentials: true |
| **PUT** | `https://jsonplaceholder.typicode.com/posts/1` | <span style="color:green">200</span> | 98 ms | access-control-allow-credentials: true |
| **DELETE** | `https://jsonplaceholder.typicode.com/posts/1` | <span style="color:green">200</span> | 60 ms | access-control-allow-credentials: true |
| **GET** | `https://jsonplaceholder.typicode.com/posts/999999999` | <span style="color:red">404</span> | 55 ms | access-control-allow-credentials: true |