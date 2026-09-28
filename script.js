const containerProdutos = document.getElementById('produtos');

const produtos = [
    {imagem: 'assets/images/buqueUm.png',
    nome: 'Buquê Um',
    nota: '⭐ 4.8 (120 avaliações)',
    preco: 'R$ 99,90'},

    {imagem: 'assets/images/buqueDois.png', 
    nome: 'Buquê Dois',
    nota: '⭐ 4.6 (85 avaliações)', 
    preco: 'R$ 129,90'},

    {imagem: 'assets/images/buqueTres.png',
    nome: 'Buquê Três',
    nota: '⭐ 4.9 (200 avaliações)',
    preco: 'R$ 149,90'},

    {
        imagem: 'assets/images/samabaia.png',
        nome: 'Samambaia',
        nota: '⭐ 4.6 (85 avaliações)',
        preco: 'R$ 129,90'
    }
];

produtos.forEach((item) => {
    containerProdutos.insertAdjacentHTML('beforeend', `
        <div class="items">
            <img src="${item.imagem}" alt="${item.nome}">
            <h3>${item.nome}</h3>
            <p class="nota">${item.nota}</p>
            <p class="preco">${item.preco}</p>
            <button>Comprar</button>
        </div>
    `);
});