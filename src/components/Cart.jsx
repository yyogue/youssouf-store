import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
import { ApiProvider } from "../context/Api";
import { decrement, reset } from "../redux/counter/counterSlice";


function Cart() {

    const contex = useContext(ApiProvider)

    const { cart, setCart } = contex

    const [total, setTotal] = useState()

    const dispatch = useDispatch()


    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    } , [cart])



    const handleRemove = (id) => {
        // setShow(true)
        dispatch(decrement())
        setCart((cart) => cart.filter(item => item.id !== id))
    }

    console.log("Cart data from cart", cart.length);

    const cartProduct =
        <div className="homeProducts">
            {cart.map(data =>
                <div key={data.id} className="homeChild">
                    <div key={data.id}>
                        <p id="title">{data.title}</p>
                        <img src={data.image} alt="" className="mainImage" />
                    </div>
                    <h3>Price : ${data.price}</h3>
                    <button onClick={() => handleRemove(data.id)}>Remove</button>
                </div>
            )}
        </div>

    const empty =
        <div className="cartEmp">
            <h1>The cart is empty</h1>
        </div>

        const isEmpty = () => {
            dispatch(reset())
            return empty
        }

    return (
        <div>
            <span style={{ fontSize: 30 }}>Total : $ {total}</span>
            {cart <=0 ? 
            isEmpty()
            : 
            cartProduct
            }
        </div>
    )
}


export default Cart;