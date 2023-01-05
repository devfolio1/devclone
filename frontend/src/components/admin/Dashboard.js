import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
// import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
// import { Doughnut, Line } from "react-chartjs-2";

import { useSelector, useDispatch } from "react-redux";
// import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction";
import { getAllUsers } from "../../actions/userAction.js";


const Dashboard = () => {
  const dispatch = useDispatch();
//   Chart.register(Filler);

//   const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);


  

  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        
      },
    ],
  };

  return (
    <div className="dashboard  mx-auto flex">
   
      <Sidebar />

      {/* <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Total Amount <br /> ₹{totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>

        
      </div> */}

      <section class="h-2/3 m-auto p-6 bg-white rounded-md shadow-md ">
                <h1 class="text-3xl font-semibold tracking-wide text-gray-800  lg:text-4xl">
                  All Details
                </h1>
               
                <div className="grid grid-cols-1 mt-10 p-10">
                  <div className="flex gap-4 mx-auto">
                    <label class="text-gray-700 font-bold ">Total Amount :</label>
                    <p>₹{totalAmount}</p>
                  </div>
                  <div className="flex gap-4 mx-auto">
                    <label class="text-gray-700 font-bold ">Orders:</label>
                    <p>{orders && orders.length}</p>
                  </div>
                  <div className="flex gap-4 mx-auto">
                    <label class="text-gray-700 font-bold ">Users:</label>
                    <p>{users && users.length}</p>
                  </div>
               
                  
                </div>
              </section>
    </div>
  );
};

export default Dashboard;