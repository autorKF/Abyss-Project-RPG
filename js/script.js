const botao = document.querySelector('.nav__button');
botao.addEventListener('click', () => {
  const aberto = botao.getAttribute('aria-expanded') === 'true';
  botao.setAttribute('aria-expanded', String(!aberto));
});