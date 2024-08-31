document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.alternativa');
    const textoResultado = document.querySelector('.texto-resultado');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const resposta = botao.getAttribute('data-resposta');
            textoResultado.textContent = `Você escolheu: ${resposta}`;
        });
    });
});
