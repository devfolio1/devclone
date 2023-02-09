import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Buynow from "../pages/Buynow";
// import ProtectedRoute from "./Route/ProtectedRoute";
import { setCost } from "../actions/orderAction";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import myclone from "../images/myclone.png";
import janewilson from "../images/janewilson.png";
import port3 from "../images/port3.png";
import port2 from "../images/port2.png";

const Preview = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();
  console.log(props.price1);
  console.log(props.price2);
  console.log(props.price3);
  console.log(props.price4);
  const Buy = (cost) => {
    history.push("/BuyNow");
    dispatch(setCost(cost));
  };

  return (
    <>
      <section class="preview bg-white">
        <div class="container px-6 py-10 mx-auto">
          <div class="text-2xl md:text-4xl font-bold text-center">
            TEMPLATES
          </div>
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
            <div>
              <div
                class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{ backgroundImage: `url(${myclone})` }}
              >
                <div class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 lg:group-hover:opacity-100">
                  <h2 class="text-lg tracking-wider text-blue-400 text-2xl font-semibold text-white capitalize">
                    BASIC
                  </h2>

                  <a
                    href="https://myportfolio-clone.vercel.app/"
                    target="_blank"
                    className="flex items-center justify-center h-1/6 w-1/2 mx-auto mt-4 text-2xl font-semibold text-white capitalize bg-teal-600"
                  >
                    PREVIEW
                  </a>

                  <button
                    onClick={() => {
                      Buy(200);
                    }}
                    className="mt-4 text-2xl font-semibold text-white capitalize bg-teal-600 w-1/2 h-1/6 mx-auto"
                  >
                    <p className="text-center mt-2">
                      BUY NOW FOR {props.symbol}
                      {props.price1}
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => {
                    Buy(200);
                  }}
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 m-6"
                >
                  BUY NOW FOR {props.symbol}
                  {props.price1}
                </button>
                <a
                  href="https://myportfolio-clone.vercel.app/"
                  target="_blank"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 m-6"
                >
                  Preview
                </a>
              </div>
            </div>

            <div>
              <div
                class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{ backgroundImage: `url(${janewilson})` }}
              >
                <div class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  <h2 class="text-lg tracking-wider text-blue-400 text-2xl font-semibold text-white capitalize">
                    STANDARD
                  </h2>
                  <a
                    href="https://secondportfolio-seven.vercel.app/"
                    target="_blank"
                    className="flex items-center justify-center h-1/6 w-1/2 mx-auto mt-4 text-2xl font-semibold text-white capitalize bg-teal-600"
                  >
                    PREVIEW
                  </a>
                  <button
                    onClick={() => {
                      Buy(400);
                    }}
                    className="mt-4 text-2xl font-semibold text-white capitalize bg-teal-600 w-1/2 h-1/6 mx-auto"
                  >
                    <p className="text-center mt-2">
                      BUY NOW FOR {props.symbol}
                      {props.price2}
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    Buy(400);
                  }}
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 m-6"
                >
                  BUY NOW FOR {props.symbol}
                  {props.price2}
                </button>
                <a
                  href="https://secondportfolio-seven.vercel.app/"
                  target="_blank"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 m-6"
                >
                  Preview
                </a>
              </div>
            </div>

            <div>
              <div
                class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{ backgroundImage: `url(${port2})` }}
              >
                <div class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  <h2 class="text-lg tracking-wider text-blue-400 text-2xl font-semibold text-white capitalize">
                    PREMIUM
                  </h2>
                  <a
                    href="https://third-portfolio.vercel.app/"
                    target="_blank"
                    className="flex items-center justify-center h-1/6 w-1/2 mx-auto mt-4 text-2xl font-semibold text-white capitalize bg-teal-600"
                  >
                    PREVIEW
                  </a>
                  <button
                    onClick={() => {
                      Buy(600);
                    }}
                    className="mt-4 text-2xl font-semibold text-white capitalize bg-teal-600 w-1/2 h-1/6 mx-auto"
                  >
                    <p className="text-center mt-2">
                      BUY NOW FOR {props.symbol}
                      {props.price3}
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    Buy(600);
                  }}
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 m-6"
                >
                  BUY NOW FOR {props.symbol}
                  {props.price3}
                </button>
                <a
                  href="https://third-portfolio.vercel.app/"
                  target="_blank"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 m-6"
                >
                  Preview
                </a>
              </div>
            </div>

            <div>
              <div
                class="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                style={{ backgroundImage: `url(${port3})` }}
              >
                <div class="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                  <h2 class="text-lg tracking-wider text-blue-400 text-2xl font-semibold text-white capitalize">
                    GOLD
                  </h2>
                  <a
                    href="https://fourth-portfolio-ks3jw1e4y-devfolio1.vercel.app/"
                    target="_blank"
                    className="flex items-center justify-center h-1/6 w-1/2 mx-auto mt-4 text-2xl font-semibold text-white capitalize bg-teal-600"
                  >
                    PREVIEW
                  </a>

                  <button
                    onClick={() => {
                      Buy(800);
                    }}
                    className="mt-4 text-2xl font-semibold text-white capitalize bg-teal-600 w-1/2 h-1/6 mx-auto"
                  >
                    <p className="text-center mt-2">
                      BUY NOW FOR {props.symbol}
                      {props.price4}
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => {
                    Buy(800);
                  }}
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 m-6"
                >
                  BUY NOW FOR {props.symbol}
                  {props.price4}
                </button>
                <a
                  href="https://fourth-portfolio-ks3jw1e4y-devfolio1.vercel.app/"
                  target="_blank"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 m-6"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Preview;
