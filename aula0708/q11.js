let s = prompt("qual e o seu salario por hora?")
let h = prompt("quantas horas voce trabalha por dia?")
let sh, sr

s = Number(s)
h = Number(h)

sh = s * h
sr = sh * 30 

console.log("o seu salario é: "+ sr)
