function confirmar(){
var input1 = document.getElementById('botao1')
var input2 = document.getElementById('botao2')
var input3 = document.getElementById('botao3')
var input4 = document.getElementById('botao4')
var input5 = document.getElementById('botao5')

input1 = input1.value
input2 = input2.value
input3 = input3.value
input4 = input4.value
input5 = input5.value

var nome = document.getElementById('d001')
var vencto = document.getAnimations('d002')
var numero = document.getElementById('num')
var digitos = document.getElementById('content3') 

nome.innerHTML = `${input1}`
vencto.innerHTML = `${input3}`
numero.innerHTML = `${input2}`
digitos.innerHTML = `${input5}`

}