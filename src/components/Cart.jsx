import { useContext } from "react";
import { ApiProvider } from "../context/Api";


function Cart () {

    const contex = useContext(ApiProvider)

    const {cart} = contex

    console.log("Cart data", cart);

    return(
        <div>
            <span style={{ fontSize: 30 }}>My cart</span>
            <br />
            <span style={{ fontSize: 30 }}>Total : $ Random</span>
            <div className="homeProducts">
                {}
            </div>
        </div>
    )
}


export default Cart;