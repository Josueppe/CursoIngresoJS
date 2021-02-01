/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reservo espacio en memoria para guardar el nombre de usuario
	let nombre;

	//guardo en variable nombre el texto que escribio el usuario dentro de la ventana prompt
	nombre=prompt("Ingresar nombre");

	//copio el nombre que se guardo en la variable nombre dentro de la caja de texto que se encuentra en la pag html
	document.getElementById("txtIdNombre").value=nombre;
	
}

