/* 
    o que precisamos fazer? - quando clicamos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou tema escuro.

    -objetivo 1 - quando clicar no botão de troca de tema, adicionar a class modo-escuro no body pra que os estilos de modo escuro sejam aplicados a mudar a imagem pra lua
        -passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        -passo 2 - dar um jeito de pegar no JS o elemento HTML coresponde ao body
        -passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        -passo 4 - adicionar a class modo-escuro no body
        -passo 5 -trocar a imagem do botão de alterar tema pra lua
    
        -objetivo 2 - quando clicar no botão de troca de tema, caso o body ja tenha a classe modo-escuro, remover a classse pra mudar pro modo claro e mudar a imagem pro sol

            - passo 6 - remover a classe de modo-escuro do body
            - passo 7 - trocar a imagem do botão de alterar tema pra sol

*/
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")

    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
    }
});






