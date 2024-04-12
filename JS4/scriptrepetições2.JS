function gt(){
    const cxn = document.getElementById('n')
    const n = Number(cxn.value)
    const res = document.getElementById('res')
    res.innerText = ''
    if (n == 0){
        alert('dados faltando')
    }else{
        for (let i = 1; i <= 10; i++){
            const item = document.createElement('option')
            item.text = n + ' x ' + i + ' = ' + n*i
            item.value = i
            res.appendChild(item)
        }
    }
}