function armazenaValores() {
	var campoNumero = document.getElementById("entrada");
	var resposta = document.getElementById("resposta");

	var numeroDigitado = campoNumero.value;

	verificaValorDigitado(numeroDigitado);
}

function sorteiaNumero() {
	//Armazenando um número aleatório de 0 a 10
	var numeroSorteado = Math.random() * 10;

	//Arredondando o número
	numeroSorteado = Math.round(numeroSorteado);

	verificaAcertoOuErro(numeroSorteado);
}

function verificaAcertoOuErro(numeroSorteado) {
	if (numeroDigitado == numeroSorteado) {
		resposta.textContent = "Parabéns você acertou!!!";
	} else {
		resposta.textContent = "Errou!! O número sorteado é " + numeroSorteado;
	}
}

function verificaValorDigitado(numeroDigitado) {
	var mensagem = document.getElementById("mensagem")

	console.log(numeroDigitado);

	if (isNaN(numeroDigitado)) {
		mensagem.textContent = "Digite somente números!";
	} else {
		mensagem.textContent = "Ok!";
	}
}