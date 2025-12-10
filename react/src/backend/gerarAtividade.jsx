import axios from "axios";

const apiKeys = [
    import.meta.env.VITE_API_CAGNIN,
    import.meta.env.VITE_API_FELIPE,
    import.meta.env.VITE_API_KNIGHT,
    import.meta.env.VITE_API_CORREIA
];

console.log(import.meta.env)

export async function gerarAtividadeHistoria(dados) {
    const { tema, descricao, tipo, numEstudantes, serie } = dados;

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
                                { text: prompt }
                            ]
                        }
                    ]
                },
                {
                    headers: { "Content-Type": "application/json" },
                    params: { key }
                }
            );

            respostaIA = res.data.candidates?.[0]?.content?.parts?.[0]?.text || respostaIA;

            break; // deu certo → sai do loop
            // eslint-disable-next-line no-unused-vars
        } catch (err) {
            console.warn(`Erro com a chave ${key}, tentando a próxima...`);
        }
    }

    return respostaIA;
}
