import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from "react-markdown";
import html2pdf from "html2pdf.js";

import { apiCagnin, apiFelipe, apiTeste } from '../backend/ApiKeys'; // Certifique-se de que as chaves estão corretas

// Suas chaves aqui
const apiKeys = [
    apiCagnin,
    apiFelipe,
    apiTeste
];

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

        const prompt = `Gere uma atividade completa para aula de História, em MARKDOWN.

Tema: ${tema}
Descrição breve: ${descricao}
Tipo de atividade: ${tipo}
Número de estudantes: ${numEstudantes}
Série: ${serie}

A resposta deve conter: objetivo, materiais necessários, passo a passo, critérios de avaliação e versão imprimível.`;

        let respostaIA = "Erro ao gerar atividade.";

        for (let key of apiKeys) {
            try {
                const res = await axios.post(
                    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
                    {
                        contents: [
                            {
                                parts: [
                                    {
                                        text: prompt
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        headers: { "Content-Type": "application/json" },
                        params: { key }
                    }
                );

                respostaIA = res.data.candidates[0]?.content?.parts[0]?.text || respostaIA;
                break; // Sai do loop se funcionar
                // eslint-disable-next-line no-unused-vars
            } catch (err) {
                console.warn(`Erro com a chave ${key}, tentando a próxima...`);
            }
        }

        setResultado(respostaIA);
        setLoading(false);
    }

    // Gerar e baixar PDF

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
        <div style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
            <h2>Gerar Atividade de História</h2>

            <input
                placeholder="Tema"
                value={tema}
                onChange={(e) => setTema(e.target.value)}
                style={{ width: '100%', marginBottom: 10 }}
            />

            <textarea
                placeholder="Descrição breve"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                style={{ width: '100%', marginBottom: 10 }}
            />

            <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                style={{ width: '100%', marginBottom: 10 }}
            >
                <option value="individual">Individual</option>
                <option value="grupo">Grupo</option>
            </select>

            <input
                placeholder="Número de estudantes"
                value={numEstudantes}
                onChange={(e) => setNumEstudantes(e.target.value)}
                style={{ width: '100%', marginBottom: 10 }}
            />

            <select
                value={serie}
                onChange={(e) => setSerie(e.target.value)}
                style={{ width: '100%', marginBottom: 20 }}
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

            <button onClick={gerarAtividade} disabled={loading}>
                {loading ? 'Gerando...' : 'Gerar Atividade'}
            </button>

            {resultado && (
                <>
                    <h3>Resultado:</h3>
                    <div
                        id="conteudo-markdown"
                        style={{ padding: 20, background: "#fff", color: "#000" }}
                    >
                        <ReactMarkdown>{resultado}</ReactMarkdown>
                    </div>

                    <button onClick={baixarPDF}>Baixar PDF</button>
                </>
            )}
        </div>
    );
}
