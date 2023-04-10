function armazenaValores() {
	var campoNumero = document.getElementById("entrada");
	var mensagem = document.getElementById("mensagem");
	var resposta = document.getElementById("resposta");

	var numeroDigitado = campoNumero.value;

	sorteiaNumero(mensagem, resposta, numeroDigitado);
}

function sorteiaNumero(mensagem, resposta, numeroDigitado) {
	var numeroSorteado = Math.random() * 10;
	numeroSorteado = Math.round(numeroSorteado);

	verificaAcertoOuErro(mensagem, resposta, numeroDigitado, numeroSorteado);
}

function verificaAcertoOuErro(mensagem, resposta, numeroDigitado, numeroSorteado) {
	if (numeroDigitado == numeroSorteado) {
		mensagem.textContent = "Parabéns! Você acertou o número sorteado."
	} else {
		mensagem.textContent = "Errou! O número sorteado é " + numeroSorteado;
	}
}