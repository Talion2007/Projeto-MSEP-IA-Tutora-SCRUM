import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";
import { gerarAtividadeHistoria } from "../backend/gerarAtividade";
import { gerarPDF } from "../backend/gerarPDF";

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
