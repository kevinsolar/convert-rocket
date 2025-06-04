const form = document.querySelector('form')
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")


// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  //utilizando o regex, para identificar as letras.
	const hasCharactersRegex = /\D+/g;
  // apos identificar as letras, o valor de amount será ele mesmo, porém substituindo as letras por nada("").
	amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Captando o evento de submit (enviar) do form
form.onsubmit = (event) => {
  event.preventDefault();

  currency.value = currency.value.toUpperCase();
}

// Recebendo a moeda desejada.