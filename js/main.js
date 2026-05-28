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
    des = 0
    total_nuevo = 0
    porcentaje = ""

    if (total > 50000 && total <= 100000) {
        porcentaje = "5%"
        des = total * 0.05
        total_nuevo = total - des
    } else if (total > 100000 && total <= 199999) {
        porcentaje = "10%"
        des = total * 0.10
        total_nuevo = total - des
    } else if (total >= 200000) {
        porcentaje = "20%"
        des = total * 0.20
        total_nuevo = total - des
    } else {
        total_nuevo = total
    }

    alert("Razon social: " + rs +
        "\n # Factura: " + nfac + " Fecha: " + fecha +
        "\n**********************************************" + 
        "\n*************Datos del cliente***************" + 
        "\n**********************************************" + 
        "\n Identificación: " + id +
        "\n Cliente: " + nom +
        "\n Dirección: " + dir +
        "\n Telefono: " + telf +
        "\n**********************************************" + 
        "\n************Datos del producto*************" + 
        "\n**********************************************" + 
        "\n Producto: " + p +
        "\n Cantidad: " + cant + 
        "\n Valor unitario: $" + vu +
        "\n Iva: $" + iva + 
        "\n Sub total: $" + subtotal + 
        "\n**********************************************" + 
        "\n Total: $" + total +
        "\n**********************************************" +
        "\n Descuento aplicado: " + porcentaje +
        "\n Valor descontado: " + des +
        "\n Nuevo total a pagar: $" + total_nuevo +
        "\n**********************************************")
}