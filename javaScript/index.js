function sorteiaNumero() {
	//Armazenando um número aleatório de 0 a 10
	var numeroSorteado = Math.random() * 10;

	//Arredondando o número
	numeroSorteado = Math.round(numeroSorteado);

	verificaAcertoOuErro(numeroSorteado);
}

function verificaAcertoOuErro(numeroSorteado) {
	var campoNumero = document.getElementById("entrada");
	var resposta = document.getElementById("resposta");
	var erro = document.getElementById("erro");

	var numeroDigitado = campoNumero.value;

	if (numeroDigitado < 0 || numeroDigitado > 10) {
		erro.textContent = "Digite somente números entre 0 a 10!";
	}

	verificaValorDigitado(numeroDigitado);

	if (numeroDigitado == numeroSorteado) {
		resposta.textContent = "Parabéns você acertou!!!";
	} else {
		resposta.textContent = "Errou!! O número sorteado é " + numeroSorteado;
	}
}

function verificaValorDigitado() {
	var campoNumero = document.getElementById("entrada");
	var numeroDigitado = campoNumero.value;

	if (numeroDigitado < 0 || numeroDigitado > 10) {
		erro.textContent = "Digite somente números entre 0 a 10!";
	} else {
		erro.textContent = "Número válido";
	}
}