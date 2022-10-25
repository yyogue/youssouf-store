import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiProvider } from "../context/Api";

function Home() {
  
  const stylingComp = {
    textDecoration: "none",
    color: "black",
  };
  
  const context = useContext(ApiProvider);
  
  const { api, setApi, theme } = context;
  
  function mode () {
    const light = {
      textDecoration: "none",
      color: "black",
    };
    const dark = {
      textDecoration: "none",
      color: "white"
    };
    return theme? light : dark;
  }


  return (
    <>
      {theme ? (
        <div className="homeProducts" style={mode()}>
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
      )}
    </>
  );
}

export default Home;
