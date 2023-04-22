import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Produce',
  });

  function handleChangeEvent(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onItemFormSubmit({
      id: uuid(),
      ...formData,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="NewItem">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChangeEvent}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={formData.category}
          onChange={handleChangeEvent}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
