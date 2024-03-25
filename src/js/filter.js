const products = document.querySelector('.product__list-container');
const popcorn = document.querySelector('.popcorn');
const buds = document.querySelector('.buds');

const allProductsButton = document.querySelector('.all');
console.log(products, allProductsButton);

const handleClick = () => {
    console.log("Button was clicked");
  };
  
  allProductsButton.addEventListener("click", handleClick);