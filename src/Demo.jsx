import React from "react";
import { ArrowUpRight, ArrowRight, Layers, Plus, Check } from "./Icons.jsx";
import image_pilar from "../assets/pilar.webp";

const SectorImage = ({ name: e, alt: t }) => (
  <img src={image_pilar} alt={t} width={1400} height={1e3} />
);
const DemoData1 = [
  {
    name: `Concepção`,
    title: `Tudo começa no terreno das ideias.`,
    text: `Programa de necessidades, leitura do lugar e definição das intenções do projeto.`,
    items: [
      `Briefing e contexto`,
      `Estudos de implantação`,
      `Direção arquitetônica`,
    ],
  },
  {
    name: `Planejamento`,
    title: `Precisão antes do primeiro movimento.`,
    text: `Uma visão organizada de etapas, recursos e prioridades para estruturar a jornada.`,
    items: [
      `Escopo ilustrativo`,
      `Sequência de etapas`,
      `Organização do cronograma`,
    ],
  },
  {
    name: `Execução`,
    title: `O desenho encontra a matéria.`,
    text: `Uma interface para visualizar frentes de trabalho e acompanhar o que acontece em cada etapa.`,
    items: [
      `Frentes de trabalho`,
      `Registro de evolução`,
      `Pontos de acompanhamento`,
    ],
  },
  {
    name: `Entrega`,
    title: `Um novo espaço. Um novo começo.`,
    text: `Organização dos detalhes finais em uma experiência de apresentação e entrega do projeto.`,
    items: [
      `Revisão de detalhes`,
      `Documentação do conceito`,
      `Apresentação final`,
    ],
  },
];
function PilarDemo() {
  let [activeStageIndex, setActiveStageIndex] = React.useState(0);
  return (
    <div className={`pi-root`} id={`demo-top`}>
      <nav className={`pi-nav`} aria-label={`Navegação Pilar`}>
        <a className={`pi-logo`} href={`#demo-top`}>
          PILAR<span>▰</span>
        </a>
        <span>ARQUITETURA + CONSTRUÇÃO</span>
        <a href={`#pi-project`}>
          {`VER PROJETO `}
          <ArrowUpRight size={16} />
        </a>
      </nav>
      <section className={`pi-hero`}>
        <SectorImage
          name={`pilar`}
          alt={`Projeto arquitetônico contemporâneo em concreto, conceito Pilar`}
        />
        <div className={`pi-hero-content`}>
          <p>MATÉRIA. ESPAÇO. PERMANÊNCIA.</p>
          <h1>
            Ideias que
            <br />
            ganham
            <br />
            <span>estrutura.</span>
          </h1>
          <a href={`#pi-phases`}>
            {`DA VISÃO À ENTREGA `}
            <ArrowRight size={20} />
          </a>
        </div>
        <div className={`pi-image-note`}>
          ESTUDO ARQUITETÔNICO
          <br />
          IMAGEM CONCEITUAL / 01
        </div>
      </section>
      <section className={`pi-project`} id={`pi-project`}>
        <div>
          <p className={`pi-kicker`}>01 — PROJETO EM FOCO</p>
          <h2>
            O espaço como
            <br />
            ponto de partida.
          </h2>
        </div>
        <div>
          <p>
            Volumes claros, matéria aparente e luz em movimento. Um estudo
            visual sobre como a arquitetura pode dar forma a um novo cotidiano.
          </p>
          <dl>
            <div>
              <dt>PROJETO</dt>
              <dd>Pátio / conceito</dd>
            </div>
            <div>
              <dt>LINGUAGEM</dt>
              <dd>Concreto + luz natural</dd>
            </div>
            <div>
              <dt>TIPOLOGIA</dt>
              <dd>Uso misto ilustrativo</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className={`pi-phases`} id={`pi-phases`}>
        <div className={`pi-phases-heading`}>
          <p className={`pi-kicker`}>02 — MÉTODO CONSTRUTIVO</p>
          <h2>
            Uma visão inteira.
            <br />
            Etapa por etapa.
          </h2>
          <Layers size={42} />
        </div>
        <div
          className={`pi-phase-tabs`}
          role={`group`}
          aria-label={`Explorar etapas de projeto`}
        >
          {DemoData1.map((n, r) => (
            <button
              key={n.name}
              aria-pressed={activeStageIndex === r}
              onClick={() => setActiveStageIndex(r)}
            >
              <span>0{r + 1}</span>
              {n.name}
              <Plus size={18} />
            </button>
          ))}
        </div>
        <div className={`pi-phase-detail`} aria-live={`polite`}>
          <span className={`pi-big-number`}>0{activeStageIndex + 1}</span>
          <div>
            <h3>{DemoData1[activeStageIndex].title}</h3>
            <p>{DemoData1[activeStageIndex].text}</p>
          </div>
          <ul>
            {DemoData1[activeStageIndex].items.map((e) => (
              <li key={e}>
                <Check size={15} />
                {e}
              </li>
            ))}
          </ul>
        </div>
        <p className={`pi-note`}>
          Projeto e etapas fictícios. Não representam obra executada, cronograma
          contratado ou serviço técnico.
        </p>
      </section>
    </div>
  );
}

export default PilarDemo;
