const quadrados = document.querySelectorAll('#conteiner .coluna div');
let jogador1 = 'G';
const h1 = document.querySelector("body > h1");

while(jogador1 !== 'X' && jogador1 !== 'O'){
    jogador1 = prompt('Jogador 1 : Escolha entre X e O').toUpperCase();
}

let jogador2 = 'X';
if(jogador1 === 'X'){
    jogador2 = 'O';
}

let i = 1;

function diagonal(){
    if(quadrados[0].innerHTML !== '.' && quadrados[0].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[8].innerHTML){
        encerrar();
    }
    
    if(quadrados[6].innerHTML !== '.' && quadrados[6].innerHTML === quadrados[4].innerHTML && quadrados[4].innerHTML === quadrados[2].innerHTML){
        encerrar();
    }
}

function encerrar(){
    
    for(let quadradinho of quadrados){
        quadradinho.onclick = null;
    }
    h1.innerHTML = "Parábens,  jogador " + (i % 2 === 0 ? "1" : "2") + "  !!";
}

function jogada(){
    
    if(i % 2 === 0){
        this.innerHTML = jogador2;
    }
    else{
        this.innerHTML = jogador1;
    }
    i++;
    this.onclick = null;
    verificarFim();
}

function verificarFim(){
    for(let j = 0; j < 9; j += 3){   
        if(quadrados[j].innerHTML !== '.' && quadrados[j].innerHTML === quadrados[j + 1].innerHTML && quadrados[j + 1].innerHTML === quadrados[j + 2].innerHTML){
            encerrar();
        }
    }
    for(let j = 0; j < 3; j += 1){   
        if(quadrados[j].innerHTML !== '.' && quadrados[j].innerHTML === quadrados[j + 3].innerHTML && quadrados[j + 3].innerHTML === quadrados[j + 6].innerHTML){
            encerrar();
        }
    }
    
    diagonal();
    
}

for(let quadrado of quadrados){
    quadrado.onclick = jogada;
}

