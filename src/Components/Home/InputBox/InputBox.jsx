import React, { useContext } from 'react'
import Button from '../Button/Button'
import { Store } from '../DataStore/DataStore';

const InputBox = () => {
  let dataFromStore = useContext(Store)
  
  return (
    <>
      <h1>TextUtils - Word Counter, Character Counter, Remove Extra Space</h1>
      <div className="textAreaElement">
        <label htmlFor="text">Enter Your Text Here:</label>
        <textarea
          onChange={dataFromStore.getinputDatafn}
          value={dataFromStore.inputData}
          name=""
          id=""
          cols="30"
          rows="15"
        ></textarea>
        <Button />
      </div>
    </>
  );
}

export default InputBox
