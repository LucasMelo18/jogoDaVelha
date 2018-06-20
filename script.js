const quadrados = document.querySelectorAll('#conteiner .coluna div');
let jogador1 = prompt('Jogador 1 : Escolha entre X e O');
let jogador2 = prompt('Jogador 2 : Escolha entre X e O');
let i = 1;

function jogada(){
    if(i % 2 === 0){
        alert('Vez do jogador 2');
        this.innerHTML = jogador2;
    }
    else{
        alert('Vez do jogador 1');
        this.innerHTML = jogador1;
    }
    i++;
}
for(let quadrado of quadrados){
    quadrado.onclick = jogada;
}
