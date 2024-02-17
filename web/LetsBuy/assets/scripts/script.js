document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const cartButton = document.getElementById('cartButton');
    const cartCount = document.getElementById('cartCount');
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const totalItems = document.getElementById('totalItems');
    const totalPrice = document.getElementById('totalPrice');
    const checkoutButton = document.getElementById('checkoutButton');
    const modalClose = document.querySelector('.close');
    const snackbar = document.getElementById('snackbar');

    // Produtos
    const products = [
        { id: 1, name: 'Produto 1', price: 20 },
        { id: 2, name: 'Produto 2', price: 30 },
        { id: 3, name: 'Produto 3', price: 25 },
        // Adicione mais produtos conforme necessário
    ];

    // Renderizar produtos na página
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="product${product.id}.jpg" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>R$ ${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})"><i class="fas fa-cart-plus"></i> Adicionar ao Carrinho</button>
        `;
        productList.appendChild(productDiv);
    });

    // Função para adicionar item ao carrinho
    window.addToCart = function(id, name, price) {
        const item = document.createElement('li');
        item.innerHTML = `${name} - R$ ${price.toFixed(2)} <button class="removeBtn" onclick="removeFromCart(this, ${price})"><i class="fas fa-trash-alt"></i></button>`;
        cartItems.appendChild(item);
        updateCartCount();
        updateCartTotal();
        showSnackbar(`${name} adicionado ao carrinho`);
    };

    // Função para remover item do carrinho
    window.removeFromCart = function(item, price) {
        const listItem = item.parentElement;
        listItem.remove();
        updateCartCount();
        updateCartTotal(-price);
    };

    // Função para atualizar a contagem de itens no carrinho
    function updateCartCount() {
        const count = cartItems.children.length;
        cartCount.textContent = count;
    }

    // Função para atualizar o total de itens e o preço no carrinho
    function updateCartTotal(priceChange = 0) {
        const count = cartItems.children.length;
        totalItems.textContent = count;
        let total = parseFloat(totalPrice.textContent) + priceChange;
        totalPrice.textContent = total.toFixed(2);
    }

    // Abrir modal do carrinho ao clicar no botão do carrinho
    cartButton.addEventListener('click', function() {
        cartModal.style.display = 'block';
    });

    // Fechar modal do carrinho ao clicar no botão de fechar
    modalClose.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });

    // Fechar modal do carrinho ao clicar fora do modal
    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Implementar checkout (limpar carrinho)
    checkoutButton.addEventListener('click', function() {
        cartItems.innerHTML = '';
        updateCartCount();
        updateCartTotal(-parseFloat(totalPrice.textContent));
        cartModal.style.display = 'none';
        alert('Compra finalizada com sucesso!');
    });

    // Exibir snackbar
    function showSnackbar(message) {
        snackbar.textContent = message;
        snackbar.classList.add('show');
        setTimeout(function() {
            snackbar.classList.remove('show');
        }, 2000);
    }
});
