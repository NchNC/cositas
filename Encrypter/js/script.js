
    //  BOTON ENCRIPTAR

const inputTexto = document.querySelector(".entrada");
const mensaje = document.querySelector(".salida");

function botonEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.textContent = textoEncriptado;
    

    inputTexto.value = "";
    inputTexto.focus();
      
}

function encriptar(texto){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    texto = texto.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return texto;
    
}

    //  BOTON PARA DESENCRIPTAR


const inputTexto2 = document.querySelector(".entrada");
const mensaje2 = document.querySelector(".salida");

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto2.value);
    mensaje2.textContent = textoDesencriptado;

    inputTexto.value = "";
    inputTexto.focus();

}

function desencriptar(texto){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    texto = texto.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++){
        if(texto.includes(matrizCodigo[i][1])){
            texto = texto.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return texto;
}


    //  BOTON COPIAR AL PORTAPAPELES


function copiar(texto){
    var contenido = document.querySelector(".salida");
    
    contenido.select()
    document.execCommand("copy");
    inputTexto.focus();

}


    //  GILADAS

function pegar(texto){
    var contenido = document.querySelector(".salida");
    inputTexto.value = contenido.value;
    inputTexto.focus();
}
    

