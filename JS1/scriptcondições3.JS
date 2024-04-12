function carregar() {
    const agr = new Date();
    const hora = agr.getHours();
    const min = agr.getMinutes();
    const h1 = document.getElementsByTagName('h1')[0];
    const img = document.getElementsByTagName('img')[0];
    const div = document.getElementsByTagName('div')[0];
    const corpo = document.getElementsByTagName('body')[0];
    const ftr = document.getElementsByTagName('footer')[0];
    if (hora >= 6 && hora < 12){
        h1.innerHTML = 'Bom dia';
        img.src = 'imagens/manhã.jpg';
        corpo.style.background = 'yellow';
    } else if (hora < 18){
        h1.innerHTML = 'Boa tarde';
        img.src = 'imagens/tarde.jpg';
        corpo.style.background = 'orange';
    } else {
        h1.innerHTML = 'Boa noite';
        img.src = 'imagens/noite.jpg';
        corpo.style.background = 'rgb(26, 20, 97)';
        ftr.style.color = 'white';
    }
    div.innerHTML = `Agora são ${hora} horas e ${min} minutos.`;
}