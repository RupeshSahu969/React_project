import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import AddCart from "./Components/AddCart";

function App() {
  const product = [
    {
      price: 99999,
      name: "IPhoneX",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi",
      quantity: 2,
    },
    {
      price: 7000,
      name: "Vivo",
      quantity: 1,
    },
    {
      price: 12000,
      name: "Sumsung",
      quantity: 5,
    },
  ];

  const [productList, setproductList] = useState(product);
  const [totalAmount, setTotalAmount] = useState(0);

  const incremetQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setproductList(newProductList);
  };

  const decremetQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setproductList(newProductList);
  };

  const reset = () => {
    let newProductList = [...productList];

    newProductList.map((products) => {
      products.quantity = 0;
    });
    setproductList(newProductList);
    setTotalAmount(0);
  };

  const remove = (index) => {
    let newProductList = [...productList]
    let newTotalAmount = totalAmount
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price
    newProductList.splice(index);
    setproductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

const addItem=(name,price)=>{
  let newProductList = [...productList];
newProductList.push({
  name:name,
  price:price,
  quantity:0
})

setproductList(newProductList);

}

  return (
    <>
      <Navbar />
      <AddCart addItem={addItem}/>
      <main className="container mt-5">
        <ProductList
          productList={productList}
          incremetQuantity={incremetQuantity}
          decremetQuantity={decremetQuantity}
        remove={remove}
      />
      </main>

      <Footer totalAmount={totalAmount} reset={reset} />
    </>
  );
}

export default App;
