function add() {
 //tenemos que tomar el texto ingresado en el textarea
 var comments = document.getElementById('comment').value;

 //limpiar el textarea
 document.getElementById('comment').value = '';

 //contenedor que esta en el html
 var comm = document.getElementById('comm');

 //creamos el div que contiene cada comentario
 var newComments = document.createElement('div');

 //validar que textarea tenga un msje
 if (comments.length == 0 || comments == null) {
   alert('Debes ingresar un mensaje');
   return false;
 }

 //nodos de texto del textarea
 var textNewComment = document.createTextNode(comments);

 var contenedorElemento = document.createElement('p');
 contenedorElemento.appendChild(textNewComment);

 newComments.appendChild(contenedorElemento);

 comm.appendChild(newComments);














}