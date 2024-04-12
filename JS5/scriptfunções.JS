const lst = document.getElementById('lst')
let v = []
const res =[document.getElementById('ntv'),document.getElementById('maxv'),document.getElementById('minv'),document.getElementById('sv'),document.getElementById('mv')]

function ad(){
    let cxn = document.getElementById('n')
    const num = Number(cxn.value)
    const chave = v.indexOf(num)
    if(num < 1 || num > 100 || num == v[chave]){
        alert('dados errados')
    } else {
        v.push(num)
        //valor guardado no algoritimo

        const valor = document.createElement('option')
        valor.text = `Valor ${num} adicionado`
        lst.appendChild(valor)
        //valor exibido na página

        res[0].innerHTML=''
        res[1].innerHTML=''
        res[2].innerHTML=''
        res[3].innerHTML=''
        res[4].innerHTML=''
    }
    cxn.value=NaN
    cxn.focus()
}
function f(){
    if(v.length == 0){
        alert('Nenhum número cadastrado, impossível finalizar')
    } else {
        res[0].innerHTML=`Ao todo, temos ${v.length} números cadastrados`
        let maxv = v[0]
        let minv = v[0]
        for(pos in v){
            if(v[pos] > maxv){
                maxv = v[pos]
            }
        }
        for(pos in v){
            if(v[pos] < minv){
                minv = v[pos]
            }
        }

        res[1].innerHTML=`O maior número informado foi ${maxv}`
        res[2].innerHTML=`O menor número informado foi ${minv}`
        
        let s = 0
        for(pos in v){
            s += v[pos]
            res[3].innerHTML=`A soma de todos os valores é ${s}`
        }
        const m = s/v.length
        res[4].innerHTML=`A média entre todos os valores é ${m}`
    }
}