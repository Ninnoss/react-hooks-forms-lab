import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import Header from './Header';
import itemData from '../data/items';

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // add item functionality
  function handleItemFormSubmit(element) {
    setItems([...items, element]);
  }

  return (
    <div className={'App ' + (isDarkMode ? 'dark' : 'light')}>
      <Header
        isDarkMode={isDarkMode}
        onDarkModeClick={handleDarkModeClick}
      />
      <ShoppingList
        items={items}
        onItemFormSubmit={handleItemFormSubmit}
      />
    </div>
  );
}

export default App;
