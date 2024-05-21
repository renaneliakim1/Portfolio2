var textoParte1 = " Take your digital business to another level with a ";
var textoParte2 = "quality front-end! ";

var textoCompleto = textoParte1 + '<strong>' + textoParte2 + '</strong>';
var textoElemento = document.querySelector(".titulo_destaque");
var atraso = 90;
var contadorLetras = 0;

function escreverTexto() {
    if (contadorLetras < textoCompleto.length) {
        textoElemento.innerHTML = textoCompleto.substring(0, contadorLetras + 1);
        contadorLetras++;
        setTimeout(escreverTexto, atraso);
    }
}







escreverTexto();

