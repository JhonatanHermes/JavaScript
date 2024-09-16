function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
 
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/Hcriança.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/Hjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/Hadulto.png')
            } else {
                img.setAttribute('src', 'imagens/Hidoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/Mcriança.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/Mjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/Madulto.png')
            } else {
                img.setAttribute('src', 'imagens/Midoso.png')
            }
        }
 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
 }
 