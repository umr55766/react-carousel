import {useEffect, useState} from "react";

import './App.css';
import {getProductsData} from "./api/products";
import ProductCard from "./components/CarouselCard";

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

        <ProductCard product={products[previousFocusProductIndex]}/>
        <ProductCard product={products[focusProductIndex]} primary/>
        <ProductCard product={products[nextfocusProductIndex]}/>

        <button onClick={() => setFocusProductIndex((focusProductIndex+1)%products.length)}>Next</button>
      </header>
    </div>
  );
}

export default App;
