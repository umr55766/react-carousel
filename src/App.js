import {useEffect, useState} from "react";

import './App.css';
import {getProductsData} from "./api/products";

function App() {
  const [products, setProducts] = useState(getProductsData());
  const [focusProductIndex, setFocusProductIndex] = useState(1);
  const [previousFocusProductIndex, setPreviousFocusProductIndex] = useState(0);
  const [nextfocusProductIndex, setNextFocusProductIndex] = useState(2);

  useEffect(() => {
    setPreviousFocusProductIndex((focusProductIndex-1)%products.length);
    setNextFocusProductIndex((focusProductIndex+1)%products.length);
  });

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setFocusProductIndex((focusProductIndex-1)%products.length)}>Previous</button>

        <div style={{"border": "1px solid #eee", "margin": "10px", "padding": "10px", "border-radius": "5px", "display": "flex", "flex-direction": "column"}}>
          <label style={{"text-align": "left"}}>{products[focusProductIndex].category}</label>
          <img src={products[focusProductIndex].image}/>
          <label>{products[focusProductIndex].title.length > 10 ? products[focusProductIndex].title.substr(0, 18)+"..." : products[focusProductIndex].title}</label>
          <label style={{"text-align": "left"}}>{products[focusProductIndex].price}</label>
        </div>

        <div style={{"border": "1px solid #eee", "margin": "10px", "padding": "10px", "border-radius": "5px", "display": "flex", "flex-direction": "column"}}>
          <label style={{"text-align": "left"}}>{products[previousFocusProductIndex].category}</label>
          <img src={products[previousFocusProductIndex].image}/>
          <label>{products[previousFocusProductIndex].title.length > 10 ? products[previousFocusProductIndex].title.substr(0, 18)+"..." : products[previousFocusProductIndex].title}</label>
          <label style={{"text-align": "left"}}>{products[previousFocusProductIndex].price}</label>
        </div>

        <div style={{"border": "1px solid #eee", "margin": "10px", "padding": "10px", "border-radius": "5px", "display": "flex", "flex-direction": "column"}}>
          <label style={{"text-align": "left"}}>{products[nextfocusProductIndex].category}</label>
          <img src={products[nextfocusProductIndex].image}/>
          <label>{products[nextfocusProductIndex].title.length > 10 ? products[nextfocusProductIndex].title.substr(0, 18)+"..." : products[nextfocusProductIndex].title}</label>
          <label style={{"text-align": "left"}}>{products[nextfocusProductIndex].price}</label>
        </div>

        <button onClick={() => setFocusProductIndex((focusProductIndex+1)%products.length)}>Next</button>
      </header>
    </div>
  );
}

export default App;
