import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";
import { gerarAtividadeHistoria } from "../backend/gerarAtividade";
import { gerarPDF } from "../backend/gerarPDF";
import Image from '../assets/image.png';
import Imagem2 from '../assets/imagem2.jpg';
import Imagem3 from '../assets/imagem3.png';

import '../styles/style.css';

export default function AtividadeHistoria() {
    const [tema, setTema] = useState('');
    const [descricao, setDescricao] = useState('');
    const [tipo, setTipo] = useState('individual');
    const [numEstudantes, setNumEstudantes] = useState('');
    const [serie, setSerie] = useState('');
    const [resultado, setResultado] = useState('');
    const [loading, setLoading] = useState(false);

    async function gerarAtividade() {
        setLoading(true);

        const resposta = await gerarAtividadeHistoria({
            tema,
            descricao,
            tipo,
            numEstudantes,
            serie
        });

        setResultado(resposta);
        setLoading(false);
    }

    function baixarPDF() {
        gerarPDF(tema, serie);
    }

    return (
        <>

            <div className="linha-separadora" >

                <div className="container-atividade">

                    <div className="formulario-atividade">
                        <h2>Gerar Atividade de História 🇧🇷</h2>

                        <input
                            placeholder="Tema"
                            value={tema}
                            onChange={(e) => setTema(e.target.value)}
                        />

                        <textarea
                            placeholder="Descrição breve"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />

                        <select
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                        >
                            <option value="individual">Individual</option>
                            <option value="grupo">Grupo</option>
                        </select>

                        <input
                            placeholder="Número de estudantes"
                            value={numEstudantes}
                            onChange={(e) => setNumEstudantes(e.target.value)}
                        />

                        <select
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

                        <button className="botao-brasil" onClick={gerarAtividade} disabled={loading}>
                            {loading ? 'Gerando...' : 'Gerar Atividade'}
                        </button>
                        {resultado && (
                            <>
                                <button className="botao-pdf" onClick={baixarPDF}>Baixar PDF</button>
                            </>
                        )}
                    </div>
                    {resultado && (
                        <>
                            <img src={Image} alt="Imagem decorativa" className="imagem-decorativa" />
                            <img src={Imagem2} alt="Imagem decorativa 2" className="imagem-decorativa" />
                            <img src={Imagem3} alt="Imagem decorativa 3" className="imagem-decorativa" />
                        </>
                    )}
                </div>

                {resultado && (
                    <>
                        <div className="resultado-box" id="conteudo-markdown">
                            <ReactMarkdown>{resultado}</ReactMarkdown>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
