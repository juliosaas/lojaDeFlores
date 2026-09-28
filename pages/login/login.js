const login = () => {
    const login = document.getElementById('inputLogin').value;
    const senha = document.getElementById('inputSenha').value;

    if(senha == 'admin' && senha == 'admin') {
        window.location.href = '../../index.html';
        console.log('show')
    } else {
        console.log('invalido');
        
    }
} 