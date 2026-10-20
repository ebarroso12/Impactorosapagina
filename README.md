# Impacto Rosa · Casa de Oração Franca

Página do **Impacto Rosa**, o encontro de mulheres criado pela apóstola **Wânia Arantes** na
Casa de Oração Franca.

**Próximo encontro:** sábado, **7 de novembro de 2026, às 15h**, na Casa de Oração,
Av. Alagoas, 1163, Jardim Paulista, Franca-SP, 14401-402.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | A página completa, com as fotos embutidas. É o arquivo que o GitHub Pages e a Hostinger publicam, e que pode ser colado num bloco de **HTML personalizado** |
| `favicon.ico` e `icons/` | Ícone da aba do navegador, atalhos do iPhone e do Android, e a imagem da prévia do link no WhatsApp (`og-image.jpg`) |
| `src/index.html`, `assets/` | Código-fonte da página: texto, estilo, scripts e fotos separados, para editar |
| `scripts/montar_pagina.py` | Junta o código-fonte e gera o `index.html` final |
| `docs/COMANDO-PARA-O-CLAUDE.md` | Dados oficiais, o comando para ajustar a página com o Claude e o passo a passo para publicar |
| `previews/` | Imagens da página inteira no computador e no celular |

## O que a página tem

- Faixa animada no topo com data, local e atendimento 24h
- Foto grande, data e **contagem regressiva** até 07/11 às 15h
- Números e história do Impacto Rosa
- Galeria em mosaico: as fotos se revelam ao rolar e **abrem ampliadas** ao tocar
- Wânia Arantes, Visão de Águia e o local (Casa de Oração), com Google Maps e Waze
- Contato: **WhatsApp 24h (16) 99127-1838**, Instagram e "Como chegar"
- Botão flutuante do WhatsApp com selo "24h"

## Como atualizar

1. Edite `src/index.html`, `assets/css/styles.css` ou `assets/js/main.js`.
2. Rode `python3 scripts/montar_pagina.py` (com domínio próprio: `--url https://seudominio.com.br/`).
3. Salve no GitHub. O site publicado atualiza sozinho.
