var respostaChances = document.getElementById("numero-chances");
var chances = 3;

console.log(respostaChances);

function armazenaValores() {
	if (chances > 0) {
		console.log(chances);
		var campoNumero = document.getElementById("entrada");
		var resposta = document.getElementById("resposta");
		var numeroDigitado = campoNumero.value;

		respostaChances.textContent = "Você tem " + chances + " chances!";

		verificaValorDigitado(resposta, numeroDigitado);
	} else {
		var botao = document.getElementById("botao").style.display = "none";
	}
}

function sorteiaNumero(numeroDigitado, valorValido, resposta) {
	var numeroSorteado = Math.random() * 10;
	numeroSorteado = Math.round(numeroSorteado);
	console.log(numeroSorteado);
	verificaAcertoOuErro(numeroSorteado, numeroDigitado);
}

function verificaAcertoOuErro(numeroSorteado, numeroDigitado) {
	if (numeroDigitado == numeroSorteado) {
		resposta.textContent = "Parabéns! Você acertou o número sorteado."
	} else {
		resposta.textContent = "Errou! O número sorteado é " + numeroSorteado;
		chances--;
	}
}

function verificaValorDigitado(resposta, numeroDigitado) {
	if (numeroDigitado.length == 0) {
		resposta.textContent = "Digite algum número!";
	} else if (isNaN(numeroDigitado)) {
		resposta.textContent = "Digite somente números!";
	} else if (numeroDigitado < 0 || numeroDigitado > 10) {
		resposta.textContent = "Digite somente números entre 0 a 10!";
	} else {
		sorteiaNumero(numeroDigitado, resposta);
	}
}