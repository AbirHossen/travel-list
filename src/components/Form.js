import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescripton] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    // below line will prevent html from loading the whole page which is set to reload as default
    e.preventDefault();
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);

    setDescripton("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* below function will create and iterate through an array with out creating an array before hand */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        // below code will give the control of input field to react from html (controlled elements)
        onChange={(e) => setDescripton(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
