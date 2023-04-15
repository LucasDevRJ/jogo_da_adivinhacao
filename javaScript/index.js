var botaoRecomecar = document.getElementById("botao-recomecar").style.display = "none";

var chances = 3;
var venceu = false;

function armazenaValores() {
	document.getElementById("botao-recomecar").style.display = "none";
	var respostaChances = document.getElementById("numero-chances");
	var paragrafoNumeroDigitado = document.getElementById("numero-digitado");
	
	respostaChances.textContent = "Você tem " + chances + " chances!";

	var campoNumero = document.getElementById("entrada");
	var resposta = document.getElementById("resposta");
	var numeroDigitado = campoNumero.value;

	if (chances > 0) {
		console.log(chances);
		verificaValorDigitado(resposta, numeroDigitado, campoNumero);
	} else if (chances == 0) {
		venceu = false;
		removeElementos(campoNumero, resposta, numeroDigitado, respostaChances, paragrafoNumeroDigitado);
	}
}

function sorteiaNumero(numeroDigitado, valorValido, campoNumero, resposta) {
	var numeroSorteado = Math.random() * 10;
	numeroSorteado = Math.round(numeroSorteado);
	console.log(numeroSorteado);
	verificaAcertoOuErro(numeroSorteado, numeroDigitado, campoNumero);
}

function verificaAcertoOuErro(numeroSorteado, numeroDigitado, campoNumero) {
	if (numeroDigitado == numeroSorteado) {
		venceu = true;
		removeElementos(campoNumero, resposta);
	} else {
		resposta.textContent = "Errou! O número sorteado é " + numeroSorteado;
		chances--;
	}
}

function verificaValorDigitado(resposta, numeroDigitado, campoNumero) {
	if (numeroDigitado.length == 0) {
		resposta.textContent = "Digite algum número!";
	} else if (isNaN(numeroDigitado)) {
		resposta.textContent = "Digite somente números!";
	} else if (numeroDigitado < 0 || numeroDigitado > 10) {
		resposta.textContent = "Digite somente números entre 0 a 10!";
	} else {
		sorteiaNumero(numeroDigitado, resposta, campoNumero);
	}
}

function removeElementos(campoNumero, resposta) {
	var botao = document.getElementById("botao").style.display = "none";
	campoNumero.style.display = "none";
	if (venceu == true) {
		resposta.textContent = "Parabéns, Você acertou!!"
	} else {
		resposta.textContent = "Você Perdeu!!";
	}
	document.getElementById("numero-digitado").style.display = "none";
	document.getElementById("numero-chances").style.display = "none";

	var botaoRecomecar = document.getElementById("botao-recomecar");
	botaoRecomecar.style.display = "block";

	botaoRecomecar.onclick = function recomecarJogo() {
		var botao = document.getElementById("botao").style.display = "block";
		document.getElementById("numero-digitado").style.display = "block";
		document.getElementById("numero-chances").style.display = "block";
		campoNumero.style.display = "block";
		chances = 3;
		armazenaValores();
	}
}
