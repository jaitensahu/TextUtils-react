import { createContext, useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

export const Store = createContext({}); //Creating Context


// Here DataStore is a wrapper Component which content all the other Component 
const DataStore = ({ children }) => {
  let [inputData, setInpt] = useState("");
  let [WordCount, setWordCount] = useState(0);
  let [charCount, setCharCount] = useState(0);
  let [readingTime, setReadingTime] = useState(0);

  // Function to set WordCount, charCount, readingTime
  function getinputDatafn(e) {
    let inputData = e.target.value;
    setInpt((prev) => inputData);
    if (inputData[inputData.length - 1] != " ") {
      setWordCount(inputData.replace(/\s+/g, " ").split(" ").length);
    }
    setCharCount(inputData.split("").length);
    setReadingTime(inputData.split(" ").length / 200);
  }

  // Function to Handle button click
  function handleOnClickBtn(e) {
    let changesToBeMade = e.target.value;
    if (changesToBeMade == "Convert Uppercase") {
      setInpt(inputData.toUpperCase());
      toast.success("Converted To UpperCase", {
        position: "top-center",
      });
    } else if (changesToBeMade == "Convert Lowercase") {
      setInpt(inputData.toLowerCase());
       toast.success("Converted To LowerCase", {
         position: "top-center",
       });
    } else if (changesToBeMade == "Clear Text") {
      setInpt("");
      toast.error("Cleared Text", {
        position: "top-center",
        theme: "colored",
      });
    } else if (changesToBeMade == "Copy To Clipboard") {
      navigator.clipboard.writeText(inputData);
      toast.info("Text Copied", {
        position: "top-center",
        theme: "colored",
      });
    } else {
      let extraSpaceFree = inputData.replace(/\s+/g, " ");
      setCharCount(extraSpaceFree.split("").length);
      setInpt(extraSpaceFree);
     toast.success("Removed Extra Space", {
       position: "top-center",
       theme: "colored",
     });
    }
  }
  const notify = () => {
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: "top-center",
    });
  };

  return (
    <>
      <ToastContainer />

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
    </>
  );
};

export default DataStore;
