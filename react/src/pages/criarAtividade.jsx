import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { gerarAtividadeHistoria } from "../backend/gerarAtividade";
import { gerarPDF } from "../backend/gerarPDF";
import Image from "../assets/image.png";
import Imagem2 from "../assets/imagem2.jpg";
import Imagem3 from "../assets/imagem3.png";

import "../styles/chat.css";

export default function AtividadeHistoria() {
  const [tema, setTema] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("individual");
  const [numEstudantes, setNumEstudantes] = useState("");
  const [serie, setSerie] = useState("");
  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);

  async function gerarAtividade() {
    setLoading(true);
    const resposta = await gerarAtividadeHistoria({
      tema,
      descricao,
      tipo,
      numEstudantes,
      serie,
    });
    setResultado(resposta);
    setLoading(false);
  }

  function baixarPDF() {
    gerarPDF(tema, serie);
  }

  return (
    <div className="container-atividade atividade-container">
      {" "}
      {/* antigo + novo */}
      <div className="formulario-atividade">
        {" "}
        {/* mantém estrutura antiga se você tiver */}
        <h2 className="atividade-titulo">Gerar Atividade de História 🇧🇷</h2>
        <input
          className="atividade-input atividade-input--legacy" /* nova + marcador legacy */
          placeholder="Tema"
          value={tema}
          onChange={(e) => setTema(e.target.value)}
        />
        <textarea
          className="atividade-textarea atividade-textarea--legacy"
          placeholder="Descrição breve"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <select
          className="atividade-select atividade-select--legacy"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="individual">Individual</option>
          <option value="grupo">Grupo</option>
        </select>
        <input
          className="atividade-input atividade-input--legacy"
          placeholder="Número de estudantes"
          value={numEstudantes}
          onChange={(e) => setNumEstudantes(e.target.value)}
        />
        <select
          className="atividade-select atividade-select--legacy"
          value={serie}
          onChange={(e) => setSerie(e.target.value)}
        >
          <option value="">Selecione a série</option>
          <option value="6º ano">6º ano</option>
          <option value="7º ano">7º ano</option>
          <option value="8º ano">8º ano</option>
          <option value="9º ano">9º ano</option>
          <option value="1º ano">1º ano do Ensino Médio</option>
          <option value="2º ano">2º ano do Ensino Médio</option>
          <option value="3º ano">3º ano do Ensino Médio</option>
        </select>
        <button
          className="botao-brasil btn-gerar" /* mantém antigo + aplica novo */
          onClick={gerarAtividade}
          disabled={loading}
        >
          {loading ? "Gerando..." : "Gerar Atividade"}
        </button>
        {resultado && (
          <>
            <button className="botao-pdf btn-pdf" onClick={baixarPDF}>
              Baixar PDF
            </button>

            <div className="imagens-wrapper">
              <a
                href="https://www.trivago.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Image}
                  alt="Imagem decorativa"
                  className="imagem-decorativa"
                />
              </a>

              <a
                href="https://app.bing.cassino.bet.br/67dc4239702992c391ffc9bd?sub1=76691138993334&sub2=486422288&sub3=c&sub4=1227056072294338&sub5=e&utm_campaign=Rede%20de%20Pesquisa%20-%20Branding%20-%2001&sub7=&sub8=bet%20nacional&sub9=kwd-76691382390887:loc-20&sub10=bet%20nacional&utm_source=Bing&ref_id=4edb596ea5881a23cd06305ee3459ccf&msclkid=4edb596ea5881a23cd06305ee3459ccf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Imagem2}
                  alt="Imagem decorativa 2"
                  className="imagem-decorativa"
                />
              </a>

              <a
                href="https://cursos.anhanguera.com/selecao/inscricao?gclid=9a7f86071df01b593f57ef375ae4bdd7&gclsrc=3p.ds&msclkid=9a7f86071df01b593f57ef375ae4bdd7&utm_source=bing&utm_medium=cpc&utm_campaign=gabp-018_bg_sch-l1_prim_grad_aedu_aon_grad_ecomm_institucional-ampla_na_na_inscricoes&utm_term=anhanguera&utm_content=gabp-018-001_bg_sch-l1_prim_grad_aedu_aon_grad_ecomm_institucional-ampla_na_na_inscricoes_auto_kwd_marca-google"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Imagem3}
                  alt="Imagem decorativa 3"
                  className="imagem-decorativa"
                />
              </a>
            </div>
          </>
        )}
      </div>
      {resultado && (
        <div
          className="resultado-box resultado-container"
          id="conteudo-markdown"
        >
          <h3 className="resultado-titulo">Resultado da Atividade</h3>
          <ReactMarkdown>{resultado}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
