const USD = 5.12
const EUR = 6.06
const GBP = 6.95

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

function formatCurrencyBRL(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value)
}

form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
      
  }
}

function convertCurrency(amount, price, symbol){
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = amount * price
    total = formatCurrencyBRL(total).replace("R$", "")

    result.textContent = `${total} Reais`

    footer.classList.add("show-result")
  } catch (error) {
    console.log(error)
    footer.classList.remove("show-result")
    alert("Não foi possível converter. Tente novamente mais tarde.")
  }
}