const textArea = document.querySelector(".desktop_contenido_text-area");
const mensajeResultado = document.getElementById("output-message");
const copyButton = document.getElementById("copy-button");
const faltamensaje = document.querySelector(".desktop_mensaje-faltamensaje");
const faltatexto = document.querySelector(".desktop_mensaje_faltatexto");
const imagenInformativa = document.querySelector(".desktop_mensaje_imagen");
const outputContainer = document.getElementById('output-container');

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensajeResultado.textContent = textoEncriptado;
    actualizarElementos();
}

//Lógica de botón de encriptar
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensajeResultado.textContent = textoDesencriptado;
    actualizarElementos();
}

//Lógica de botón de desencriptar
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    const textoCopiado = mensajeResultado.textContent;
    navigator.clipboard.writeText(textoCopiado).then(() => {
        // Cambiar el texto y el estilo del botón
        copyButton.textContent = "Copiado";
        copyButton.style.backgroundColor = "var(--color-primario)"; // Color de borde como fondo
        copyButton.style.color = "var(--color-secundario)"; // Texto en blanco
        
        // Restaurar el texto y estilo del botón después de unos segundos
        setTimeout(() => {
            copyButton.textContent = "Copiar";
            copyButton.style.backgroundColor = "var(--color-secundario)";
            copyButton.style.color = "var(--color-primario)";
        }, 2000); // Cambia el valor a los segundos que desees
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}


function actualizarElementos() {

    if (textArea.value.trim() !== "") {
        copyButton.style.display = "block";
        mensajeResultado.style.display = "block";
        faltamensaje.style.display = "none";
        faltatexto.style.display="none";
        imagenInformativa.style.display="none";

    } else {
        copyButton.style.display = "none";
        mensajeResultado.style.display = "none";
        faltamensaje.style.display="block";
        faltatexto.style.display="block";
        imagenInformativa.style.display = "hidden"

    }
   
}

actualizarElementos();
