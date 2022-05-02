import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";





function Home() {

    const url = "https://fakestoreapi.com/products"

    const [api, setApi] = useState([])
    console.log(api);

    const navigate = useNavigate()


    const stylingComp = {
        textDecoration: "none",
        color: "black"
    }



    const fetch = () => {
        axios.get(url)
            .then((res) => {
                setApi(res.data)
            })
    }

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div className="homeProducts">
            {api.map(data =>
                <Link to={`/view/${data.id}`} style={stylingComp}>
                    <div key={data.id} className='homeChild'>
                        <div key={data.id}>
                            <p id="title">{data.title}</p>
                            <img src={data.image} className='mainImage' />
                            <div>
                                <h3>Price: ${data.price}</h3>
                                <h3>Ratings: {data.rating.rate}</h3>
                            </div>
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}


export default Home;

