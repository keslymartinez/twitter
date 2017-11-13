// colores no  funciona realice paso a paso el contador y colores
/*function contar(tweet){
	boton.disable=false;
	contarCaracters=document.getElementById("contadorCaracter");
	var num =140;
	var longitud = document.getElementById("tweet").value.length;
	var count = document.getElementById("contadorCaracter").innerHTML=num-longitud;
	if(longitud>=140){
		contadorCaracters.style.color="blue";
		boton.disable=true;
	}else if(longitud>=120){
		contadorCaracters.style.color="red";
		boton.disable=true;

	}else if(longitud>=130){
		contadorCaracters.style.color="green";
		boton.disable=true;

		else {
			contadorCaracters.style.color="black";
		}

	}
}*/


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

