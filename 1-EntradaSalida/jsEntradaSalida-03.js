/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//var nombreIngresado;
	//nombreIngresado=txtIdNombre.value; No se va a usar, no es el estandar de javascript
	//alert(nombreIngresado);

	let nombre;

	nombre=document.getElementById("txtIdNombre").value;
	alert (nombre);
	getElementById("txtIdNombre").value="";
}


