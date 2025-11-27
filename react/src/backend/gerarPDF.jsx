import html2pdf from "html2pdf.js";

export function gerarPDF(tema, serie) {
    const elemento = document.getElementById("conteudo-markdown");

    const opt = {
        margin: 10,
        filename: `Atividade - ${tema} - ${serie}.pdf`,
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(opt).from(elemento).save();
}
