const idade = parseInt(prompt("Digite sua idade:"))
const status = prompt("Digite seu status de registro (registrado ou não registrado):").toLowerCase()

const maiorDeIdade = idade >= 18 ? true : false

switch (status) {
    case "registrado":
        alert("Bem-vindo! Obrigado por ser um usuário registrado.")
        break
    case "não registrado":
        alert("Por favor, complete seu registro para acesso completo.")
        break
    default:
        alert("Status desconhecido.")
        break
}

if (maiorDeIdade && status === "registrado") {
    alert("Você é maior de idade e está registrado. Acesso completo concedido!")
} else if (!maiorDeIdade || status !== "registrado") {
    alert("Você tem acesso limitado.")
}