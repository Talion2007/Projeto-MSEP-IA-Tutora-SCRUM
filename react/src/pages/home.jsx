import React from "react";
import "../styles/home.css";

export default function HomeWireframe() {
  return (
    <div className="container">
      <div className="headerBox">
        <h1 className="title">IA CHAT BOT</h1>
        <p className="subtitle">Integre um chatbot de IA ao seu aplicativo.</p>
        <button className="mainButton">Comece</button>
      </div>

      <div className="featuresRow">
        <div className="featureBox">Interação Fácil</div>
        <div className="featureBox">Processamento de Linguagem Natural</div>
        <div className="featureBox">Conversas interativas</div>
      </div>

      <div className="chatSection">
        <h2 className="chatTitle">Chatbot</h2>
        <div className="chatContent">
          <div className="leftInfoBox">
            <div className="textBlock"></div>
            <div className="textBlockSmall"></div>
          </div>

          <div className="chatBox">
            <div className="msg">Hello!!</div>
            <div className="msg">Hi, how can I help you?</div>

            <div className="inputArea">
              <input className="input" />
              <button className="sendBtn">{">"}</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <button className="footerBtn">Ver nossa equipe</button>
        <button className="logoBtn">Logo</button>
      </div>
    </div>
  );
}