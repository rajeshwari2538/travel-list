import { useState } from "react";
import Items from "./Items";

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearItem }) {
    const [sortBy, setSortBy] = useState('input');
  
    let sortedItems;
  
    if(sortBy === 'input') sortedItems = items;
  
    if(sortBy === 'description') sortedItems = items.slice().sort((a,b) => a.description.localeCompare(b.description));
  
    if(sortBy === 'packed') sortedItems = items.slice().sort((a,b) => (+a.packed) - (+b.packed));
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Items
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort By input order</option>
            <option value="description">Sort By description</option>
            <option value="packed">Sort By packed status</option>
          </select>
          <button onClick={onClearItem}>Clear List</button>
        </div>
      </div>
    );
  }