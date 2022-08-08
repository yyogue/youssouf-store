import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'


export const ApiProvider = createContext("")


function Api({ children }) {

    const url = "https://fakestoreapi.com/products";

    const [api, setApi] = useState([]);

    const [theme, setTheme] = useState(false)

    console.log(api);

    const fetch = () => {
        axios.get(url).then((res) => {
            setApi(res.data);
        });
    };

    useEffect(() => {
        fetch();
    }, []);

    const stylingComp = {
        textDecoration: "none",
        color: "black",
    };



    const [cart, setCart] = useState([])

    const itemInCartContext = (id) =>{
        const result = cart.filter((item) =>
        item.id === id
        )
        return result.length > 0 ?  true : false
    }



    return (
        <ApiProvider.Provider value={{ api, setApi, stylingComp, cart, setCart, theme, setTheme, itemInCartContext }}>
            {children}
        </ApiProvider.Provider>
    )
}

export default Api