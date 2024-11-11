let contador = 0;
let tempo = 10;
let tempoRestante;
let jogoAtivo = true;

function clicar() {
    if (jogoAtivo) {
        contador++;
        document.getElementById('contador').textContent = contador;
    }
}

function atualizarTempo() {
    tempoRestante = setInterval(function() {
        tempo--;
        document.getElementById('tempo').textContent = tempo;
        
        if (tempo <= 0) {
            clearInterval(tempoRestante);
            jogoAtivo = false;
            document.getElementById('botao').disabled = true;
            document.getElementById('reiniciar').style.display = 'inline-block';
        }
    }, 1000);
}

function reiniciar() {
    contador = 0;
    tempo = 10;
    jogoAtivo = true;
    document.getElementById('contador').textContent = contador;
    document.getElementById('tempo').textContent = tempo;
    document.getElementById('botao').disabled = false;
    document.getElementById('reiniciar').style.display = 'none';
    atualizarTempo();
}

atualizarTempo();
