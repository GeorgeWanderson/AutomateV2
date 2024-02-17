// Função para realizar o cadastro de usuário
function register() {
    // Obter os valores dos campos de entrada
    var fullName = document.getElementById("fullName").value;
    var username = document.getElementById("username").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var password = document.getElementById("password").value;

    // Validar o nome completo (não deve conter números inteiros)
    if (/^\d+$/.test(fullName)) {
        document.getElementById("fullName-error").innerText = "O nome é inválido";
        return;
    } else {
        document.getElementById("fullName-error").innerText = "";
    }

    // Validar o nome de usuário (deve conter apenas 12 caracteres)
    if (username.length !== 12) {
        document.getElementById("username-error").innerText = "O nome de usuário deve conter exatamente 12 caracteres";
        return;
    } else {
        document.getElementById("username-error").innerText = "";
    }

    // Validar a idade (deve estar entre 18 e 65)
    if (age < 18 || age > 65) {
        document.getElementById("age-error").innerText = "A idade não atende aos critérios do sistema";
        return;
    } else {
        document.getElementById("age-error").innerText = "";
    }

    // Validar o e-mail
    if (!validateEmail(email)) {
        document.getElementById("email-error").innerText = "O e-mail é inválido";
        return;
    } else {
        document.getElementById("email-error").innerText = "";
    }

    // Validar a senha (deve conter pelo menos uma letra maiúscula, um número e no mínimo 8 caracteres)
    if (!password.match(/^(?=.*[A-Z])(?=.*\d).{8,}$/)) {
        document.getElementById("password-error").innerText = "A senha deve conter pelo menos uma letra maiúscula, um número e no mínimo 8 caracteres";
        return;
    } else {
        document.getElementById("password-error").innerText = "";
    }

    // Simulação de armazenamento local dos dados do usuário
    var user = {
        fullName: fullName,
        username: username,
        age: age,
        email: email,
        address: address,
        password: password
    };

    localStorage.setItem('currentUser', JSON.stringify(user));

    // Exibir mensagem de sucesso
    showSuccessSnackbar("Cadastro efetuado com sucesso!");

    // Redirecionar para a página de dashboard após 7 segundos
    setTimeout(function() {
        window.location.href = "/web/dashboard.html";
    }, 7000);
}

// Função para validar o formato do e-mail
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Função para exibir um snackbar de sucesso
function showSuccessSnackbar(message) {
    var snackbar = document.getElementById("successSnackbar");
    snackbar.innerText = message;
    snackbar.className = "snackbar show"; // Adiciona a classe show para exibir o modal

    setTimeout(function() {
        snackbar.className = snackbar.className.replace("show", ""); // Remove a classe show após 3 segundos
    }, 3000);
}
