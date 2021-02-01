/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
	let preciouno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    let preciodos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    let preciotres=parseFloat(document.getElementById("txtIdPrecioTres").value);

	alert("La suma de los tres productos es "+ (preciouno+preciodos+preciotres).toFixed(2));
}
function Promedio () 
{
	let preciouno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    let preciodos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    let preciotres=parseFloat(document.getElementById("txtIdPrecioTres").value);

	alert("El promedio de los tres productos es "+ ((preciouno+preciodos+preciotres)/3).toFixed(2));
}
function PrecioFinal () 
{
	let preciouno=parseFloat(document.getElementById("txtIdPrecioUno").value);
    let preciodos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    let preciotres=parseFloat(document.getElementById("txtIdPrecioTres").value);

	alert("El precio final de los tres productos es "+ ((preciouno+preciodos+preciotres)*1.21).toFixed(2));
}