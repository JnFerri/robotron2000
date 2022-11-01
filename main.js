//alterar cor 

var localImg = document.querySelector('.robotron')
const botaoCor = document.getElementById('alterarCor')
var quantidadeDeCor = 5
var coresImg = []
for(var i=0; i <=quantidadeDeCor; i++){
    coresImg.push(`img/Coresrobo/robotron_${i}.png`)
}
document.onload = localImg.innerHTML = `<img class="robo" src="${coresImg[0]}" alt="Robotron"> <figcaption class="titulo">ROBOTRON <br>2000</figcaption>`

valorIMG = 1
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

const controleContador = document.querySelectorAll('.controle-contador')
const controleAjuste = Array.from(document.querySelectorAll('.controle-ajuste'))

controleAjuste.forEach(controle => controle.onclick = function(){
    if(controleAjuste[controleAjuste.indexOf(controle)].textContent === '+'){
        controleContador[parseInt(controleAjuste.indexOf(controle) /2)].value = Number(controleContador[parseInt(controleAjuste.indexOf(controle) /2)].value) + 1
    }
    else if(controleContador[parseInt(controleAjuste.indexOf(controle) /2)].value > 0){
        controleContador[parseInt(controleAjuste.indexOf(controle) /2)].value = Number(controleContador[parseInt(controleAjuste.indexOf(controle) /2)].value) - 1
    }
})



