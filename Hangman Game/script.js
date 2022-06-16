//          VARIABLES PRINCIPALES
var palabrasEscondidas = [ "HOLA" , "CHAU" , "LOVE" , "ROKITO" , "ALURA" , "GRIDS" , "ORACLE" , "NACHO" ,"MIGUEL" , "MATAYUYO" , "BLACK" ];
var letters = /^[A-Z]+$/;



//          VARIABLES MENU INICIAL
var palabraNueva;
var ingresoPalabra;
var botonInicial;



//          VARIABLES DEL JUEGO
var inputLetraInicial = document.querySelector(".entrada-input");
inputLetraInicial.value = "";
var chequeador;
var palabraEscondida;
var areaEscondidas;
var divisiones;
var vidas = 100;
var dibujoAhorcado = document.querySelector("#imagenAhorcado");
var depositoLetrasUsadas = document.querySelector(".letras-usadas");
var contadorAciertos;
var letrasEscondidas;

function accionAgregarPalabra(){
    if (vidas == 100) { /* para que no agrege palabras con el juego iniciado*/
    ingresoPalabra = document.querySelector("#inputPalabra");
    console.log(ingresoPalabra.value);
    palabraNueva = ingresoPalabra.value;
    console.log(palabraNueva);

    if(palabraNueva.match(letters)){

        palabrasEscondidas.push(palabraNueva);
        console.log(palabrasEscondidas);
    }
    else{
        alert("Letras mayusculas unicamente!!")
    }
    }
    else{
        alert("No puedes agregar una palabra mientras el juego esta iniciado");
    }
}




function crearEscondida(){

    // con el split.("") lo dividimos en letras!!!
    letrasEscondidas = palabraEscondida[0].split("");

    console.log(" ");

    console.log("  ▷▷▷▷  " + letrasEscondidas + "  ◁◁◁◁ Array de Letras");
    console.log(" ");
    
    // seteamos esto a vacio por las dudeiyons
    var letraEscondida = "";

    console.log("Total de: " + letrasEscondidas.length + "  letras ");
    


    for (var i=0; i < letrasEscondidas.length; i++){
        letraEscondida = letrasEscondidas[i];
        console.log(letraEscondida + "  ⚋ ⚋ ⚋ ⚋   Letra ▷▷ " + i + " ◁◁");
        // HABEMUS LETRITAS

        // Creamos el div "contenedor" de cada letrita
        var divNuevo = document.createElement("div");
        // le damos la clase pregenerada en css
        divNuevo.classList.add("letra-secreta");
        divNuevo.setAttribute("id", "divs")

        // copiamos el contenido de la variable dentro del HTML
        // el beforeend para darle una posicion, hay otra posicion mas comoda? cambia algo?
        divNuevo.insertAdjacentHTML("beforeend",letraEscondida);
        areaEscondidas.appendChild(divNuevo);
        // concretamos que el div creado con el texto elegido este dentro del div o seccion elegido


    }

}


//  Creamos array de div y los chupa


function dibujarCanvas(){
    switch (vidas) {
        case 0: {
            dibujoAhorcado.src = "./imagenes/ahorcado7.jpg";
            break;
        }
        case 1: {
            dibujoAhorcado.src = "./imagenes/ahorcado6.jpg";
            break;
        }
        case 2: {
            dibujoAhorcado.src = "./imagenes/ahorcado5.jpg";
            break;
        }
        case 3: {
            dibujoAhorcado.src = "./imagenes/ahorcado4.jpg";
            break;
        }
        case 4: {
            dibujoAhorcado.src = "./imagenes/ahorcado3.jpg";
            break;
        }
        case 5: {
            dibujoAhorcado.src = "./imagenes/ahorcado2.jpg";
            break;
        }
        case 6: {
            dibujoAhorcado.src = "./imagenes/ahorcado1.jpg";
            break;
        }
        case 7: {
            dibujoAhorcado.src = "./imagenes/ahorcado0.jpg";
            break;
        }
        case 8: {
            dibujoAhorcado.src = "./imagenes/ahorcadoGanar.jpg";
            break;
        }
        
    }
}



function chequeoLetras(){

    // con el split.("") lo dividimos en letras!!!
    letrasEscondidas = palabraEscondida[0].split("");
    console.log(letrasEscondidas);
    // seteamos esto a vacio por las dudeiyons
    var letraEscondida = "";
    
    // Entrada Letra
    inputLetra = document.querySelector(".entrada-input").value;    
    // Generador del chequeador
    chequeador = inputLetra;
    console.log(chequeador + "          Este es el chequeador");
    

    // Hacemos un if para que si esta correcto el input pase a hacer el for
    if(inputLetra.match(letters)){
    
            // Creamos el loop para verificar que la letra forma parte de la palabra, si lo es la pinta de blanco
            // Estamos safe en pintar las letras de blanco porque los divs contenedores no son seleciconables
            // Entonces no tenemos que pensar en escribir las letras, sino en cambiarles de color para mostrarlas.



            if (letrasEscondidas.includes(chequeador)){
                for (var i=0; i < divisiones.length; i++){
                    letraEscondida = letrasEscondidas[i];
                    
                    if (chequeador == letraEscondida){
                        divisiones[i].style.color = "white";
                        contadorAciertos++;
                        console.log("Cantidad de aciertos:  " + contadorAciertos);
                    }

                }     
            }
            else{
                vidas--;
                /*dibujarCanvas();*/
                console.log("VIDA PERDIDA");
                console.log(" Te quedan :");
                console.log(vidas);
                console.log("vidas");
            }

    }

    // Si el input es incorrecto tira error.
    else{
    alert('Solo Letras Mayusculas!!');

    }



    inputLetraInicial.value = "";
    inputLetraInicial.focus();
    dibujarLetra();

}


function dibujarLetra(){
    // Creamos el div "contenedor" de cada letrita
    var divUsadas = document.createElement("div");
    // le damos la clase pregenerada en css
    var siono;
    if (letrasEscondidas.includes(chequeador)){
          siono = true;
    }
    else {
        siono = false;
    }
    if (siono == true){
        divUsadas.classList.add("letraAcertada"); 
    }
    else{
        divUsadas.classList.add("letraErrada")
    }

     
    divUsadas.insertAdjacentHTML("beforeend",chequeador);
    depositoLetrasUsadas.appendChild(divUsadas);
    // concretamos que el div creado con el texto elegido este dentro del div o seccion elegido
}





//      2: Inicio de juego

function activarJuego(){
    if (vidas == 7){ /* para evitar bugs al repetir clics en iniciar juego*/
        alert("El juego ya esta iniciado!")
    }
    else{
    console.log("Iniciando juego... ")
    console.log(" ");
    var inputLetra = document.querySelector(".entrada-input").value;
    
    console.log("Generando palabra aleatoria")
    palabraEscondida = palabrasEscondidas[Math.floor(Math.random()*palabrasEscondidas.length)];
    palabraEscondida = palabraEscondida.split();
    console.log(" ");
    console.log("▽▽▽▽▽▽▽▽▽▽▽▽▽▽▽▽▽▽▽▽▽▽▽");
    console.log("  >>>  " + palabraEscondida + " <<<    Palabra Secreta");
    console.log("△△△△△△△△△△△△△△△△△△△△△△△");
    areaEscondidas = document.querySelector(".palabra-secreta");


    divisiones = document.getElementsByClassName("letra-secreta");

    crearEscondida();

    vidas = 7;
    contadorAciertos = 0;
    dibujarCanvas();
    inputLetraInicial.value = "";    
    inputLetraInicial.focus();
    
    }   
}      




function ingresarLetraJuego(){
    if (vidas==0){
    
            alert("No te quedan vidas, vuelve a iniciar el juego");
            botonInicial = document.getElementById("iniciarJuego");
            areaEscondidas.textContent = "";
            depositoLetrasUsadas.textContent = "";
            botonInicial.focus();
            dibujarCanvas();

        }
    else if (contadorAciertos==letrasEscondidas.length){
        alert("GANASTEEEE EA EA EA EA");
        botonInicial = document.getElementById("iniciarJuego");
        areaEscondidas.textContent = "";
        botonInicial.focus();
        vidas = 8;
        dibujarCanvas();
    }
    else{
        chequeoLetras();
        dibujarCanvas();
    }  

}
