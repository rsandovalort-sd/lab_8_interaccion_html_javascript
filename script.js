function registrarVoto(){
    const radios = document.getElementsByName("opcion");
    let seleccion = null;
    let votos = parseInt(document.getElementById("votos-js").innerHTML) || 0;
    for( let radio of radios){
        if(radio.checked){
            seleccion = radio.value;
            // alert("¡Gracias por tu voto!");
            votos += 1;
            document.getElementById("votos-js").innerHTML = votos;
            break
        } 
        
    }
    if (votos % 5 === 0){
        console.log("El total de votos es: ",votos); 
    } 
}
   

