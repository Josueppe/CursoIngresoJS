/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

	//Recordar pasar siempre numeros ingresados a parseInt
	//Recordar String + String = String
	//		   String + Number = String
	//		   Number + String = String
	//		   Number + Number = Number

	let numero1=parseInt(document.getElementById("txtIdNumeroUno").value);
	let numero2=parseInt(document.getElementById("txtIdNumeroDos").value);

	let resultado=numero1+numero2;

	alert("El resultado es "+ resultado);

}

