import React from "react";
import "./Home.css";
import Showpreview from "./Showpreview/Showpreview";
import Summary from "./Summary/Summary";
import DataStore from "./DataStore/DataStore";
import InputBox from "./InputBox/InputBox";

const Home = () => {
  return (
    <DataStore>
      <div className="HomeContainer">
        <div className="subContainer">
          <InputBox />
          <Summary />
          <Showpreview />
        </div>
      </div>
    </DataStore>
  );
};

export default Home;
