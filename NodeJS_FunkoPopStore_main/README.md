# NodeJS---FunkoPopStore

# Proyecto de NodeJs de una tienda de Funkos
Proyecto de NodeJs, consiste en crear una tienda de Funkos para el curso de Codo a Codo 2023. 
Los Funkos son figuras coleccionables de personajes de películas, series, videojuegos, cómics y otros medios de entretenimiento. 
El objetivo del proyecto es desarrollar una aplicación web que permita a los usuarios ver, comprar y vender Funkos de forma fácil y segura. 

## Características principales
Aplicación web desarrollada en Node.js, entorno de ejecución de JavaScript que facilita la creación de aplicaciones web escalables y de alto rendimiento. 
Uso de Framework Express, que posee características tales como: manejo de rutas, middleware, plantillas, y gestión de errores para facilitar el desarrollo web con Node.js. 
Integración de Express Validator, utilizado para validar datos del cliente, Bcrypt para el hash de contraseñas, y EJS como motor de plantillas.
Autenticación mediante registración como usuario en la interfaz de la aplicacion web; en caso de acceder como administrador, se deberá modificar en el json de user el campo admin a true, ubicado en la ruta /data/users.json

## Instrucciones de uso: 
Se deben seguir los siguientes pasos para la utilización de la aplicación web: 
1. Clonar el repositorio del proyecto desde GitHub, o descargar el código fuente en formato ZIP. 
2. Instalar las dependencias del proyecto con el comando `npm install` en la terminal. 
3. Ejecutar el comando `npm start` en la terminal para iniciar el servidor de la aplicación web. 
4. Abrir un navegador web, luego acceder a la dirección `http://localhost:3000` 
5. Registrarse o iniciar sesión con una cuenta de usuario para acceder a las funcionalidades de la aplicación web, como por ejemplo, ver, comprar y vender Funkos. 
6. Registrarse o iniciar sesión con la cuenta de usuario (para funciones como ver, comprar, y vender Funkos). Tener en cuenta que la sesión de administrador está disponible con el correo "admin@gmail.com" y la contraseña "123456", lo que permite acceder a la vista de administrador, para agregar, editar y eliminar Funkos. 
