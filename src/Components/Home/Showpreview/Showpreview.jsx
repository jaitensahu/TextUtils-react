import React, { useContext } from "react";
import { Store } from "../DataStore/DataStore";

const Showpreview = () => {
  let dataFromStore = useContext(Store)

  return (
    <div className="Showpreview">
      <h4>Show Preview :</h4>
      <p>{dataFromStore.inputData}</p>
    </div>
  );
};

export default Showpreview;
