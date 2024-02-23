export default function Stats({ items }) {
  // this is derived state where technically its just a normal variable but its value relies on other state
  const totalItems = items.length;

  if (!totalItems) {
    return (
      <footer className="stats">
        <em>🚌 Start the adventure, list down all your needs! 📝</em>
      </footer>
    );
  }

  const packedItems = items.filter((item) => item.packed).length;
  const packedItemsPercentage = totalItems
    ? Math.round((packedItems / totalItems) * 100)
    : 0;

  return (
    <footer className="stats">
      <em>
        {packedItemsPercentage === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${totalItems} ${
              totalItems > 1 ? "items" : "item"
            } on your
        list, and you already packed ${packedItems} ${
              packedItems > 1 ? "items" : "item"
            } (${packedItemsPercentage}%) of it.
        😎`}
      </em>
    </footer>
  );
}
