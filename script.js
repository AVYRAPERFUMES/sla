const cartCount = document.querySelector('#cartCount');
const bagButtons = document.querySelectorAll('.bag-btn');
const buyButtons = document.querySelectorAll('.buy-btn');
const subscribeForm = document.querySelector('.subscribe-form');

let total = 0;

bagButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    total += 1;
    cartCount.textContent = total;

    const card = event.target.closest('.product-card');
    const productName = card?.dataset.name ?? 'produto';
    alert(`${productName} adicionado à sacola!`);
  });
});

buyButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const card = event.target.closest('.product-card');
    const productName = card?.dataset.name ?? 'produto';
    const productPrice = card?.dataset.price ?? '0,00';
    alert(`Compra rápida de ${productName} iniciada por R$ ${productPrice}.`);
  });
});

subscribeForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Cadastro realizado! Em breve você receberá novidades AVYRA.');
  subscribeForm.reset();
});
