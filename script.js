// cotação de moedas
const USD = 5.67
const EUR = 6.23
const GBP = 7.45

const form = document.querySelector('form')
const footer = document.querySelector('main footer')
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const description = document.getElementById("description")
const result = document.getElementById("result")


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

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break

  }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    // converte o valor da moeda para BRL
    let total = amount * price
    total = formatCurrencyBRL(total)
    result.textContent = total

    //aplica a classe que exibe o footer
    footer.classList.add("show-result")
  } catch (error) {
    console.log(error);
    // remove a classe que exibe o footer
    footer.classList.remove("show-result")
  }
}

// Formata o valor para moeda Brasileira(BRL)
function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}