const validarLogin = () => {
    // pego os dados dos inputs
    // (mesmo tratamento do cadastro: email sem espaço e em minúsculo)
    const emailDigitado = document.getElementById('inputLogin').value.trim().toLowerCase();
    const senhaDigitada = document.getElementById('inputSenha').value;

    // 1. recupera a lista do localStorage (e garante que seja um array)
    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

    // 2. procura por um usuário com o mesmo e-mail e senha
    const usuarioEncontrado = usuariosSalvos.find(
        (user) => user.email === emailDigitado && user.senha === senhaDigitada
    );

    // 3. se encontrar, redireciona; se não, mostra um alert
    if (usuarioEncontrado) {
        console.log("Login realizado com sucesso! Bem-vindo, " + usuarioEncontrado.nome);
        window.location.href = '../pages/principal.html'; // ajuste pro caminho da SUA tela principal
    } else {
        alert("E-mail ou senha incorretos.");
    }
};