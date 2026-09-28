const cadastrarUsuario = () => {
    // 1. pega a lista existente (se não existir, usa '[]')
    const listaRecuperada = JSON.parse(localStorage.getItem("usuarios") || '[]');

    // 2. monta o novo usuário com os campos do formulário
    const novoUsuario = {
        nome: document.getElementById('nome').value.trim(),
        email: document.getElementById('email').value.trim().toLowerCase(),
        senha: document.getElementById('senha').value,
        rg: document.getElementById('rg').value.trim(),
        cpf: document.getElementById('cpf').value.trim(),
        endereco: document.getElementById('endereco').value.trim(),
        cep: document.getElementById('cep').value.trim(),
        cidade: document.getElementById('cidade').value.trim(),
        estado: document.getElementById('estado').value.trim(),
        pais: document.getElementById('pais').value.trim(),
        nascimento: document.getElementById('nascimento').value
    };

    // evita cadastrar dois usuários com o mesmo email
    const emailJaExiste = listaRecuperada.some(u => u.email === novoUsuario.email);
    if (emailJaExiste) {
        alert('Já existe um cadastro com esse email.');
        return false;
    }

    // 3. salva a lista antiga + o novo usuário
    const novaLista = [...listaRecuperada, novoUsuario];
    localStorage.setItem("usuarios", JSON.stringify(novaLista));
    return true;
};

document.getElementById('cadastroForm').addEventListener('submit', (event) => {
    event.preventDefault(); // não deixa o form recarregar/redirecionar sozinho

    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    if (senha !== confirmaSenha) {
        alert('As senhas não conferem.');
        return;
    }

    if (cadastrarUsuario()) {
        alert('Cadastro criado');
        window.location.href = '../login/login.html';
    }
});