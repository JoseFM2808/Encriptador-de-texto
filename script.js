const textArea = document.querySelector(".desktop_contenido_text-area");
const mensaje = document.getElementById("output-message");
const copyButton = document.getElementById("copy-button");
const mensajeInformativo = document.querySelector(".desktop_mensaje_informativo-mensaje");
const textoInformativo = document.querySelector(".desktop_mensaje_informativo-texto");
const imagenInformativa = document.querySelector(".desktop_mensaje_informativo_imagen");
const outputContainer = document.getElementById('output-container');

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    mensaje.style.display = "block";
    botonCopiar.style.display = "block";
    actualizarElementos();
}

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
    mensaje.value = textoDesencriptado;
    mensaje.style.display = "block";
    botonCopiar.style.display = "block";
    actualizarElementos();
}

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
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}

function actualizarElementos() {
    if (mensaje.value.trim() !== "") {
        copyButton.style.display = "block";
        mensajeInformativo.style.display = "none";
        textoInformativo.style.display = "none";
        imagenInformativa.style.display = "none";
        outputContainer.style.display = 'block';
    } else {
        copyButton.style.display = "none";
        mensajeInformativo.style.display = "block";
        textoInformativo.style.display = "block";
        imagenInformativa.style.display = "block";
        outputContainer.style.display = 'none';
    }
}

textArea.addEventListener("input", () => {
    mensaje.value = "";
    actualizarElementos();
});

actualizarElementos();