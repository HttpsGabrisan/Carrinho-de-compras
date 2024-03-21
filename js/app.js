let totalGeral;
limpar()

function adicionar() {
// Retomar os valores: nome, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario= produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

// Calcular o preço por produto

    let precoTotal = (quantidade * valorUnitario);

// Adicionar ao carrinho
    let carrinhoProdutos = document.getElementById('lista-produtos');
    carrinhoProdutos.innerHTML = carrinhoProdutos.innerHTML + ` <section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${precoTotal}</span>
  </section>`;
    
// Calcular subtotal

    totalGeral = totalGeral + precoTotal;
    let valorGeral = document.getElementById('valor-total');
    valorGeral.innerHTML = `<span class="texto-azul" id="valor-total">R$${totalGeral}</span>`;

    document.getElementById('quantidade').value = '';
}


function limpar() {
    // Limpar carrinho
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('quantidade').value = '';
}