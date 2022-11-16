/*
OBJETIVO 1 - Quando passar o mouse em cima do personagem temos que:
- Colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele
-Retirar a classe selecionado do personagem que esta seelcionado

OBJETIVO 2 - Quando passar o mouse em cima do personagem, trocar a imagem e nome do personagem grande
-alterar a imagem do jogador 1
-alterar o nome do jogador 1

*/

const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
    personagem.addEventListener("click", () =>{

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'homelander') return;

        /*
            OBKETIVO 1 - Quando passar o mouse em cima do personagem temos que:
            - Colocar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele
            -retirar a classe selecionada do personagem que esta selecionado
        */
       const personagemSelecionado = document.querySelector(".selecionado");
       personagemSelecionado.classList.remove('selecionado')

       personagem.classList.add("selecionado");

       /*
        OBJETIVO 2 - Quando passar o mouse em cima do personagem da listagem, trocar a imagem e nome do personagem grande
        -alterar a imagem do jogador 1
        -alterar o nome do jogador 1
       */

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;
    
        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');

        nomeJogador1.innerHTML = nomeSelecionado;

       
        
    });
});

let myAudio = false;

function playAudio(url) {
    if (myAudio) {
        myAudio.pause();
    }
    
    myAudio = new Audio(url);
    myAudio.play();
    
};

