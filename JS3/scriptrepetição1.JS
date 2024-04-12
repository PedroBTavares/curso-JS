function contar(){
    const cxini = document.getElementById('ini')
    const cxfim = document.getElementById('fim')
    const cxp = document.getElementById('p')
    let ini = Number(cxini.value)
    const fim = Number(cxfim.value)
    const p = Number(cxp.value)
    //valores

    let res = document.getElementById('res')
    res.innerHTML = ''
    if (ini == 0 || fim == 0 || p == 0){
        res.innerHTML = 'impossível contar, dados faltando ou equivocados.'
    } else if (fim <= ini){
        while (fim <= ini) {
            if (ini - p < fim){
                res.innerHTML += `${ini}. FIM`
            } else {
                res.innerHTML += `${ini}\u{1f449} `
            }
            ini -= p
        }
    } else {
        while (ini <= fim) {
            if (ini + p > fim){
                res.innerHTML += `${ini}. FIM`
            } else {
                res.innerHTML += `${ini}\u{1f449} `
            }
            ini += p
        }
    }
}