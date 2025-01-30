document.addEventListener("DOMContentLoaded", function () {

    let alunos = JSON.parse(localStorage.getItem("alunos")) || [];
    if (!alunos) {
        // Salvar os dados iniciais no localStorage
        localStorage.setItem("alunos", JSON.stringify(alunos));
    }
})