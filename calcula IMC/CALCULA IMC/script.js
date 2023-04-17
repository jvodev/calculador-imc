const frm = document.querySelector("form")
const calcular = document.getElementById("calcular")
const res = document.getElementById("res")

frm.addEventListener("submit", (e)  =>  {

const altura = Number(frm.altura.value)
const peso = Number(frm.peso.value)
const calculo = peso / (altura * altura)
  
res.innerText = `O seu IMC é ${calculo.toFixed(2)}` 

if (calculo <= 17)  {
    
}

e.preventDefault()

})
