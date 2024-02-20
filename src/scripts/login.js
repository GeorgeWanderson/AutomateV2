// Array para armazenar temporariamente os usuários
var usuarios = [];

// Função para carregar os usuários do armazenamento (simulado por um array em JSON)
function loadUsuarios() {
    var usuariosJson = localStorage.getItem('usuarios');
    if (usuariosJson) {
        usuarios = JSON.parse(usuariosJson);
    }
}

// Função para salvar os usuários no armazenamento (simulado por um array em JSON)
function saveUsuarios() {
    var usuariosJson = JSON.stringify(usuarios);
    localStorage.setItem('usuarios', usuariosJson);
}

// Usuário padrão
var usuarioPadrao = {
    username: 'admin',
    password: 'P@ss1234#automacao'
};

// Função para realizar o login
function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar se o usuário está tentando fazer login com o usuário padrão
    if (username === usuarioPadrao.username && password === usuarioPadrao.password) {
        showSnackbar('Login efetuado com sucesso!', 'success');
        // Armazenar temporariamente o usuário no cache
        sessionStorage.setItem('currentUser', JSON.stringify({ username: username }));
        // Redirecionar para a página do dashboard após o login bem-sucedido
        setTimeout(function() {
            window.location.href = '/web/dashboard.html';
        }, 5000);
        return;
    }

    // Carregar usuários
    loadUsuarios();

    // Verificar se o usuário existe
    var usuario = usuarios.find(u => u.username === username && u.password === password);

    if (usuario) {
        showSnackbar('Login efetuado com sucesso!', 'success');
        // Armazenar temporariamente o usuário no cache
        sessionStorage.setItem('currentUser', JSON.stringify(usuario));
        // Redirecionar para a página do dashboard após o login bem-sucedido
        setTimeout(function() {
            window.location.href = '/web/dashboard.html';
        }, 5000);
    } else {
        showSnackbar('Nome de usuário ou senha incorretos.', 'error');
    }
}

function showSnackbar(message, type) {
    var snackbarId = type === 'success' ? 'successSnackbar' : 'errorSnackbar';
    var snackbar = document.getElementById(snackbarId);
    
    // Definir o background com base no tipo de mensagem
    if (type === 'success') {
        snackbar.style.backgroundColor = '#4CAF50'; // Verde para sucesso
    } else if (type === 'error') {
        snackbar.style.backgroundColor = '#f44336'; // Vermelho para erro
    }
    
    // Adicionar classes específicas para o tipo de snackbar
    snackbar.textContent = message;
    snackbar.classList.add('show');

    // Remover a classe após 3 segundos
    setTimeout(function(){ snackbar.classList.remove('show'); }, 3000);
}

// Função para fechar o modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}