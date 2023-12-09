import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function handleAddCart () {
    setInCart(!inCart)
  }

  const toggleLiCartClass = inCart ? "in-cart" : ''
  const toggleBtnCartClass = inCart ? 'remove' : 'add'
  const toggleBtnText = inCart ? "Remove from Cart" : "Add to Cart"

  return (
    <li className={toggleLiCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={toggleBtnCartClass} onClick={handleAddCart}>{toggleBtnText}</button>
    </li>
  );
}

export default Item;
