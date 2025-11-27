import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from "react-markdown";
import html2pdf from "html2pdf.js";
import '../styles/chat.css';

import { apiCagnin, apiFelipe, apiTeste } from '../backend/ApiKeys';

const apiKeys = [apiCagnin, apiFelipe, apiTeste];

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

        const prompt = `
Gere uma atividade completa para aula de História, em MARKDOWN.

Tema: ${tema}
Descrição breve: ${descricao}
Tipo de atividade: ${tipo}
Número de estudantes: ${numEstudantes}
Série: ${serie}

A resposta deve conter: objetivo, materiais necessários, passo a passo, critérios de avaliação e versão imprimível.
`;

        let respostaIA = "Erro ao gerar atividade.";

        for (let key of apiKeys) {
            try {
                const res = await axios.post(
                    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
                    {
                        contents: [
                            {
                                parts: [{ text: prompt }]
                            }
                        ]
                    },
                    {
                        headers: { "Content-Type": "application/json" },
                        params: { key }
                    }
                );

                respostaIA = res.data.candidates[0]?.content?.parts[0]?.text || respostaIA;
                break;
            } catch (err) {
                console.warn(`Erro com a chave ${key}, tentando a próxima...`);
            }
        }

        setResultado(respostaIA);
        setLoading(false);
    }

    function baixarPDF() {
        const elemento = document.getElementById("conteudo-markdown");

        const opt = {
            margin: 10,
            filename: `Atividade - ${tema} - ${serie}.pdf`,
            html2canvas: { scale: 2 },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
        };

        html2pdf().set(opt).from(elemento).save();
    }

    return (
        <div className="atividade-container">
            <h2 className="atividade-titulo">Gerar Atividade de História</h2>

            <input
                className="atividade-input"
                placeholder="Tema"
                value={tema}
                onChange={(e) => setTema(e.target.value)}
            />

            <textarea
                className="atividade-textarea"
                placeholder="Descrição breve"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />

            <select
                className="atividade-select"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
            >
                <option value="individual">Individual</option>
                <option value="grupo">Grupo</option>
            </select>

            <input
                className="atividade-input"
                placeholder="Número de estudantes"
                value={numEstudantes}
                onChange={(e) => setNumEstudantes(e.target.value)}
            />

            <select
                className="atividade-select"
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

            <button className="btn-gerar" onClick={gerarAtividade} disabled={loading}>
                {loading ? 'Gerando...' : 'Gerar Atividade'}
            </button>

            {resultado && (
                <>
                    <h3 className="resultado-titulo">Resultado:</h3>

                    <div id="conteudo-markdown" className="resultado-container">
                        <ReactMarkdown>{resultado}</ReactMarkdown>
                    </div>

                    <button className="btn-pdf" onClick={baixarPDF}>
                        Baixar PDF
                    </button>
                </>
            )}
        </div>
    );
}
