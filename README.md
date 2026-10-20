# Impacto Rosa · Casa de Oração Franca

Página da **Reunião de Mulheres do Impacto Rosa**, o movimento de mulheres idealizado pela pastora
**Wânia Arantes** na Casa de Oração Franca.

**Próxima reunião:** sábado, **7 de novembro de 2026, às 15h**, na Casa de Oração,
Av. Alagoas, 1163, Jardim Paulista, Franca-SP, 14401-402. **Entrada gratuita.**
Pilates com Karen Dantes, momento de comunhão (cada mulher leva um prato) e paleta do dia:
camiseta rosa e legging preta ou marrom.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | A página completa, com as fotos embutidas. É o arquivo que o GitHub Pages e a Hostinger publicam, e que pode ser colado num bloco de **HTML personalizado** |
| `favicon.ico` e `icons/` | Ícone da aba do navegador, atalhos do iPhone e do Android, e a imagem da prévia do link no WhatsApp (`og-image.jpg`) |
| `src/index.html`, `assets/` | Código-fonte da página: texto, estilo, scripts e fotos separados, para editar |
| `scripts/montar_pagina.py` | Junta o código-fonte e gera o `index.html` final |
| `docs/COMANDO-PARA-O-CLAUDE.md` | Dados oficiais, o comando para ajustar a página com o Claude e o passo a passo para publicar |
| `previews/` | Imagens da página inteira no computador e no celular |
| `carrossel/` | As 6 artes do carrossel do Instagram, a legenda (`LEGENDA.md`) e o código das artes |
| `agenda/reuniao-de-mulheres-impacto-rosa.ics` | Arquivo para salvar a reunião na agenda do iPhone e do Outlook |

## O que a página tem

- Faixa animada no topo com data, local e atendimento 24h
- Foto grande, data e **contagem regressiva** até 07/11 às 15h
- Números e história do Impacto Rosa
- Galeria em mosaico: as fotos se revelam ao rolar e **abrem ampliadas** ao tocar
- Wânia Arantes, Visão de Águia e o local (Casa de Oração), com Google Maps e Waze
- Seção da reunião: pilates com Karen Dantes, Reunião de Mulheres, comunhão e paleta do dia
- Botões "Adicionar à agenda" (Google e iPhone/Outlook)
- Contato: **WhatsApp 24h (16) 99127-1838**, **grupo do WhatsApp**, Instagram e "Como chegar"
- Botão flutuante do WhatsApp com selo "24h"
- **Pop-up de cadastro** (nome, WhatsApp, e-mail e Instagram) salvo no Supabase, tabela `impacto_rosa_leads` do projeto selaah

## Como atualizar

1. Edite `src/index.html`, `assets/css/styles.css` ou `assets/js/main.js`.
2. Rode `python3 scripts/montar_pagina.py` (com domínio próprio: `--url https://seudominio.com.br/`).
3. Salve no GitHub. O site publicado atualiza sozinho.
