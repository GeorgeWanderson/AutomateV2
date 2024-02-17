// Função para criar um relógio digital
function createClock(clockId, timezone) {
    setInterval(() => {
        const now = new Date();
        const time = now.toLocaleTimeString('en-US', { timeZone: timezone });
        document.getElementById(clockId).innerText = time;
    }, 1000);
}

// Função para atualizar os dados dos gráficos e widgets
function updateData() {
    // Simulação de atualização de dados
    const charts = document.querySelectorAll('.chart');
    const widgets = document.querySelectorAll('.widget');

    charts.forEach(chart => {
        chart.innerText = generateChartData();
    });

    widgets.forEach(widget => {
        widget.innerText = generateWidgetData();
    });
}

// Função para gerar dados aleatórios para os gráficos
function generateChartData() {
    return Math.floor(Math.random() * 100) + 1;
}

// Função para gerar dados aleatórios para os widgets
function generateWidgetData() {
    return Math.floor(Math.random() * 1000) + 1;
}

// Alternar entre os temas claro e escuro
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

// Chamando as funções para criar os relógios e definir os eventos dos botões
document.addEventListener('DOMContentLoaded', () => {
    createClock('clock-container', 'America/New_York'); // Relógio para Nova York
    createClock('clock-container', 'Europe/London'); // Relógio para Londres
    createClock('clock-container', 'Asia/Tokyo'); // Relógio para Tóquio

    document.getElementById('refresh-button').addEventListener('click', updateData);
    document.getElementById('continue-button').addEventListener('click', continueFlow);
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});

// Simular continuação do fluxo de dados
function continueFlow() {
    setInterval(updateData, 3000); // Atualiza os dados a cada 3 segundos
}
