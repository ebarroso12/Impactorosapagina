/*
 * Impacto Rosa — integração com o WhatsApp oficial.
 *
 * Todos os links de WhatsApp já vêm com o href completo no HTML, então a
 * página funciona mesmo sem JavaScript. Este script:
 *   1. garante que todo elemento .js-whatsapp aponte para o mesmo link
 *      (fonte única: basta trocar WHATSAPP_LINK para atualizar o site);
 *   2. controla o botão flutuante para ele não encobrir conteúdo.
 */
(function () {
  'use strict';

  // Número: +55 16 99127-1838 | Mensagem: "Olá! Quero saber mais sobre o Impacto Rosa."
  var WHATSAPP_LINK = 'https://wa.me/5516991271838?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20o%20Impacto%20Rosa.';

  document.querySelectorAll('.js-whatsapp').forEach(function (el) {
    el.setAttribute('href', WHATSAPP_LINK);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  // Depois que o encontro passa (data-ate), a data some para a página não
  // anunciar um encontro antigo enquanto a próxima data não é cadastrada.
  document.querySelectorAll('.js-data-encontro').forEach(function (el) {
    if (new Date() > new Date(el.getAttribute('data-ate'))) {
      el.textContent = 'Próximo encontro: confirme a data com a equipe';
    }
  });
  var cartao = document.querySelector('.event-card');
  var dataEncontro = document.querySelector('.js-data-encontro');
  if (cartao && dataEncontro && new Date() > new Date(dataEncontro.getAttribute('data-ate'))) {
    cartao.classList.add('sem-data');
  }

  /*
   * Botão flutuante. Ele fica escondido quando:
   *   - os botões do topo (hero) ou o rodapé estão na tela, pois ali o
   *     contato já está visível e o flutuante só atrapalharia;
   *   - no celular, enquanto a pessoa rola para baixo (lendo). Ele volta
   *     assim que ela rola para cima, o gesto de quem procura algo.
   * .is-hidden usa visibility:hidden, que também tira o botão do foco do
   * teclado e dos leitores de tela enquanto estiver escondido.
   */
  var floatBtn = document.querySelector('.whatsapp-float');
  if (!floatBtn || !('IntersectionObserver' in window)) return;

  var heroCtas = document.querySelector('.hero .cta-group');
  var footer = document.querySelector('.site-footer');
  var mobile = window.matchMedia('(max-width: 640px)');
  var contatoVisivel = { hero: true, footer: false };
  var rolandoParaBaixo = false;
  var ultimoY = window.scrollY;

  function atualizar() {
    var esconder = contatoVisivel.hero || contatoVisivel.footer ||
      (mobile.matches && rolandoParaBaixo);
    floatBtn.classList.toggle('is-hidden', esconder);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      contatoVisivel[entry.target === footer ? 'footer' : 'hero'] = entry.isIntersecting;
    });
    atualizar();
  });
  if (heroCtas) observer.observe(heroCtas); else contatoVisivel.hero = false;
  if (footer) observer.observe(footer);

  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    if (Math.abs(y - ultimoY) < 8) return; // ignora tremidas pequenas do toque
    rolandoParaBaixo = y > ultimoY;
    ultimoY = y;
    atualizar();
  }, { passive: true });
})();
