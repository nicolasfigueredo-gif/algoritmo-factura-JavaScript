Algoritmo sin_titulo
	Definir id, nom, dir, telf, nfac, fecha, rs, p Como Caracter
	Definir cant, vu, subtotal Como Entero
	Definir iva, total Como Real
	
	Escribir "Ingrese su identificación"
	Leer id 
	Escribir "Ingrese nombre completo"
	Leer nom
	Escribir "Ingrese direcciión"
	Leer dir
	Escribir "Ingrese un telefono"
	Leer telf
	
	Escribir  "Ingrese numero de factura"
	Leer nfac
	Escribir "Ingrese fecha de factura"
	Leer fecha
	Escribir "Ingrese razon social"
	Leer rs
	Escribir "Ingrese producto"
	Leer p
	Escribir "Ingrese cantidad de producto"
	Leer cant
	Escribir "Ingrese valor unitario del producto"
	Leer vu
	subtotal = cant * vu
	iva = subtotal * 0.19
	total =  subtotal + iva
	
	Imprimir "**********************************************"
	Imprimir "Tienda legumbreria ", rs
	Imprimir "**********************************************"
	Imprimir "# Factura: ", nfac, " Fecha: ", fecha
	Imprimir "**********************************************"
	
	Imprimir "*************Datos del cliente****************"
	Imprimir "**********************************************"
	Imprimir "Idententifición cliente: ", id
	Imprimir "Cliente: ", nom
	Imprimir "Dirección cliente: ", dir
	Imprimir "Telefono: ", telf
	
	Imprimir "**********************************************"
	Imprimir "*************Datos del producto***************"
	Imprimir "**********************************************"
	Imprimir "Producto: ", p 
	Imprimir "Cantidad: ", cant, " kilos"
	Imprimir "$ unitario: ", vu
	Imprimir "Subtotal: $", subtotal
	Imprimir "Iva: $", iva, " 19%"
	
	Imprimir "**********************************************"
	Imprimir "Total a pagar: $", total, " pesos"
	Imprimir "**********************************************"
	
FinAlgoritmo
