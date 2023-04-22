import React from 'react';

function Item({ name, category, isInCart, setIsInCart, addToCart, removeFromCart }) {
  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
    isInCart ? removeFromCart() : addToCart();
  }

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? 'remove' : 'add'}
        onClick={handleAddToCartClick}>
        {isInCart ? 'Remove From' : 'Add to'} Cart
      </button>
    </li>
  );
}

export default Item;
