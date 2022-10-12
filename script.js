const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

 const atualizaPreco = () => {
  const precoTotalParagrafo = document.querySelector('.total-price');
  const carrinhoAtual = getSavedCartItems();
  if (!carrinhoAtual) {
    precoTotalParagrafo.innerHTML = '0';
    return;
  }
  const precoTotal = carrinhoAtual.reduce((prev, cur) => prev + cur.price, 0);
  precoTotalParagrafo.innerHTML = precoTotal;
};

 const cartItems = document.querySelector('.cart__items');

 const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', (e) => {
    const elementSelect = e.target;
    elementSelect.remove();
    const carrinhoAtual = getSavedCartItems();
    const index = carrinhoAtual.findIndex((item) => item.id === id);
    if (index === -1) {
      return;
    } 
    carrinhoAtual.splice(index, 1);
    saveCartItems(carrinhoAtual);
    atualizaPreco();
  });
  return li;
};

const adicionarItem = (data) => {
  let carrinhoAtual = getSavedCartItems();
  if (!carrinhoAtual) {
   carrinhoAtual = [];
  }
  carrinhoAtual.push(data);
  saveCartItems(carrinhoAtual);
};

const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';
  const botao = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  const id2 = createCustomElement('span', 'item__id', id);
  section.appendChild(id2);
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(botao);
  botao.addEventListener('click', async function () {
   const data = (await fetchItem(id));
   cartItems.appendChild(createCartItemElement(data));
   adicionarItem(data);
   atualizaPreco();
  });

  return section;
};

// const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

// Requisito 2
async function criarProduto() {
  const data = await fetchProducts('computador');
  await data.results.forEach(({ id, title, thumbnail, price }) => {
    document.querySelector('.items')
    .appendChild(createProductItemElement({ id, title, thumbnail, price }));
  });
}

// Requisito 10
const botaoEsvaziar = document.querySelector('.empty-cart');
botaoEsvaziar.addEventListener('click', function () {
  cartItems.innerHTML = '';
  localStorage.clear();
  atualizaPreco();
});

window.onload = () => {
  criarProduto();

  if (localStorage.cartItem) {
    const carrinhoAtual = getSavedCartItems();
    console.log(carrinhoAtual);
    carrinhoAtual.forEach((item) => {
      cartItems.appendChild(createCartItemElement(item));
    });
  }
  atualizaPreco();
};
