let num = [3,2,4]
console.log(`
Nosso vetor possuí os valores ${num}
`)
num.push(1)
console.log(`Adicionando um valor nosso vetor pussuí os valores ${num} e tem ${num.length} posições
`)
for(pos in num) {
    console.log(`posição ${Number(pos)+1} tem valor ${num[pos]}`)
}
num.sort()
console.log(`
Organizando nosso vetor ele pussuirá os mesmos valores nessa ordem: ${num}
`)
console.log(`
Agora`)
for(pos in num) {
    console.log(`posição ${Number(pos)+1} tem valor ${num[pos]}`)
}
console.log(`
para buscar a posição de um valor use o código: num.indexOf(valor)
`)