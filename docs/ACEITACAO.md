# Critérios do modelo Pilar

Derivados da demonstração pública antes da implementação independente. Os testes verificam DOM simulado; isso não equivale a QA visual em navegador.

- **pilar-01** — No grupo “Explorar etapas de projeto”, clicar no button que contém Planejamento.
  Resultado: O button recebe aria-pressed=true. O painel mostra número 02, título Precisão antes do primeiro movimento. e lista Escopo ilustrativo, Sequência de etapas, Organização do cronograma.
- **pilar-02** — Clicar no button que contém Execução.
  Resultado: O painel passa ao número 03, título O desenho encontra a matéria. e lista Frentes de trabalho, Registro de evolução, Pontos de acompanhamento.
- **pilar-03** — Clicar no button que contém Entrega; depois Concepção.
  Resultado: Entrega mostra número 04, título Um novo espaço. Um novo começo. e lista Revisão de detalhes, Documentação do conceito, Apresentação final. Concepção restaura número 01, título Tudo começa no terreno das ideias. e sua lista; só a etapa ativa fica aria-pressed=true.

Além dos fluxos, a suíte confere conteúdo inicial publicado, controles, imagens, âncoras, ausência de configuração privada e reinício do estado.
