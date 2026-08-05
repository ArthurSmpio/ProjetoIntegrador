document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. RECURSOS DE ACESSIBILIDADE ---
    const btnContrast = document.getElementById('btn-contrast');
    const btnFontInc = document.getElementById('btn-font-increase');
    const btnFontDec = document.getElementById('btn-font-decrease');
    let currentFontSize = 16;

    // Alternar Alto Contraste
    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // Aumentar Fonte
    btnFontInc.addEventListener('click', () => {
        if (currentFontSize < 22) {
            currentFontSize += 2;
            document.body.style.fontSize = `${currentFontSize}px`;
        }
    });

    // Diminuir Fonte
    btnFontDec.addEventListener('click', () => {
        if (currentFontSize > 12) {
            currentFontSize -= 2;
            document.body.style.fontSize = `${currentFontSize}px`;
        }
    });

    // --- 2. LÓGICA DO SIMULADOR DE ROBÓTICA ---
    const sliderPiscina = document.getElementById('temp-piscina');
    const sliderPlaca = document.getElementById('temp-placa');
    const valPiscina = document.getElementById('val-piscina');
    const valPlaca = document.getElementById('val-placa');
    const statusBomba = document.getElementById('status-bomba');

    function atualizarSimulacao() {
        const tPiscina = parseInt(sliderPiscina.value);
        const tPlaca = parseInt(sliderPlaca.value);

        valPiscina.textContent = tPiscina;
        valPlaca.textContent = tPlaca;

        // Regra de Automação: A bomba liga se a placa estiver pelo menos 5°C mais quente que a piscina
        if (tPlaca >= tPiscina + 5) {
            statusBomba.textContent = "LIGADA (Circulando água quente)";
            statusBomba.style.color = "green";
        } else {
            statusBomba.textContent = "DESLIGADA (Temperatura insuficiente na placa)";
            statusBomba.style.color = "red";
        }
    }

    sliderPiscina.addEventListener('input', atualizarSimulacao);
    sliderPlaca.addEventListener('input', atualizarSimulacao);
    
    // Inicializar simulação
    atualizarSimulacao();
});