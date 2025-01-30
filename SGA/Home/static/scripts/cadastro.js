document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cadastro-form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const confirmarSenhaInput = document.getElementById('confirmar_senha');

    // Função para limpar mensagens de erro
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(message) {
            message.remove();
        });
    }

    // Função para mostrar mensagem de erro
    function showError(input, message) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = message;
        errorMessage.classList.add('error-message');
        errorMessage.style.color = 'red';
        input.parentNode.appendChild(errorMessage);
    }

    // Função de validação
    function validateForm(event) {
        clearErrors(); // Limpa mensagens anteriores

        let valid = true;

        // Validação do nome
        if (nomeInput.value.trim() === '') {
            showError(nomeInput, 'O nome completo é obrigatório.');
            valid = false;
        }

        // Validação do e-mail
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'O e-mail é obrigatório.');
            valid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, 'Por favor, insira um e-mail válido.');
            valid = false;
        }

        // Validação da senha
        if (senhaInput.value.trim() === '') {
            showError(senhaInput, 'A senha é obrigatória.');
            valid = false;
        }

        // Validação da confirmação da senha
        if (confirmarSenhaInput.value.trim() === '') {
            showError(confirmarSenhaInput, 'Por favor, confirme sua senha.');
            valid = false;
        } else if (confirmarSenhaInput.value !== senhaInput.value) {
            showError(confirmarSenhaInput, 'As senhas não coincidem.');
            valid = false;
        }

        // Se o formulário não for válido, impedir o envio
        if (!valid) {
            event.preventDefault();
        } else {
            // Exibe a mensagem de sucesso
            alert('Usuário cadastrado com sucesso!');

            // Cria um objeto de aluno com o nome, e-mail e notas vazias (para futuras edições)
            const aluno = {
                nome: nomeInput.value.trim(),
                notas: [0, 0, 0] // Aqui podemos armazenar as notas para futuras edições
            };

            // Carrega os alunos existentes do localStorage ou cria uma lista vazia
            let alunos = JSON.parse(localStorage.getItem("alunos")) || [];  // Agora, sempre retorna um array (se não existir, será vazio)
            
            // Adiciona o novo aluno ao array
            alunos.push(aluno);

            // Salva os dados atualizados no localStorage
            localStorage.setItem("alunos", JSON.stringify(alunos));
        }
    }

    // Verifica o formulário ao ser enviado
    form.addEventListener('submit', validateForm);

    // Remover as mensagens de erro enquanto o usuário digita
    nomeInput.addEventListener('input', clearErrors);
    emailInput.addEventListener('input', clearErrors);
    senhaInput.addEventListener('input', clearErrors);
    confirmarSenhaInput.addEventListener('input', clearErrors);
});
