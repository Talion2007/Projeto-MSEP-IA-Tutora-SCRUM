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
        <button
          className="botao-voltar"
          onClick={() => (window.location.href = "/")}
        >
          ⬅ Voltar
        </button>

        <h1 className="titli">NOSSA EQUIPE</h1>

      </header>

      {/* Fotos de cima */}
      <section className="container-top-photos">
        <div className="box top-row">
           <div className="individual">
          <h2>Felipe Cagnin  <a href="https://github.com/Talion2007/">🐱</a></h2>
          <p>Líder</p>
          
          <img src={felpsImg} alt="Felps" />
          </div>
          <div className="individual">
          <h2>Murilo Correia <a href="https://github.com/3006m/">🐱</a></h2>
          <p>Vice-Líder</p>
          
          <img src={correiaImg} alt="Correia" />
          </div>
         
         <div className="individual">
          <h2>Murilo Besson <a href="https://github.com/MuriloBesson68/">🐱</a></h2>
          <p>Membro</p>
          
          <img src={bessonImg} alt="Besson" />
          </div>
        </div>
      </section>

      {/* Fotos de baixo */}
      <section className="container-bottom-photos">
        <div className="box bottom-row">
          <div className="individual">
          <h2>Vitor Hugo <a href="https://github.com/VitorIzidoro/">🐱</a></h2>
          <p>Membro</p>
          
          <img src={vitorImg} alt="Vitor" />
          </div>
          <div className="individual">
          <h2>Enzzo</h2>
          <p>Ex-Membro</p>
          <img src={enzzoImg} alt="Enzzo" />
          </div>
          <div className="individual">
          <h2>William Magno <a href="https://github.com/WILLIAMsesi242/">🐱</a></h2>
          <p>Membro</p>
          
          <img src={willImg} alt="Will" />
          </div>
        </div>
      </section>

      {/* Foto do grupo */}
      <section className="container-group-photo">
        <div className="foto-grupo-container">
          <div className="novadiv">
        <h1>Grupo 1 - Alfa One Development <a href="https://github.com/Alfa-One-Development">🐱</a></h1>
        <div className="divrow">
          <img src={grupoFoto} alt="Foto do grupo" className="foto-grupo-img" />
          <img src={logoImg} alt="Logo" className="logo-img" />
          </div>
          </div>
        </div>
        
      </section>

      
      <footer className="container-footer">
        <div className="footer">

        
          <div className="footer-contacts">
            <p><strong>Instagram:</strong> @felipe_cagnin - @mu_correia </p>
            <p><strong>GitHub:</strong> Clique no gatinho do nome!</p>
            <p><strong>Contato:</strong> felipe.cagnin.lima@gmail.com  -  mucorreia008@gmail.com</p>
          </div>

          

          
          
          <div>
            <h2>Copyright - Alfa One 2025</h2>
          </div>
        </div>
        
      </footer>
    </div>
  );
}