//alterar cor 

var localImg = document.querySelector('.robotron')
const botaoCor = document.getElementById('alterarCor')
var quantidadeDeCor = 5
var coresImg = []
for(var i=0; i <=quantidadeDeCor; i++){
    coresImg.push(`img/Coresrobo/robotron_${i}.png`)
}
document.onload = localImg.innerHTML = `<img class="robo" src="${coresImg[0]}" alt="Robotron">`

valorIMG = 0
botaoCor.onclick = function(){
    if(valorIMG < quantidadeDeCor){
localImg.innerHTML = `<img class="robo" src="${coresImg[valorIMG]}" alt="Robotron">`
valorIMG += 1
    }else {
        localImg.innerHTML = `<img class="robo" src="${coresImg[0]}" alt="Robotron">`
        valorIMG = 0
    }
}

