// Função para simular o efeito de digitação
function typeEffect(element, speed) {
    const text = element.innerHTML;
    element.innerHTML = '';

    let i = 0;
    const timer = setInterval(function() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Função para acionar o efeito de digitação nos elementos desejados
function startTextAnimation() {
    const welcomeText = document.getElementById('welcome-text');
    const descriptionText = document.getElementById('description-text');

    // Define a velocidade de digitação (em milissegundos por caractere)
    const speed = 50;

    // Inicia o efeito de digitação
    typeEffect(welcomeText, speed);
    setTimeout(function() {
        typeEffect(descriptionText, speed);
    }, welcomeText.innerHTML.length * speed + 300); // Adiciona um pequeno atraso antes de começar a digitar a descrição
}

window.onload = function() {
    startTextAnimation();
};
