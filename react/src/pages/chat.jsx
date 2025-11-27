import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from "react-markdown";

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
        const blob = new Blob([resultado], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'atividade-historia.pdf';
        link.click();
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

            <input
                placeholder="Série"
                value={serie}
                onChange={(e) => setSerie(e.target.value)}
                style={{ width: '100%', marginBottom: 20 }}
            />

            <button onClick={gerarAtividade} disabled={loading}>
                {loading ? 'Gerando...' : 'Gerar Atividade'}
            </button>

            {resultado && (
                <>
                    <h3>Resultado:</h3>
                    <pre style={{ whiteSpace: 'pre-wrap', padding: 10 }}>
                        <ReactMarkdown>{resultado}</ReactMarkdown>
                    </pre>
                    <button onClick={baixarPDF}>Baixar PDF</button>
                </>
            )}
        </div>
    );
}
