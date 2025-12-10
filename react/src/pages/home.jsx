import React from "react";
import "../styles/home.css";
import logoImg from "../assets/Logo.png";

export default function HomePage() {
  return (
    <div>
      <div className="container">
        <main className="content">
          <h1 className="section-title">
            Assistente AI - Professor João Miguel
          </h1>

          <section className="intro-section">
            <h2>
              Assistente Educacional com IA – Aprimorando o Ensino de História
            </h2>
            <p>
              Este projeto apresenta uma Inteligência Artificial generativa
              desenvolvida para apoiar professores de História na elaboração de
              aulas, atividades, metodologias e materiais pedagógicos. O
              objetivo é oferecer um assistente que promove consistência,
              criatividade e padronização no planejamento escolar, além de
              facilitar a produção de conteúdos personalizados para cada turma.
              A ferramenta foi projetada para agilizar processos, inspirar novas
              abordagens didáticas e fortalecer a identidade educacional
              aplicada em sala de aula.
              <br />
              <br />
               É importante esclarecer que esta versão
              da aplicação utiliza uma chave de API Gemini gratuita ou
              compartilhada, com limite diário e mensal de tokens. Quando esse
              limite é atingido, a inteligência artificial para de funcionar
              temporariamente até o próximo ciclo de renovação. Portanto, o
              projeto não foi concebido para uso permanente e ininterrupto ao
              longo de todo o ano letivo. Se você, professor, deseja ter o
              assistente disponível de forma contínua, sem interrupções, durante
              todo o período escolar (ou para sempre), será necessário adquirir
              uma chave API Gemini Pro paga. Para conhecer os valores atuais, os
              planos com maior ou ilimitado volume de tokens e as instruções de
              integração definitiva, entre em contato com o grupo responsável
              pelo desenvolvimento — eles fornecerão a orientação completa e os
              dados necessários para tornar a ferramenta 100% sua e funcional o
              ano inteiro.
            </p>
          </section>

          <section className="features-section">
            <div className="features-grid">
              <div className="feature-card">
                <h4>Modelo de Orientações (PDF)</h4>
                <p>
                  Documento estruturado que orienta a organização das aulas e
                  atividades, oferecendo um padrão visual e pedagógico para
                  todas as turmas. O modelo garante maior consistência no
                  planejamento, reforça a identidade docente e facilita a
                  aplicação de práticas alinhadas ao projeto educacional.
                </p>
              </div>

              <div className="feature-card">
                <h4>Metodologia Ativa</h4>
                <p>
                  Conjunto de estratégias inspiradas em metodologias ativas que
                  promovem maior participação dos alunos. As propostas ajudam a
                  transformar a sala de aula em um ambiente mais dinâmico,
                  colaborativo e conectado ao pensamento crítico, permitindo que
                  cada estudante desempenhe um papel protagonista no processo de
                  aprendizado.
                </p>
              </div>

              <div className="feature-card">
                <h4>Ideias de Slides</h4>
                <p>
                  Sugestões de apresentações visuais organizadas por tema, com
                  elementos gráficos, mapas comparativos e seções equilibradas
                  que facilitam a compreensão histórica. Os modelos ajudam a
                  construir aulas mais claras, modernas e alinhadas à linguagem
                  visual dos estudantes.
                </p>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <h3>Pronto para começar?</h3>
            <p>
              Acesse os modelos, revise as orientações e prepare suas aulas com
              consistência e identidade.
            </p>
            <button
              className="cta-button"
              onClick={() => (window.location.href = "/atividade-historia")}
            >
              Acessar Recursos
            </button>
          </section>

          <br />
          <br />

          <div className="feature-card">
            <h4>Sobre o Grupo</h4>
            <p>Grupo 1 - Alfa One Development - Saiba mais abaixo.</p>
            <button
              className="cta-button"
              onClick={() => (window.location.href = "/grupo")}
            >
              Conhecer Grupo
            </button>
          </div>
        </main>
      </div>

      <footer className="container-footer">
        <div className="footer">
          <div className="footer-contacts">
            <p>
              <strong>Instagram:</strong> Alfa.One_oficial
            </p>
            <p>
              <strong>GitHub:</strong> Alfa One Development
            </p>
            <p>
              <strong>Contato:</strong> Alfa_One_Development@gmail.com
            </p>

            {/* Link em formato de <p> */}
            <p>
              <a
                href="https://docs.google.com/document/d/1JpO7CkvOSl_JNDObUYzykHD4WwUq9kxqE-9m8Ctc-34/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Acessar Manual do Usuário
              </a>
            </p>
          </div>

          <img src={logoImg} alt="Logo" className="logo-img" />
        </div>
      </footer>
    </div>
  );
}
