import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiProvider } from "../context/Api";
import { TabTitle } from "../utils/GeneralFunction";
import { BarLoader, ClipLoader } from 'react-spinners'

function Home() {

  const stylingComp = {
    textDecoration: "none",
    color: "black",
  };

  const context = useContext(ApiProvider);

  const { api, setApi, theme } = context;

  function mode() {
    const light = {
      textDecoration: "none",
      color: "black",
    };
    const dark = {
      textDecoration: "none",
      color: "white"
    };
    return theme ? light : dark;
  }

  const products = theme ? (
    <div className="homeProducts" style={mode()}>
      <title>Home</title>
      {api.map((data) => (
        <Link to={`/view/${data.id}`} style={mode()}>
          <div className="homeChild">
            <div key={data.id}>
              <p id="title">{data.title}</p>
              <img src={data.image} className="mainImage" />
              <div>
                <h3>Price: ${data.price}</h3>
                <h3>Ratings: {data.rating.rate}</h3>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <div className="homeProductsDark">
      {api.map((data) => (
        <Link to={`/view/${data.id}`} style={mode()}>
          <div className="homeChildDark">
            <div key={data.id}>
              <p id="title">{data.title}</p>
              <img src={data.image} className="mainImage" />
              <div>
                <h3>Price: ${data.price}</h3>
                <h3>Ratings: {data.rating.rate}</h3>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )



  const [loading, setLoading] = useState(false);

  const [color, setColor] = useState("#0077b6")
  
  function loaderColor () {
    return theme ? setColor("#0077b6") : setColor('#e5e5e5')
  }

  function top (){
    return loading ? <ClipLoader /> : 'Home'
  }

  TabTitle('Home')

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    loaderColor();
  }, [])

  const load = (
    <div className={theme ? '' : 'load'}  style={{ display:'flex', justifyContent:'center', alignItems: 'center', textAlign:'center', height:'80vh'}}>
      <BarLoader size={100} color={color}/>
    </div>
  )

  return (
    <>
      {
        loading ?
        load :
        products
      }
    </>
  );
}

export default Home;
