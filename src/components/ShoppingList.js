import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  // useState for filtering by category
  const[selectedCategory, setCategory]= useState("All")

  // filter method to determine what is selected, this itemtodisplay is what will be mapped 
  const itemToDisplay = items.filter((item)=> {
    if(selectedCategory == "All"){
    return true
  }else {
    return item.category === selectedCategory
  }
})

  // function to handle the change
  function handleChange(event){
      setCategory(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
