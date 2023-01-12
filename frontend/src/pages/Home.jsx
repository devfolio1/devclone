import React, { Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Loading from "../components/Layouts/Loading";
import Navbar from "../components/Navbar";
import Preview from "../components/Preview";

import { useEffect, useState } from 'react';
import Steps from "../components/Steps";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.user);
  

  const [country, setCountry] = useState("");
  const [symbol, setSymbol] = useState("")
  const [price1, setPrice1] = useState(0)
  const [price2, setPrice2] = useState(0)
  const [price3, setPrice3] = useState(0)
  const [price4, setPrice4] = useState(0)

 useEffect(()=>{
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      var api_key = "ed077ae8730d4930b183f04a368b9110";
      var url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${api_key}`;
      fetch(url)
      .then(response => response.json())
      .then(data => {
          let userCountry = data.results[0].country;
          setCountry(userCountry);
          //adjustPricing(userCountry);
          console.log(country)
          adjustPricing(country)
      })
      .catch(error => {
        console.log("Error: " + error);
      });
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }


 }, []);
     
  function adjustPricing(country) {
    
    switch (country) {
      case "United States":
        // apply pricing for United States
        setSymbol("$")
        setPrice1("$100")
       
        break;
      case "United Kingdom":
        // apply pricing for United Kingdom
        setPrice1("£80")
        setSymbol("£")
        break;
      case "France":
        // apply pricing for France
        setPrice1("€90") 
        setSymbol("€")
     
        break;
      default:
        // apply default pricing for other countries

        setSymbol("₹")
        setPrice1(200)
        setPrice2(400) 
        setPrice3(600) 
        setPrice4(800)  
       
    }       
   
}


  
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <>
       
          <Navbar />
          <Hero />
          <Features />
          <Preview price1={price1} price2={price2} price3={price3} price4={price4} symbol={symbol}/>
          <Footer />
        </>
      )}
    </Fragment>
  );
};

export default Home;
