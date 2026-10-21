---
name: pagina-evento
description: Monta landing pages de eventos (igrejas, ministérios, movimentos, conferências, encontros de mulheres/homens, cultos, congressos) no estilo cinematográfico escuro do Impacto Rosa e do Legendários Franca — página única com contagem regressiva, WhatsApp 24h com mensagem pronta, grupo do WhatsApp, galeria que abre, seção de quem ministra, local com mapa, agenda, pop-up de cadastro (leads) salvo no Supabase, emblema na aba, prévia do link no WhatsApp, carrossel do Instagram com QR codes e publicação no GitHub Pages com subdomínio (DNS na Hostinger/Vercel). Use sempre que o usuário pedir uma página, site, landing page, página de inscrição ou divulgação de evento, encontro, reunião, culto, conferência ou campanha — mesmo que diga só "faz uma página igual à do Impacto Rosa/Legendários", "sobe a página do evento", "quero captar leads do evento", "faz o carrossel do evento" ou mande flyers e áudios com os dados do evento.
---

# Página de evento (estilo Impacto Rosa / Legendários)

Esta skill transforma flyers, fotos, áudios e links de um evento numa página única pronta para
divulgar, com captação de cadastros e materiais do Instagram — e coloca no ar num endereço próprio.
Ela nasceu de um projeto real (Impacto Rosa, Casa de Oração Franca) e guarda o que deu certo e o
que o usuário corrigiu. O exemplo completo e funcionando está em `assets/exemplo-impacto-rosa/`.

**Fale sempre em português do Brasil, em linguagem de leigo.** O usuário típico é líder de
igreja/ministério: quer ver a página aberta no celular, não código.

Ferramentas usadas pelos scripts: Node com Playwright/Chromium (`CHROMIUM_PATH` se o Chromium
estiver fora do padrão) e Python 3 com `pillow numpy potracer "qrcode[pil]" opencv-python-headless`
(e `faster-whisper` + `ffmpeg` para áudios). Conectores opcionais: Supabase (cadastros) e Vercel
(quando o site principal do domínio roda lá).

Num projeto novo, copie `assets/projeto-base/.claude/` para a raiz do repositório: é a instalação
automática dessas ferramentas a cada sessão do Claude na nuvem (só instala o que faltar) e ainda
grava `CHROMIUM_PATH` e `NODE_PATH` para os scripts acharem o navegador e o Playwright.

## Antes de começar: leia

- `references/licoes-e-preferencias.md` — **obrigatório**. Preferências do usuário e erros que já
  aconteceram (logo esticada, halo na logo, nome do evento trocado, overlay bloqueando cliques…).
- Os outros arquivos de `references/` só quando chegar na etapa correspondente.

## Fluxo de trabalho

### 1. Reunir os dados do evento
Extraia tudo do que o usuário mandar (flyers, prints, áudios, links). Para áudio do WhatsApp,
transcreva (ver lições). Monte uma ficha com:
- **Nome exato do evento** (como o usuário chama — vai em todo lugar), organização/igreja.
- Data, dia da semana, horário de início (e de fim, para a agenda — se não souber, pergunte ou
  use +3 h e avise), entrada gratuita/paga, link de ingresso se houver.
- Local completo com CEP; links Google Maps e Waze.
- Quem ministra/idealizou (nome, título exato que o usuário quer — ex. "Pastora | Mentora |
  Escritora"), frases dela, Instagram/site/YouTube.
- Atrações (ex.: pilates com personal trainer), dinâmica (ex.: "cada mulher leva um prato"),
  paleta de roupa, público.
- WhatsApp de atendimento (+ mensagem pronta), link do grupo, Instagram.
- Fotos utilizáveis, logo do evento e do local.
Pesquise fontes oficiais para completar (site da igreja, site do ministrante; Instagram costuma
bloquear acesso automático — peça as legendas ao usuário). Não invente números nem cargos.

Se houver um site modelo (ex.: legendariosfranca.com.br ou a sessão de outro projeto), baixe e
estude a estrutura antes de desenhar.

### 2. Montar o projeto
Estrutura e scripts: veja `references/publicacao-e-dominio.md` §1. Copie o exemplo
(`assets/exemplo-impacto-rosa/src|css|js`) como ponto de partida e adapte:
- `src/index.html` usa `../assets/img/…`, `../icons/…` e `SITE_URL` (trocado no montar).
- Cores em tokens no topo do CSS (`--rose`, `--amber`…): troque pela identidade do evento,
  tirada dos flyers/logo. Fundo escuro cinematográfico + cor da marca + âmbar de acento.

Seções da página (ordem que funcionou):
1. Faixa animada no topo (data, local, lema, "Atendimento 24h · número", grupo) — as duas
   metades do texto idênticas.
2. Cabeçalho fixo: logo + nome + Instagram.
3. Topo: foto do evento escurecida, selo ("Entrada gratuita · Confirme pelo WhatsApp"), nome
   gigante, lema, data grande, endereço, **contagem regressiva**, botões "Quero participar",
   "Fale com a equipe · 24h", "Entrar no grupo", "Adicionar à agenda", link "Cadastre-se…".
4. Faixa de números (dados reais da história).
5. "No [evento]": atração especial com foto + cartões (programação, comunhão, paleta do dia).
6. O movimento: história + 3 pilares.
7. Galeria em mosaico: fotos se revelam ao rolar e **abrem em tela cheia** (setas, teclado,
   deslizar).
8. Arte/frase de destaque do ministrante.
9. Quem ministra / idealizadora: foto ou panfleto, frase do chamado, título, bio, botões.
10. Lema/símbolo (ex.: "Visão de Águia") com a logo.
11. Local: logo do local (como é, sem brilho), endereço, Maps/Waze, horários, redes.
12. Chamada final "Chegou a sua vez" + agenda + grupo.
13. Contato: cartões WhatsApp 24h, Instagram, Como chegar, Grupo.
14. Rodapé + botão flutuante do WhatsApp com selo "24h" + pop-up de cadastro + visualizador.

Logos: se a logo vier numa foto com fundo claro e cor chapada, vetorize com
`scripts/vetorizar_logo.py` (SVG nítido, ~8 KB). Logos 3D/brilhantes: use a imagem recortada.

### 3. Cadastro (leads)
Siga `references/leads-supabase.md` (perguntar onde guardar, criar tabela com
`assets/exemplo-impacto-rosa/sql/leads.sql`, chave pública, testes, plano B pelo WhatsApp).

### 4. Ícones, prévia, agenda
`scripts/gerar_icones.js` (emblema da aba em cada tamanho + og-image 1200×630) e o comando
Python que ele imprime para o `favicon.ico`. Agenda: Google + `.ics` (ver
`references/carrossel-instagram.md` § Agenda).

### 5. Montar, testar e mostrar
```
python3 scripts/montar_pagina.py --url https://ENDERECO/          # gera index.html
python3 scripts/montar_pagina.py --url https://ENDERECO/ --nome "Evento" --artefato /tmp/x.html
node scripts/testar_pagina.js index.html "LINK_WA_OFICIAL" previews/
```
Corrija tudo que o teste apontar e **olhe os prints** (320/390/1280 px). Publique a versão
artefato com a ferramenta Artifact para o usuário abrir no celular já na primeira entrega
(no link do Claude o cadastro cai no plano B do WhatsApp — avise). Quando o usuário mandar print
de algo errado, conserte, teste de novo e republique no mesmo link.

### 6. Carrossel do Instagram
`references/carrossel-instagram.md`. Gere QR com `scripts/qr.py` (confere a leitura) e as
artes com `scripts/gerar_carrossel.js`. Entregue artes + .zip + legenda.

### 7. Publicar
`references/publicacao-e-dominio.md`: GitHub Pages (usuário ativa), `main` só com autorização,
subdomínio via CNAME no DNS de quem manda no domínio (Hostinger mesmo quando o site principal
está na Vercel), arquivo `CNAME` só depois do DNS responder, `--url` com o endereço novo,
verificação completa e "Enforce HTTPS".

### 8. Documentar no repositório
`README.md` (o que é, arquivos, o que a página tem, como atualizar) e
`docs/COMANDO-PARA-O-CLAUDE.md` (dados oficiais, regras, como trocar a data, como publicar,
cadastros, carrossel) — é o que permite outra sessão continuar o trabalho sem perguntar tudo de
novo. Atualize-os a cada mudança de dado.

## Ao terminar cada rodada
Resuma em português, em tópicos curtos: o que mudou, o que foi testado (com resultado), o link
para abrir, e o que falta do lado do usuário (com o passo a passo exato e links diretos).
