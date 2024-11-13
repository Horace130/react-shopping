import React, { useState } from 'react';

// Test data - Do not modify
const items = [
  { id: 1, name: "T-shirt", price: 20, onSale: true },
  { id: 2, name: "Jeans", price: 50, onSale: false },
  { id: 3, name: "Socks", price: 5, onSale: true },
  { id: 4, name: "Hat", price: 15, onSale: false },
  { id: 5, name: "Shoes", price: 65, onSale: true }
];

function App() {

  const [showSaleOnly, setShowSaleOnly] = useState(false);

  const button = () => {
    if (showSaleOnly === true) {
      setShowSaleOnly(false);
    } else {
      setShowSaleOnly(true);
    }
  };

  const filteredItems = showSaleOnly
    ? items.filter(item => item.onSale)
    : items;

  return (
    <div>   
        <div className="container">
      <h1>Shopping Cart</h1>
      <button className="btn btn-primary" onClick={button}>
        {showSaleOnly ? 'Show All Items' : 'Show Sale Items Only'}
      </button>
 
        <div
          className="card rounded my-4"
          style={{
            Width: "100%"
          }}
        >
      <ul className="list-group">
        {filteredItems.map(item => (
         
          <ol key={item.id} className="list-group-item  ms-1 list-group-item d-flex justify-content-between align-items-center"
    > <div>
            <span>{item.name} </span>
            {item.onSale && <span className="bg-danger rounded text-white m-2 p-1">On sale</span>}
    </div>
    <div>
            <span className="ms-3" >${item.price}</span>
            </div>
          </ol>
        ))}
      </ul>
    </div>
    </div>
    </div>
  );
}

export default App;
