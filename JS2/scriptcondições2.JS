function verificar() {
    const data = new Date();
    const ano = data.getFullYear();
    //ano atual

    const cxadn = document.getElementById('adn');
    const adn = Number(cxadn.value);
    const idd = ano - adn;

    const s = document.getElementById('s');
    const n = document.getElementById('n');
    //idade

    const masc = document.getElementsByName ('r')[0];
    const fem = document.getElementsByName ('r')[1];
    //sexo

    const res = document.getElementById('res');
    if (adn > ano || adn == 0) {
        alert('dados errados')
    } else if (masc.checked){
        if (s.checked) {
            res.innerHTML = `Você é um homem de ${idd} anos.`;
        }else if (n.checked){
            res.innerHTML = `Você é um homem de ${idd-1} anos.`;
        } else {
            alert('estão faltando dados.')
        }
        
    } else if (fem.checked){
        if (s.checked) {
            res.innerHTML = `Você é uma mulher de ${idd} anos.`;
        }else if (n.checked){
            res.innerHTML = `Você é uma mulher de ${idd-1} anos.`;
        } else {
            alert('estão faltando dados.')
        }
    }
    res.style.textAlign = 'center';
    res.style.background = 'red';
    res.style.color = 'white';
    res.style.font = 'bold 25px arial'
    //resultado
}