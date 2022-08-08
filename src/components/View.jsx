import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ApiProvider } from "../context/Api";
import { decrement, increment } from "../redux/counter/counterSlice";


function View() {

    const count = useSelector((state) => state.counter.count)

    const context = useContext(ApiProvider);

    const { cart, setCart, itemInCartContext } = context;

    const navigate = useNavigate()

    const params = useParams();

    const id = params.id

    const [api, setApi] = useState([])

    const [itemInCart, setItemIncart] = useState(itemInCartContext(id))

    const dispatch = useDispatch()

    console.log("Imtem in cart", itemInCart);

    console.log("count",count);

    const fetchData = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setApi(res.data)
            })
    }


    const handleAdd = () => {
        // setShow(false)
        setItemIncart(true)
        setCart([...cart, api])
        dispatch(increment())
    }

    const handleRemove = () => {
        // setShow(true)
        setItemIncart(false)
        setCart(cart.filter(c => c.id !== api.id))
        dispatch(decrement())
    }

    useEffect(() => {
        fetchData()
    }, [id])




    // console.log("Cart", cart);
    // console.log("Api View", api);
    // console.log("Cart Includes", cart.includes(api));


    const singleProduct =
        <div className="viewCont">
            <div className="topView">
                <h1>{api.title}</h1>
                <div>
                    <p id="cross" onClick={() => navigate('/home')}>❌</p>
                </div>
            </div>
            <div className="mainView">
                <img src={api.image} alt="" id="imgView" />
                <div className="addView">
                    {itemInCart ? <button onClick={handleRemove}>Remove</button> : <button onClick={handleAdd}>Add to cart</button>}
                    <p>Category: {api.category}</p>
                    <h3>Price: ${api.price}</h3>
                </div>
            </div>
            <div>
                <h1 id="descId">Description: </h1><p id="descDetail">{api.description}</p>
            </div>
        </div>


    return (
        <div>
            {singleProduct}
        </div>
    )
}


export default View;