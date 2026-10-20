# Comando para o Claude: atualizar a página do Impacto Rosa

> Cole o texto abaixo (entre as linhas) numa conversa com o Claude, junto com este repositório,
> quando precisar trocar a data do encontro ou ajustar a página.

---

Você vai atualizar a página do **Impacto Rosa** (repositório `ebarroso12/Impactorosapagina`).
Mantenha o design atual: fundo vinho escuro, rosa e dourado, fontes Cormorant Garamond e
Montserrat, fotos, animações, contagem regressiva e todas as seções. Mude **só** os dados pedidos.

Edite o código-fonte (`src/index.html`, `assets/css/styles.css`, `assets/js/main.js`) e depois
rode `python3 scripts/montar_pagina.py` para gerar o `index.html` final. Nunca edite o
`index.html` da raiz à mão.

**DADOS OFICIAIS:**
- Evento: **Reunião de Mulheres do Impacto Rosa**, da Casa de Oração Franca (não usar "culto" para o evento)
- Idealizadora: **pastora Wânia Arantes** (Pastora | Mentora | Escritora;
  fundadora da Casa de Oração com o apóstolo Marcos Arantes). Frase do chamado: "Minha música é
  despertar filhas, formar mulheres inteiras e enviá-las para transformar gerações."
- Próxima reunião: **sábado, 07 de novembro de 2026, às 15h** (fim previsto 18h na agenda). **Entrada gratuita.**
- Contagem regressiva: `data-alvo="2026-11-07T15:00:00-03:00"`; durante a reunião (até `data-fim`)
  mostra "O Impacto Rosa está acontecendo agora!"
- Na reunião de 07/11: **pilates com a personal trainer Karen Dantes**, Reunião de Mulheres com Wânia Arantes e
  **momento de comunhão** (cada mulher leva um prato, doce ou salgado).
- Paleta do dia: **camiseta rosa** e **legging preta ou marrom**
- Local: **Casa de Oração**, Av. Alagoas, 1163, Jardim Paulista, Franca-SP, CEP 14401-402
- WhatsApp 24h: **+55 16 99127-1838**, link
  `https://wa.me/5516991271838?text=Ol%C3%A1%21%20Quero%20participar%20da%20Reuni%C3%A3o%20de%20Mulheres%20do%20Impacto%20Rosa%20de%2007%2F11.`
- Grupo do WhatsApp: `https://chat.whatsapp.com/GKTrelO5cqL79CvpSnSm1C?mode=gi_t`
  (links do grupo NÃO levam a classe `js-whatsapp`, senão o script troca o endereço)
- Wânia: Instagram `https://www.instagram.com/apwaniaarantes/`, site
  `https://www.mentorawaniaarantes.com.br/`, YouTube `https://www.youtube.com/@Ap.W%C3%A2niaArantesGerandoProfetas`
- Casa de Oração: Instagram `https://www.instagram.com/casadeoracao/`, YouTube
  `https://www.youtube.com/@CasadeOracaoTV`, site `https://casadeoracao.com.br/`
- Cultos da igreja: quartas às 20h, domingos às 10h e às 18h
- Cadastro (pop-up da tela inicial): nome completo, WhatsApp, e-mail e Instagram, com consentimento.
  Fica salvo no Supabase, projeto **selaah**, tabela **`impacto_rosa_leads`**. O site só consegue
  cadastrar (chave pública); ler, alterar e apagar só pelo painel:
  https://supabase.com/dashboard/project/hymbjpnrwhtngkivrqht/editor

**PARA TROCAR A DATA DO ENCONTRO**, atualize em todos os lugares de `src/index.html`:
faixa animada (ticker), selo e data do topo, `data-alvo` e `data-fim` da contagem, bloco final
"Chegou a sua vez", rodapé, `<title>`, `og:title`, a descrição, o `startDate`/`endDate` dos dados do
evento (JSON-LD), os links do Google Agenda e o arquivo `agenda/reuniao-de-mulheres-impacto-rosa.ics`. Gere de novo a imagem `icons/og-image.jpg` com a data nova.

**REGRAS:**
- Todos os botões de WhatsApp usam o link acima, com a mensagem preenchida.
- Links externos com `target="_blank" rel="noopener"`.
- Testar no celular (390px) e no computador (1366px): sem rolagem lateral e sem nada cobrindo o texto.

---

## Como publicar

### GitHub Pages (grátis)
1. Abra https://github.com/ebarroso12/Impactorosapagina/settings/pages
2. Em **Source**, escolha **Deploy from a branch**.
3. Em **Branch**, escolha **main** e a pasta **/ (root)**. Clique em **Save**.
4. Espere 1 a 2 minutos. O site fica em https://impactorosa.mentorawaniaarantes.com.br/
   (subdomínio: registro CNAME `impactorosa` → `ebarroso12.github.io` no DNS da Hostinger, e o
   arquivo `CNAME` na raiz do repositório)

### Hostinger (domínio próprio)
1. No hPanel, abra o site do domínio e escolha **Implante de GitHub**.
2. Repositório **Impactorosapagina**, branch **main**. O aviso "package.json não encontrado"
   é normal: escolha **Implante como estático**, sem comando de build, diretório raiz `public_html`.
3. Clique em **Implantar**. Em **Segurança → SSL**, ative o certificado grátis.
4. Rode `python3 scripts/montar_pagina.py --url https://SEU-DOMINIO/` e salve no GitHub, para a
   prévia do WhatsApp usar o domínio novo.

## Carrossel do Instagram
As artes ficam em `carrossel/` (PNG 1080×1350) e a legenda em `carrossel/LEGENDA.md`. Para mudar
um texto, edite `carrossel/carrossel.html` e rode `node scripts/gerar_carrossel.js`.

## Cadastros (leads)
- Ver e baixar: Supabase → projeto **selaah** → **Table Editor** → `impacto_rosa_leads` → **Export → CSV**.
- O pop-up abre 2,5 s depois da primeira visita e não volta para quem fechou ou se cadastrou
  (fica lembrado no navegador). O link "Cadastre-se…" do topo reabre.
- Se o envio falhar, o pop-up oferece mandar os dados pelo WhatsApp (16) 99127-1838.
- No link do Claude (artefato) o navegador bloqueia o envio ao Supabase: lá os cadastros vão pelo
  WhatsApp. No site publicado (GitHub Pages ou Hostinger) eles são salvos no banco.
