document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('message-btn');
    const textoMensagem = document.getElementById('message-text');
    botao.addEventListener('click', function() {
        textoMensagem.textContent = "Que a força esteja com você para programar muito.";
    });
});