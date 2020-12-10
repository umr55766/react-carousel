import {useEffect, useState} from "react";

import './App.css';
import {getProductsData} from "./api/products";
import ProductCard from "./components/CarouselCard";

function App() {
  const [products, setProducts] = useState(getProductsData());
  const [focusProductIndex, setFocusProductIndex] = useState(1);
  const [previousFocusProductIndex, setPreviousFocusProductIndex] = useState(0);
  const [nextfocusProductIndex, setNextFocusProductIndex] = useState(2);

  const gotoNextProduct = (oldValue) => {
    if (focusProductIndex == products.length-1) {
      setFocusProductIndex(0);
    } else {
      setFocusProductIndex(oldValue+1);
    }
  };

  const gotoPreviousProduct = (oldValue) => {
    if (focusProductIndex == 0) {
      setFocusProductIndex(products.length-1);
    } else {
      setFocusProductIndex(oldValue-1);
    }
  };

  useEffect(() => {
    if (focusProductIndex == 0) {
      setPreviousFocusProductIndex(products.length-1);
    } else {
      setPreviousFocusProductIndex((focusProductIndex-1)%products.length);
    }

    if (focusProductIndex == products.length-1) {
      setNextFocusProductIndex(0);
    } else {
      setNextFocusProductIndex((focusProductIndex + 1) % products.length);
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://www.jiomart.com/assets/version1605113383/smartweb/images/icons/left_arrow.svg"} onClick={() => gotoPreviousProduct(focusProductIndex)} />

        <ProductCard product={products[previousFocusProductIndex]}/>
        <ProductCard product={products[focusProductIndex]} primary/>
        <ProductCard product={products[nextfocusProductIndex]}/>

        <img src={"https://www.jiomart.com/assets/version1605113383/smartweb/images/icons/right_arrow.svg"} onClick={() => gotoNextProduct(focusProductIndex)} />
      </header>
    </div>
  );
}

export default App;
