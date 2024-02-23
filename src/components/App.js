import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleRemoveItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleResetItem() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    confirmed && setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onToggleItem={handleToggleItem}
        onResetItem={handleResetItem}
      />
      <Stats items={items} />
    </div>
  );
}
