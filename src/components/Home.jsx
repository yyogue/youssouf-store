import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiProvider } from "../context/Api";





function Home() {

    const context = useContext(ApiProvider)

    const { api, setApi } = context

    const { stylingComp } = context

    // console.log(api);

    
    return (
        <div className="homeProducts">
            {api.map(data =>
                <Link to={`/view/${data.id}`} style={stylingComp}>
                    <div  className='homeChild'>
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

