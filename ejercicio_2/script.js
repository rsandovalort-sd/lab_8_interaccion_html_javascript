let total_items = 0;
let total_compra = 0;
function actualizarSumar(boton){
    total_items++;
    document.getElementById("total-items").innerHTML = total_items;
    const padre = boton.parentNode;
    const precioSpan = padre.querySelector("span");
    const precio = parseInt(precioSpan.textContent);
    total_compra += precio;
    document.getElementById("total-compra").innerHTML = total_compra;
    if (total_compra ===50){
        alert("Envio gratis aplicado")
    }
}

function vaciarCarrito(){
    total_items = 0;
    total_compra = 0
    document.getElementById("total-items").innerHTML = total_items;
    document.getElementById("total-compra").innerHTML = total_compra;
    alert("Carrito vaciado")
}
