function registrarVoto(){
    const radios = document.getElementsByName("opcion");
    let seleccion = null;

    for( let radio of radios){
        if(radio.checked){
            seleccion = radio.value;
            alert(seleccion);
            break;
    }

}
}