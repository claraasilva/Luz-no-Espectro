let index = 0;
const imagens = document.querySelectorAll(".carousel img");

function trocarImagem() {
  imagens[index].classList.remove("ativo");
  index = (index + 1) % imagens.length;
  imagens[index].classList.add("ativo");
}

setInterval(trocarImagem, 4000); // troca a cada 4 segundos
