import {pecas} from '/estatisticas.js'
//alterar cor 

var localImg = document.querySelector('.robotron')
const botaoCor = document.getElementById('alterarCor')
var quantidadeDeCor = 5
var coresImg = []
for(var i=0; i <=quantidadeDeCor; i++){
    coresImg.push(`img/Coresrobo/robotron_${i}.png`)
}
document.onload = localImg.innerHTML = `<img class="robo" src="${coresImg[0]}" alt="Robotron"> <figcaption class="titulo">ROBOTRON <br>2000</figcaption>`

var valorIMG = 1
botaoCor.onclick = function(){
    if(valorIMG < quantidadeDeCor){
localImg.innerHTML = `<img class="robo" src="${coresImg[valorIMG]}" alt="Robotron"> <figcaption class="titulo">ROBOTRON <br>2000</figcaption>`
valorIMG += 1
    }else {
        localImg.innerHTML = `<img class="robo" src="${coresImg[0]}" alt="Robotron"> <figcaption class="titulo">ROBOTRON <br>2000</figcaption>`
        valorIMG = 1
    }
}
//atribuicao de valores aos botoes de somar e diminuir

const controleAjuste = Array.from(document.querySelectorAll('[data-controle]'))
const estatisticas = Array.from(document.querySelectorAll('[data-estatistica]'))
controleAjuste.forEach(controle => controle.onclick = function(){
    if(controleAjuste[controleAjuste.indexOf(controle)].dataset.controle === '+'){
        controle.parentNode.querySelector('.controle-contador').value = parseInt(controle.parentNode.querySelector('.controle-contador').value) +1
                estatisticas[0].innerText = parseInt(estatisticas[0].innerText) + pecas[controle.parentNode.dataset.peca].forca
                estatisticas[1].innerText = parseInt(estatisticas[1].innerText) + pecas[controle.parentNode.dataset.peca].poder
                estatisticas[2].innerText = parseInt(estatisticas[2].innerText) + pecas[controle.parentNode.dataset.peca].energia
                estatisticas[3].innerText = parseInt(estatisticas[3].innerText) + pecas[controle.parentNode.dataset.peca].velocidade
              } 
    else if(controle.parentNode.querySelector('.controle-contador').value > 0 && controleAjuste[controleAjuste.indexOf(controle)].dataset.controle === '-'){
        controle.parentNode.querySelector('.controle-contador').value = parseInt(controle.parentNode.querySelector('.controle-contador').value) -1
                estatisticas[0].innerText = parseInt(estatisticas[0].innerText) - pecas[controle.parentNode.dataset.peca].forca
                estatisticas[1].innerText = parseInt(estatisticas[1].innerText) - pecas[controle.parentNode.dataset.peca].poder
                estatisticas[2].innerText = parseInt(estatisticas[2].innerText) - pecas[controle.parentNode.dataset.peca].energia
                estatisticas[3].innerText = parseInt(estatisticas[3].innerText) - pecas[controle.parentNode.dataset.peca].velocidade
    } else {
        console.log('faltando dataset + ou -, ou valor negativo invalido')
    }
})



