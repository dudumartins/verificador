function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente! [ERRO]')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'imagens/criança-homem.png')
            }else if (idade < 31) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-homem.png')
            }else if (idade < 55) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-homem.png')
            }else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-homem.png')
            }
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'imagens/criança-mulher.png')
            }else if (idade < 31) {
                //Jovem
                img.setAttribute('src', 'imagens/jovem-mulher.png')
            }else if (idade < 55) {
                //Adulto
                img.setAttribute('src', 'imagens/adulto-mulher.png')
            }else {
                //Idoso
                img.setAttribute('src', 'imagens/idoso-mulher.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}