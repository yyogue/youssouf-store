import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ApiProvider } from "../context/Api";
import { decrement, increment } from "../redux/counter/counterSlice";
import { TabTitle } from "../utils/GeneralFunction";
import { BeatLoader, ClipLoader } from 'react-spinners'

function View() {
  const count = useSelector((state) => state.counter.count);

  const context = useContext(ApiProvider);

  const { cart, setCart, itemInCartContext, theme } = context;

  const navigate = useNavigate();

  const params = useParams();

  const id = params.id;

  const [api, setApi] = useState([]);

  const [itemInCart, setItemIncart] = useState(itemInCartContext(id));

  TabTitle(`${api.title}`)

  const dispatch = useDispatch();

  console.log("Imtem in cart", itemInCart);

  console.log("count", count);

  const fetchData = () => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      setApi(res.data);
    });
  };

  const handleAdd = () => {
    // setShow(false)
    setItemIncart(true);
    setCart([...cart, api]);
    dispatch(increment());
    toast.success(`${api.title} has been added to the cart`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleRemove = () => {
    // setShow(true)
    setItemIncart(false);
    setCart(cart.filter((c) => c.id !== api.id));
    dispatch(decrement());
    toast.warn(`${api.title} has been removed in the cart`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    fetchData();
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [id]);

  const [loading, setLoading] = useState(false);

  const [color, setColor] = useState('red')

  const load = (
    <div style={{ display:'flex', justifyContent:'center', alignItems: 'center', textAlign:'center', height:'80vh'}}>
      <BeatLoader size={20} color={color}/>
    </div>
  )

  const singleProduct = theme ? (
    <div className="viewCont">
      <div className="topView">
        <h1>{api.title}</h1>
        <div>
          <p id="cross" onClick={() => navigate("/home")}>
            ❌
          </p>
        </div>
      </div>
      <div className="mainView">
        <img src={api.image} alt="" id="imgView" />
        <div className="addView">
          {itemInCart ? (
            <button onClick={handleRemove} >Remove</button>
          ) : (
            <button onClick={handleAdd}>Add to cart</button>
          )}
          <p>Category: {api.category}</p>
          <h3>Price: ${api.price}</h3>
        </div>
      </div>
      <div>
        <h1 id="descId">Description: </h1>
        <p id="descDetail">{api.description}</p>
      </div>
    </div>
  ) : (
    <div className="viewContDark">
      <div className="topViewDark">
        <h1>{api.title}</h1>
        <div>
          <p id="cross" onClick={() => navigate("/home")}>
            ❌
          </p>
        </div>
      </div>
      <div className="mainView">
        <img src={api.image} alt="" id="imgView" />
        <div className="addView">
          {itemInCart ? (
            <button onClick={handleRemove}>Remove</button>
          ) : (
            <button onClick={handleAdd}>Add to cart</button>
          )}
          <p>Category: {api.category}</p>
          <h3>Price: ${api.price}</h3>
        </div>
      </div>
      <div>
        <h1 id="descId">Description: </h1>
        <p id="descDetail">{api.description}</p>
      </div>
    </div>
  );

  return (
    <>
    {
      loading ?
      load :
      singleProduct
    }
    </>
  )
}

export default View;
