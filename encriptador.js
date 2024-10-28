function encriptar() {
    let texto = document.getElementById('input').value;
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    let texto = document.getElementById('input').value;
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    document.getElementById('output').innerText = texto;
    document.getElementById('myDIV').style.display = 'none';

    let copyButton = document.getElementById('copyButton');
    if (texto.length > 0) {
        copyButton.style.display = 'block';
    } else {
        copyButton.style.display = 'none';
    }
}

function copiarTexto() {
    let texto = document.getElementById('output').innerText;
    navigator.clipboard.writeText(texto).then(function() {
        alert('Texto copiado al portapapeles');
    }, function(err) {
        console.error('Error al copiar el texto: ', err);
    });
}

