import React from "react";
import "../styles/home.css";
import logoImg from "../assets/Logo.png";

export default function HomePage() {
  return (
    <div>
    <div className="container">
      <main className="content">
        <h1 className="section-title">Assistente AI - Professor João Miguel</h1>
        <section className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <h4>Modelo de Orientações (PDF)</h4>
              <p>
                Documento padronizado para garantir consistência nas aulas e
                atividades.
              </p>
            </div>

            <div className="feature-card">
              <h4>Metodologia Ativa</h4>
              <p>
                Discutir a aplicação de aulas de uma forma diferente em todas as
                turmas para promover maior engajamento e eficácia no
                aprendizado.
              </p>
            </div>

            <div className="feature-card">
              <h4>Ideias de Slides</h4>
              <p>
                Apresentações com personalização por tema, incluindo mapas
                "antes e depois".
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
       
       <section>
        
       </section>
    </div>
    <footer className="container-footer">
              <div className="footer">
      
          
                <div className="footer-contacts">
                  <p><strong>Instagram:</strong> Alfa.One_oficial</p>
                  <p><strong>GitHub:</strong> Alfa One Development</p>
                  <p><strong>Contato:</strong> Alfa_One_Development@gmail.com</p>
                </div>
      
              
                <img src={logoImg} alt="Logo" className="logo-img" />
              </div>
            </footer>
    </div>
  );
}