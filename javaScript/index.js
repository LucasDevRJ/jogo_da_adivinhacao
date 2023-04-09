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

	var numeroDigitado = campoNumero.value;

	if (numeroDigitado == numeroSorteado) {
		resposta.textContent = "Parabéns você acertou!!!";
	} else {
		resposta.textContent = "Errou!! O número sorteado é " + numeroSorteado;
	}
}