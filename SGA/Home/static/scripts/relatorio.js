document.addEventListener("DOMContentLoaded", function () {
    let alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    const tbody = document.getElementById("alunos-relatorio");

    alunos.forEach(aluno => {
        let row = document.createElement("tr");

        let nomeCell = document.createElement("td");
        nomeCell.textContent = aluno.nome;
        row.appendChild(nomeCell);

        let mediaCell = document.createElement("td");
        let media = aluno.notas.length > 0 ? (aluno.notas.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) / aluno.notas.length).toFixed(2) : 0;
        mediaCell.textContent = media;
        row.appendChild(mediaCell);

        let statusCell = document.createElement("td");
        statusCell.textContent = media >= 7 ? "Aprovado" : "Reprovado";
        statusCell.className = media >= 7 ? "aprovado" : "reprovado";
        row.appendChild(statusCell);

        tbody.appendChild(row);
    });
});