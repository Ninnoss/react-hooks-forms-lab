import React, { useState } from 'react';
import ItemForm from './ItemForm';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [isInCart, setIsInCart] = useState([])

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  // this is method chaining syntax
  const itemsToDisplay = items
    // category
    .filter((item) => selectedCategory === 'All' || item.category === selectedCategory)
    // search term
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  
  
  // keep track of what items are in the cart
    function addToCart(id) {
      setIsInCart([...isInCart, id]);
    }

    function removeFromCart(id) {
      setIsInCart(isInCart.filter((itemID) => itemID !== id));
    }


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter
        search={search}
        onSearchChange={setSearch}
        onCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
            isInCart={isInCart.includes(item.id)}
            addToCart={() => addToCart(item.id)}
            removeFromCart={() => removeFromCart(item.id)}
            setIsInCart={setIsInCart}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

// // filter functionality
// const itemsToDisplay = items.filter((item) => {
//   if (selectedCategory === 'All') return true;

//   return item.category === selectedCategory;
// });

// // search functionality
// const showSearched = itemsToDisplay.filter((item) => {
//   return item.name.toLowerCase().includes(search.toLowerCase());
// });
// const displayItems = showSearched ? showSearched : itemsToDisplay;
