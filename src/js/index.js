//colocando os botões numa variável constante (uma lista)

const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () =>{
        const botalSelecionado = document.querySelector(".botao.selecionado");
        botalSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");

      personagens[indice].classList.add("selecionado");
    })
})