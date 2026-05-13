function buscar(){
    //alert("Esto es un mensaje")
    rs = document.getElementById("rs").value
    nfac = document.getElementById("nfac").value
    fecha = document.getElementById("fecha").value
    nom = document.getElementById("nom").value
    id = document.getElementById("id").value
    dir = document.getElementById("dir").value
    telf = document.getElementById("telf").value
    p = document.getElementById ("p").value
    vu = document.getElementById("vu").value 
    cant = document.getElementById("cant").value 
    subtotal = vu * cant
    iva = subtotal * 0.19
    total =  subtotal + iva

    alert("razon social: " + rs +
        "\n # factura: " + nfac + " fecha: " + fecha +
        "\n**********************************************" + 
        "\n*************Datos del cliente****************" + 
        "\n**********************************************" + 
        "\n identificación: " + id +
        "\n cliente: " + nom +
        "\n dirección: " + dir +
        "\N telefono: " + telf +
        "\n**********************************************" + 
        "\n*************Datos del producto***************" + 
        "\n**********************************************" + 
        "\n producto: " + p +
        "\n cantidad: " + cant + 
        "\n Valor unitario: $" + vu +
        "\n iva: $" + iva + 
        "\n sub total: $" + subtotal + 
        "\n**********************************************" + 
        "\n total: $" + total +
        "\n**********************************************")
}