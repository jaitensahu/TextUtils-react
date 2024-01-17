import React, { useContext } from "react";
import { Store } from "../DataStore/DataStore";

const Button = (props) => {
  let { handleOnClickBtn } = useContext(Store);
  let btnText = [
    "Convert Uppercase",
    "Convert Lowercase",
    "Clear Text",
    "Copy To Clipboard",
    "Remove Extra Space",
  ];
  return (
    <div className="btnContainer">
      {btnText.map((ele) => {
        return (
          <button key={ele} value={ele} onClick={handleOnClickBtn}>
            {ele}
          </button>
        );
      })}
    </div>
  );
};

export default Button;
