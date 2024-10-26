document.getElementById('toggleSenha').addEventListener('click', function() {
    const senha = document.getElementById('senha');
    const icon = this;

    // Alterna entre os tipos 'password' e 'text'
    if (senha.type === 'password') {
        senha.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        senha.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});