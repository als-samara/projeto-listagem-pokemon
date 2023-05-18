const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const main = document.querySelector("main");
const ImagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
 
  const modoEscuroBodyEstaAtivo = body.classList.contains("modo-escuro");
  const modoEscuroMainEstaAtivo = main.classList.contains("modo-escuro");

body.classList.toggle("modo-escuro")
main.classList.toggle("modo-escuro")

  if (modoEscuroBodyEstaAtivo && modoEscuroMainEstaAtivo) {
    ImagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    ImagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }

});
