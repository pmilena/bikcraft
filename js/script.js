//Ativar item menu

const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
  const url = location.href;
  const href = link.href;

if(url.includes(href)){
  link.classList.add('ativo');
}
}

links.forEach(ativarLink);

//Checked habilitado pós redirecionamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
  const elemento = document.getElementById(parametro);
  elemento.checked = true;
}

parametros.forEach(ativarProduto);

//FAQ

const perguntas = document.querySelectorAll('.questions-bg button');

function showAnswer(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');
  pergunta.setAttribute('aria-expanded', ativa)
}

function questionEvent(pergunta){
  pergunta.addEventListener('click', showAnswer);
}

perguntas.forEach(questionEvent);

//Galeria - trocar imagem

const galeria = document.querySelectorAll('.bike-interna_img img');
const bikeInterna = document.querySelector('.bike-interna_img');

function trocarImagem(event){
const img = event.currentTarget;
bikeInterna.prepend(img);
}


function eventosGaleria(img){
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

//animação

new SimpleAnime();