import React from "react";
import "../styles/grupo.css";

import bessonImg from "../assets/Besson.png";
import correiaImg from "../assets/Correia.png";
import felpsImg from "../assets/Felps.png";
import willImg from "../assets/Will.png";
import vitorImg from "../assets/Vitor.png";
import enzzoImg from "../assets/Enzzo.png";
import grupoFoto from "../assets/FotoDoGrupo.png";
import logoImg from "../assets/Logo.png";

export default function GrupoPage() {
  return (
    <div className="page-container">
      {/* Top bar */}
      <header className="top-bar">
        <button className="back-btn" aria-label="Voltar">
          ←
        </button>

        <h1>GRUPO</h1>

      </header>

      {/* Fotos de cima */}
      <section className="container-top-photos">
        <div className="box top-row">
          <img src={correiaImg} alt="Correia" />
          <img src={bessonImg} alt="Besson" />
          <img src={felpsImg} alt="Felps" />
        </div>
      </section>

      {/* Fotos de baixo */}
      <section className="container-bottom-photos">
        <div className="box bottom-row">
          <img src={vitorImg} alt="Vitor" />
          <img src={enzzoImg} alt="Enzzo" />
          <img src={willImg} alt="Will" />
        </div>
      </section>

      {/* Foto do grupo */}
      <section className="container-group-photo">
        <div className="foto-grupo-container">
          <img src={grupoFoto} alt="Foto do grupo" className="foto-grupo-img" />
        </div>
      </section>

      {/* Footer */}
      <footer className="container-footer">
        <div className="footer">

          {/* Contatos */}
          <div className="footer-contacts">
            <p><strong>Instagram:</strong> Alfa.One_oficial</p>
            <p><strong>GitHub:</strong> Alfa One Development</p>
            <p><strong>Contato:</strong> Alfa_One_Development@gmail.com</p>
          </div>

          {/* Logo */}
          <img src={logoImg} alt="Logo" className="logo-img" />
        </div>
      </footer>
    </div>
  );
}

