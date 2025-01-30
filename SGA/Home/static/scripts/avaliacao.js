document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");
    const form = document.getElementById("edit-form");

    let selectedRow = null;

    // Carregar os dados salvos (se houver) do localStorage
    let alunos = JSON.parse(localStorage.getItem("alunos"));
    if (!alunos) {
        alunos = [
            // { "nome": "Aluno 1", "notas": [8, 7.5, 9] },
            // { "nome": "Aluno 2", "notas": [6, 5.5, 7] },
            // { "nome": "Aluno 3", "notas": [9, 8.5, 9.5] },
            // { "nome": "Aluno 4", "notas": [4, 6, 5] }
        ];
        // Salvar os dados iniciais no localStorage
        localStorage.setItem("alunos", JSON.stringify(alunos));
    }

    // Atualiza a tabela ao carregar a página
    function atualizarTabela() {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = ''; // Limpa a tabela antes de atualizá-la
        alunos.forEach((aluno, index) => {
            const tr = document.createElement("tr");
            tr.addEventListener("click", function () {
                selectedRow = tr;
                document.getElementById("edit-aluno").value = aluno.nome;
                document.getElementById("edit-av1").value = aluno.notas[0];
                document.getElementById("edit-av2").value = aluno.notas[1];
                document.getElementById("edit-av3").value = aluno.notas[2];
                modal.style.display = "block";
            });

            const tdNome = document.createElement("td");
            tdNome.textContent = aluno.nome;
            const tdAv1 = document.createElement("td");
            tdAv1.textContent = aluno.notas[0];
            const tdAv2 = document.createElement("td");
            tdAv2.textContent = aluno.notas[1];
            const tdAv3 = document.createElement("td");
            tdAv3.textContent = aluno.notas[2];

            tr.appendChild(tdNome);
            tr.appendChild(tdAv1);
            tr.appendChild(tdAv2);
            tr.appendChild(tdAv3);
            tbody.appendChild(tr);
        });
    }

    // Fecha o modal
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Salva as edições no formulário e no localStorage
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (selectedRow) {
            let nome = document.getElementById("edit-aluno").value;
            let av1 = document.getElementById("edit-av1").value;
            let av2 = document.getElementById("edit-av2").value;
            let av3 = document.getElementById("edit-av3").value;

            // Atualiza os valores na tabela
            selectedRow.cells[1].textContent = av1;
            selectedRow.cells[2].textContent = av2;
            selectedRow.cells[3].textContent = av3;

            // Atualiza os dados no array de alunos
            let index = [...document.querySelectorAll("tbody tr")].indexOf(selectedRow);
            if (alunos[index]) {
                alunos[index].notas = [av1, av2, av3];
            } else {
                alunos[index] = { nome, notas: [av1, av2, av3] };
            }

            // Salva todos os dados no localStorage
            localStorage.setItem("alunos", JSON.stringify(alunos));
        }
        modal.style.display = "none";
    });

    // Atualiza a tabela ao carregar
    atualizarTabela();
});
