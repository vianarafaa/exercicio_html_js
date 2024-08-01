const form = document.getElementById('form-comparador')
const resultado = document.getElementById('resultado')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const numA = parseInt(document.getElementById('num-a').value)
    const numB = parseInt(document.getElementById('num-b').value)

    if (numA < numB) {
        resultado.innerHTML =
            '<p style="color:green;">Formulário válido! Número B é maior que Número A.</p>'
    } else {
        resultado.innerHTML =
            '<p style="color:red;">Formulário inválido! Número B é menor que Número A.</p>'
    }
})
