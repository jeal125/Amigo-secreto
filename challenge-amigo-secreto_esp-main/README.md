Amigo Secreto

Este proyecto es una simple aplicación web para organizar un sorteo de "Amigo Secreto". Permite a los usuarios ingresar nombres de amigos, mostrarlos en una lista y realizar un sorteo para seleccionar un amigo al azar.

Características

Capturar y almacenar nombres de amigos.

Validar que el campo de entrada no esté vacío antes de agregar nombres.

Mostrar una lista actualizada de los amigos ingresados.

Realizar un sorteo aleatorio para seleccionar un amigo.

Mostrar el resultado del sorteo en pantalla.

Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

AmigoSecreto/
├── index.html      # Archivo principal del proyecto
├── style.css       # Estilos para la aplicación
├── app.js          # Lógica principal en JavaScript
├── assets/         # Carpeta para las imágenes y recursos
└── README.md       # Documentación del proyecto

Tecnologías Utilizadas

HTML: Estructura de la página web.

CSS: Estilizado de los elementos.

JavaScript: Lógica para la interactividad.

Guía de Uso

1. Abrir la Aplicación

Abre el archivo index.html en cualquier navegador web moderno.

2. Agregar Amigos

Escribe un nombre en el campo de texto.

Haz clic en el botón "Añadir".

El nombre aparecerá en la lista debajo del campo de texto.

Si el campo está vacío, se mostrará un mensaje de error.

3. Sortear Amigo Secreto

Asegúrate de haber ingresado al menos un nombre.

Haz clic en el botón "Sortear amigo".

Un nombre seleccionado al azar se mostrará en la sección de resultados.

4. Eliminar Amigos (Opcional)

Cada nombre en la lista incluye un botón para eliminarlo.

Código Principal

HTML

El archivo index.html contiene la estructura básica de la página, incluyendo:

Campo de entrada para nombres.

Botón para agregar nombres.

Botón para sortear un amigo.

Área para mostrar la lista de amigos y el resultado del sorteo.

CSS

El archivo style.css define el diseño de la aplicación, asegurando una interfaz limpia y atractiva.

JavaScript

El archivo app.js contiene tres funciones principales:

agregarAmigo(): Captura, valida y agrega un nombre al array de amigos, actualizando la lista visual.

actualizarLista(): Recorre el array de amigos y muestra cada nombre como un elemento <li> en la lista.

sortearAmigo(): Selecciona un nombre al azar del array y lo muestra en la pantalla.

Requisitos

Navegador web moderno (Google Chrome, Firefox, Safari, etc.).

Conexión a Internet para cargar fuentes desde Google Fonts (opcional).

Personalización

Puedes modificar el proyecto para adaptarlo a tus necesidades:

Cambiar el diseño en style.css.

Agregar nuevas funcionalidades en app.js, como guardar los nombres en localStorage.

Internacionalizar la aplicación cambiando los textos a otros idiomas.


Contribuciones

Si deseas contribuir a este proyecto, puedes:

Hacer un fork del repositorio.

Crear una rama para tus cambios: git checkout -b nueva-funcionalidad.

Realizar un pull request.

Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.