let n1, n2, n3, p1, p2, p3

n1 = prompt("digite a sua nota 1")
n2 = prompt("digite a sua nota 2")
n3 = prompt("digite a sua nota 3")

p1 = prompt("digite o peso da sua nota 1")
p2 = prompt("digite o peso da sua nota 2")
p3 = prompt("digite o peso da sua nota 3")

n1 = Number(n1)
n2 = Number(n2)
n3 = Number(n3)

p1 = Number(p1)
p2 = Number(p2)
p3 = Number(p3)

nota = (((n1*p1)+(p2*n2)+(p3*n3))/3)

console.log("A media ponderada das suas notas é: "+ nota)