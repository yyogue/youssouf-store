import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
import { ApiProvider } from "../context/Api";
import { decrement, reset } from "../redux/counter/counterSlice";

function Cart() {
  const context = useContext(ApiProvider);

  const { cart, setCart, theme } = context;

  const [total, setTotal] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  const handleRemove = (id) => {
    // setShow(true)
    dispatch(decrement());
    setCart((cart) => cart.filter((item) => item.id !== id));
  };

  console.log("Cart data from cart", cart.length);

  const cartProduct = theme ? (
    <div className="homeProducts">
      {cart.map((data) => (
        <div key={data.id} className="homeChild">
          <div key={data.id}>
            <p id="title">{data.title}</p>
            <img src={data.image} alt="" className="mainImage" />
          </div>
          <h3>Price : ${data.price}</h3>
          <button onClick={() => handleRemove(data.id)}>Remove</button>
        </div>
      ))}
    </div>
  ) : (
    <div className="homeProductsDark">
      {cart.map((data) => (
        <div key={data.id} className="homeChildDark">
          <div key={data.id}>
            <p id="title">{data.title}</p>
            <img src={data.image} alt="" className="mainImage" />
          </div>
          <h3>Price : ${data.price}</h3>
          <button onClick={() => handleRemove(data.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
  const cartLessThanFour = theme ? (
    <div className="lessFour">
      {cart.map((data) => (
        <div key={data.id} className="homeChild">
          <div key={data.id}>
            <p id="title">{data.title}</p>
            <img src={data.image} alt="" className="mainImage" />
          </div>
          <h3>Price : ${data.price}</h3>
          <button onClick={() => handleRemove(data.id)}>Remove</button>
        </div>
      ))}
    </div>
  ) : (
    <div className="lessFourDark">
      {cart.map((data) => (
        <div key={data.id} className="homeChildDark">
          <div key={data.id}>
            <p id="title">{data.title}</p>
            <img src={data.image} alt="" className="mainImage" />
          </div>
          <h3>Price : ${data.price}</h3>
          <button onClick={() => handleRemove(data.id)}>Remove</button>
        </div>
      ))}
    </div>
  );


  const empty = theme ? (
    <div className="cartEmp">
      <h1>The cart is empty</h1>
    </div>
  ) : (
    <div className="cartEmpDark">
      <h1>The cart is empty</h1>
    </div>
  );

  const isEmpty = () => {
    dispatch(reset());
    return empty;
  };


  function lessThanFour () {
    return  cart <= 4 ? cartLessThanFour : cartProduct
  }

  function cartItem () {
    return cart <= 0 ? isEmpty() : lessThanFour()
  }

  return (
    <div className={theme ? "return" : "darkReturn"}>
      <span style={{ fontSize: 30 }}>Total : $ {total}</span>
      {cart <= 0 ? isEmpty() : cartProduct }
    </div>
  );
}

export default Cart;
