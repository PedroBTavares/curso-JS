/*function vnpi(n){
    if (n%2 == 0){
        return `${n} é par`
    } else{
        return `${n} é impar`
    }
}
console.log(vnpi(10))*/
//a função acima verifica se um número é par ou impar

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

/*function somar(n1 = 0, n2 = 0){
    return `${n1} + ${n2} é igual a ${n1+n2}`
}
console.log(somar(9,9))*/
// a função acima soma dois números

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

/*const f = function(n){          não é nessessário um nome para uma function dentro de uma variável
    return n + ' x 2 é igual a ' + n*2
}
console.log(f(7))*/
//coloca uma function dentro de uma variável que é chamada a partir do nome da variável

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

/*function fat(n){
    let fat = 1
    for (i = n; i > 1; i--){
        fat *= i
    }
    return `o fatorial de ${n} é ${fat}`
}
console.log(fat(7))*/
//calcula o fatorial de um número

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

/*function fat(n){
    if (n==1){
        return 1
    } else {
        return n*fat(n-1)
    }
}
console.log(fat(6))*/     //precisa ter uma chamada externa
//calcula o fatorial de um número usando uma function recursiva