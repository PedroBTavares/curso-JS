const lst = document.getElementById('lst')
let v = []
const res =[document.getElementById('ntv'),document.getElementById('maxv'),document.getElementById('minv'),document.getElementById('sv'),document.getElementById('mv')]
// criação de variáveis para lista e vetor resultado

function ad(){
    const cxn = document.getElementById('n')
    const num = Number(cxn.value)
    // armazenando o valor do input tipo number em uma variável
        
    if (cxn == NaN || num > 100 || num < 1 || num == v[v.indexOf(num)]){
        alert('os valores estão errados ou não foram digitados')
    } else {
        function ademv(){
            return v.push(num)
        }
        // adiciana a variável 'num' ao vetor 'v'

        function ademlst(){
            const valor = document.createElement('option')
            valor.text = `valor ${num} adicionado`
            lst.appendChild(valor)
        }
        // adiciona a variável 'num' à lista

        ademv()
        ademlst()
        //chamada das funções anteriores
        }
    
    cxn.value = NaN
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