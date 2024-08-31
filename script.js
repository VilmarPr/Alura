document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('button');
    const resultado = document.querySelector('.resultado');

    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            const resposta = botao.getAttribute('data-resposta');
            resultado.textContent = `Você escolheu: ${resposta}`;
        });
    });
});
