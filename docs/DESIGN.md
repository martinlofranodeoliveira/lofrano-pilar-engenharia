---
name: "Pilar"
description: "Sistema visual implementado — Construção & engenharia"
colors:
  primary: "#f77536"
  accent: "#ff8d52"
  background: "#eeeee8"
  text: "#222723"
  surface: "#d8dad3"
  on-primary: "#17201c"
  frame-background: "#09090b"
  frame-text: "#f5f5f7"
  focus: "#ff2d60"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(60px, 7vw, 100px)"
    fontWeight: 600
    lineHeight: 0.97
    letterSpacing: "-5px"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    lineHeight: 1.6
---

# Design System: Pilar

## Overview

Engenharia conceitual de linguagem estrutural: superfícies minerais, laranja, fotografia de obra e números de grande escala. Linhas e grades organizam as fases.

Registro descritivo do código atual, com autoridade de preservação da [referência pública](https://lofranotecnologia.com.br/modelos/pilar). Fontes normativas: [estilos do modelo](../src/demo.css), [base compartilhada](../src/base.css), [componentes da demonstração](../src/Demo.jsx) e [moldura de distribuição](../src/App.jsx). Layout, contraste e overflow visual permanecem não verificados em navegador; valores abaixo são declarações de fonte, não medições de renderização.

## Colors

Laranja marca a ação de abertura, fase selecionada e detalhes; tons minerais sustentam apresentação e processo. O hero usa texto branco sobre gradiente escuro. O frontmatter registra cores principais por papel; variações locais permanecem no CSS. A moldura LOFRANO conserva fundo escuro, texto claro e foco rosa. Paleta fixa, sem alternância de tema.

## Typography

Títulos herdam Manrope; corpo e dados usam DM Sans. O título principal passa a (65px) até (760px); o número de fase vai de (110px) para (65px). Manrope e DM Sans são fontes locais de [`assets/`](../assets/); Georgia, Arial e Helvetica dependem das alternativas do sistema. O token display descreve o título principal em desktop. A base define h2 móvel (34px), com espaçamento de letras (-1.3px), até (760px); regras mais específicas do modelo prevalecem.

## Layout

Hero com altura mínima de (630px), projeto em duas colunas, quatro abas de fase e detalhe em três colunas. Até (1000px), as abas compactam. Até (760px), projeto vira uma coluna, abas ficam em grade (2 × 2), detalhe em (60px 1fr) e hero com mínimo de (540px).

A moldura organiza autoria e links acima da demonstração, guia abaixo e rodapé final. Cabeçalho e rodapé permitem quebra; até (600px), o guia reduz o padding para (40px 20px).

## Elevation & Depth

Gradiente escuro sobre a fotografia. As demais áreas são planas, separadas por linhas e superfícies, sem sombra.

## Shapes

Predominam cantos retos, divisórias e campos de informação alinhados. Abas são células contíguas de uma grade. A imagem conceitual está em [`assets/pilar.webp`](../assets/pilar.webp); preservar seu recorte definido pelo CSS.

## Components

- Fases: quatro botões com `aria-pressed`; o ativo recebe laranja e troca número, título, descrição e lista.
- Detalhe: atualização anunciada com `aria-live="polite"`, sem fluxo de envio.
- Dados do projeto: pares de rótulo e valor em linhas divisórias.
- Estados compartilhados: Controles da demonstração usam o foco global rosa (3px), afastado (5px). A moldura inverte o botão de reinício para fundo branco no hover. As interações do modelo usam os estados descritos acima; não há variante de hover adicional declarada para elas. Reiniciar remonta a demonstração e restaura o estado local.
- Movimento: a base usa rolagem suave; a preferência por movimento reduzido troca a rolagem CSS para automática e reduz durações de animação/transição para (0.01ms).

## Do's and Don'ts

- **Do:** Preservar grade das fases, números grandes e acento laranja.
- **Do:** manter avisos de conceito fictício, foco visível e estados de seleção coerentes com os controles.
- **Don't:** Substituir o sistema estrutural por cartões arredondados ou afirmar execução de uma obra real.
- **Don't:** interpretar a moldura compartilhada como autorização para substituir a identidade visual do modelo.
