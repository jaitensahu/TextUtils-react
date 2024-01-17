import { createContext, useState } from "react";
import React from "react";

export const Store = createContext({}); //Creating Context


// Here DataStore is a wrapper Component which content all the other Component 
const DataStore = ({ children }) => {

    let [inputData, setInpt] = useState("");
    let [WordCount, setWordCount] = useState(0);
    let [charCount, setCharCount] = useState(0);
    let [readingTime, setReadingTime] = useState(0);

    // Function to set Input Data entered by user
    function getinputDatafn(e) {
        let inputData = e.target.value;
      setInpt((prev) => inputData);
        if (inputData[inputData.length - 1] != " ") {
            setWordCount(inputData.split(" ").length);
        }
        setCharCount(inputData.split("").length);
        setReadingTime(inputData.split(" ").length/200)
    }

    // Function to Handle button click
    function handleOnClickBtn(e) {
        let changesToBeMade = e.target.value;
        if (changesToBeMade == "Convert Uppercase") {
            setInpt(inputData.toUpperCase())
        } else if (changesToBeMade == "Convert Lowercase") {
            setInpt(inputData.toLowerCase());
        } else if (changesToBeMade == "Clear Text") {
            setInpt("");
        } else if (changesToBeMade == "Copy To Clipboard") {
            navigator.clipboard.writeText(inputData);
            alert("Data Copied")
        } else {
            setInpt(inputData.replace(/\s+/g, " "));
        }
    }

  return (
    <Store.Provider
      value={{
        inputData,
        setInpt,
        getinputDatafn,
        WordCount,
        charCount,
        readingTime,
        handleOnClickBtn,
      }}
    >
      {/* children contains all the other component which are passed as props */}
      {children}
    </Store.Provider>
  );
};

export default DataStore;
