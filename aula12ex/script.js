function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = 122//data.getHours(); 
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manhã.png';
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png';
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'imagens/noite.png';
        document.body.style.background = '#515154'
    }
}
