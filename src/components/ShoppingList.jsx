import { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handlerSumbit = (e) => {
    e.preventDefault();
    if (!name || !quantity) return;
    // create a new object
    const newItem = { name, quantity: parseInt(quantity) };
    console.log(quantity);
    //update items
    setItems((preItems) => [...preItems, newItem]);
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handlerSumbit}>
        <input
          type="text"
          name="Item name"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}-Quantity :{item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
