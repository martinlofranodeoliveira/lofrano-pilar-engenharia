export default [
  {
    name: "pilar-01 — apresenta a etapa de Planejamento",
    run: async ({ ui, user, assert, within }) => {
      const phases = within(
        ui.getByRole("group", { name: "Explorar etapas de projeto" }),
      );
      const button = phases.getByRole("button", { name: /Planejamento/u });
      await user.click(button);
      assert.equal(button.getAttribute("aria-pressed"), "true");
      const panel = ui.getByRole("heading", {
        name: "Precisão antes do primeiro movimento.",
        exact: true,
      }).parentElement.parentElement;
      assert.equal(panel.getAttribute("aria-live"), "polite");
      assert.ok(
        within(panel).getByText("02", { selector: "span", exact: true }),
      );
      for (const item of [
        "Escopo ilustrativo",
        "Sequência de etapas",
        "Organização do cronograma",
      ]) {
        assert.ok(within(panel).getByText(item, { exact: true }));
      }
    },
  },
  {
    name: "pilar-02 — apresenta a etapa de Execução",
    run: async ({ ui, user, assert, within }) => {
      await user.click(ui.getByRole("button", { name: /Execução/u }));
      const panel = ui.getByRole("heading", {
        name: "O desenho encontra a matéria.",
        exact: true,
      }).parentElement.parentElement;
      assert.ok(
        within(panel).getByText("03", { selector: "span", exact: true }),
      );
      for (const item of [
        "Frentes de trabalho",
        "Registro de evolução",
        "Pontos de acompanhamento",
      ]) {
        assert.ok(within(panel).getByText(item, { exact: true }));
      }
    },
  },
  {
    name: "pilar-03 — apresenta Entrega e retorna à Concepção",
    run: async ({ ui, user, assert, within }) => {
      const phases = within(
        ui.getByRole("group", { name: "Explorar etapas de projeto" }),
      );
      await user.click(phases.getByRole("button", { name: /Entrega/u }));
      const delivery = ui.getByRole("heading", {
        name: "Um novo espaço. Um novo começo.",
        exact: true,
      }).parentElement.parentElement;
      assert.ok(
        within(delivery).getByText("04", { selector: "span", exact: true }),
      );
      for (const item of [
        "Revisão de detalhes",
        "Documentação do conceito",
        "Apresentação final",
      ]) {
        assert.ok(within(delivery).getByText(item, { exact: true }));
      }
      const conception = phases.getByRole("button", { name: /Concepção/u });
      await user.click(conception);
      const panel = ui.getByRole("heading", {
        name: "Tudo começa no terreno das ideias.",
        exact: true,
      }).parentElement.parentElement;
      assert.ok(
        within(panel).getByText("01", { selector: "span", exact: true }),
      );
      for (const item of [
        "Briefing e contexto",
        "Estudos de implantação",
        "Direção arquitetônica",
      ]) {
        assert.ok(within(panel).getByText(item, { exact: true }));
      }
      for (const button of phases.getAllByRole("button")) {
        assert.equal(
          button.getAttribute("aria-pressed"),
          button === conception ? "true" : "false",
        );
      }
    },
  },
];
