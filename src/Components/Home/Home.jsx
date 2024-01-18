import React from "react";
import "./Home.css";
import Showpreview from "./Showpreview/Showpreview";
import Summary from "./Summary/Summary";
import DataStore from "./DataStore/DataStore";
import InputBox from "./InputBox/InputBox";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <>
      <ToastContainer />
      <DataStore>
        <div className="HomeContainer">
          <div className="subContainer">
            <InputBox />
            <Summary />
            <Showpreview />
          </div>
        </div>
      </DataStore>
    </>
  );
};

export default Home;
