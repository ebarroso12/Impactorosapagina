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
- Evento: **Impacto Rosa**, encontro de mulheres da Casa de Oração Franca, com **Wânia Arantes**
- Próximo encontro: **sábado, 07 de novembro de 2026, às 15h**
- Contagem regressiva: `data-alvo="2026-11-07T15:00:00-03:00"`; durante o encontro (até `data-fim`)
  mostra "O Impacto Rosa está acontecendo agora!"
- No encontro de 07/11: **Pilares** (ministração), **confraternização** e **quitutes partilhados**
  (cada mulher traz um quitute, doce ou salgado, para compartilhar). Seção "No próximo encontro".
- Local: **Casa de Oração**, Av. Alagoas, 1163, Jardim Paulista, Franca-SP, CEP 14401-402
- WhatsApp 24h: **+55 16 99127-1838**, link
  `https://wa.me/5516991271838?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20o%20Impacto%20Rosa.`
- Instagram da Wânia: `https://www.instagram.com/apwaniaarantes/`
- Casa de Oração: Instagram `https://www.instagram.com/casadeoracao/`, YouTube
  `https://www.youtube.com/@CasadeOracaoTV`, site `https://casadeoracao.com.br/`
- Cultos da igreja: quartas às 20h, domingos às 10h e às 18h

**PARA TROCAR A DATA DO ENCONTRO**, atualize em todos os lugares de `src/index.html`:
faixa animada (ticker), selo e data do topo, `data-alvo` e `data-fim` da contagem, bloco final
"Chegou a sua vez", rodapé, `<title>`, `og:title`, a descrição e o `startDate` dos dados do
evento (JSON-LD). Gere de novo a imagem `icons/og-image.jpg` com a data nova.

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
4. Espere 1 a 2 minutos. O site fica em https://ebarroso12.github.io/Impactorosapagina/

### Hostinger (domínio próprio)
1. No hPanel, abra o site do domínio e escolha **Implante de GitHub**.
2. Repositório **Impactorosapagina**, branch **main**. O aviso "package.json não encontrado"
   é normal: escolha **Implante como estático**, sem comando de build, diretório raiz `public_html`.
3. Clique em **Implantar**. Em **Segurança → SSL**, ative o certificado grátis.
4. Rode `python3 scripts/montar_pagina.py --url https://SEU-DOMINIO/` e salve no GitHub, para a
   prévia do WhatsApp usar o domínio novo.
