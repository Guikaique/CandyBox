document.getElementById('formulario-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    const suite = document.getElementById('suite').value;


    if (nome && email && telefone && mensagem && suite) {

        document.getElementById('resposta').textContent = 'Mensagem enviada com sucesso!';
        document.getElementById('resposta').style.color = 'green';
    } else {

        document.getElementById('resposta').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('resposta').style.color = 'red';
    }

    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('mensagem').value = '';
    document.getElementById('suite').value = '';
});
document.getElementById('quantidade-adultos').addEventListener('change', function() {
    const mensagemErro = document.getElementById('mensagem');
    if (this.value === 'MAIS DE 5 ADULTOS') {
        mensagemErro.style.color = 'red';
        mensagemErro.placeholder = 'Por favor, informe abaixo as informações necessárias para mais de 5 adultos.';
    } else {
        mensagemErro.placeholder = 'Escreva sua mensagem aqui';
    }
});

document.getElementById('quantidade-criancas').addEventListener('change', function() {
    const mensagemErro = document.getElementById('mensagem');
    if (this.value === 'MAIS DE 4 CRIANÇAS') {
        mensagemErro.style.color = 'red';
        mensagemErro.placeholder = 'Por favor, informe abaixo as informações necessárias para mais de 4 crianças.';
    } else {
        mensagemErro.placeholder = 'Escreva sua mensagem aqui';
    }
});