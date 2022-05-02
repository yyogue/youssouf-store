import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function View() {

    const navigate = useNavigate()

    const params = useParams();

    const id = params.id

    const [api, setApi] = useState([])

    const [showGtc, setShowGtc] = useState(true)
    const [showAdd, setShowAdd] = useState(false)


    const fetchData = () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                setApi(res.data)
            })
    }

    const handleCartButtons = () => {
        setShowGtc(false)
        setShowAdd(true)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
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
                    <button hidden={showAdd} onClick={() => handleCartButtons()}>add to cart</button>
                    <button hidden={showGtc} onClick={() => navigate('/cart')}>Go to cart</button>
                    <p>Category: {api.category}</p>
                    <h3>Price: ${api.price}</h3>
                </div>
            </div>
            <div>
                <h1 id="descId">Description: </h1><p id="descDetail">{api.description}</p>
            </div>
        </div>
    )
}


export default View;