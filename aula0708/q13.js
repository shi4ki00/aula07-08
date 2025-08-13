let dkm = prompt("quantos km voce percorreu?")
let vmd = prompt("qual foi a velocidade media da viagem?")
let pdl = prompt("qual é o preço do litro de combustivel?")
let kml = prompt("qual é o consumo do seu carro")
let tvh, lc, cv
tvh = Number(tvh)
lc = Number(lc)
cv = Number(cv)

dkm = Number(dkm)
vmd = Number(vmd)
pdl = Number(pdl)
kml = Number(kml)

tvh = dkm / vmd
lc = tvh / kml
cv = lc * kml

console.log("o tempo da viagem foi de "+ tvh + " horas")
console.log("a quantidade de litros consumidos foi de "+ lc +" litros")
console.log("o custo estimado para essa viagem e de $"+ kml)