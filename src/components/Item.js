import React, {useState} from "react";

function Item({ name, category }) {

  const[inCart,setCart] = useState(false)
  const itemClass = inCart ? "in-cart" : ""

    function handleLiClick(){
      setCart((inCart) => !inCart)
    }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleLiClick} className="add">{inCart ? "Remove From Cart" :"Add to Cart"}</button>
    </li>
  );
}

export default Item;
