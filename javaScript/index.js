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

function verificaAcertoOuErro(numeroSorteado, numeroDigitado) {
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
	} else if (numeroDigitado.length == 0) {
		mensagem.textContent = "Digite algum número!";
	} else if (numeroDigitado < 0 || numeroDigitado > 10) {
		mensagem.textContent = "Digite somente números de 0 a 10!";
	} else {
		mensagem.textContent = "Número válido.";
	}
}