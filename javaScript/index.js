function armazenaValores() {
	var campoNumero = document.getElementById("entrada");
	var mensagem = document.getElementById("mensagem");
	var resposta = document.getElementById("resposta");

	var numero = campoNumero.value;
}

function sorteiaNumero() {
	var numeroSorteado = Math.random() * 10;
	numeroSorteado = Math.round(numeroSorteado);
}