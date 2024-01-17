import React, { useContext } from 'react'
import { Store } from '../DataStore/DataStore';

const Summary = () => {
  let dataFromStore = useContext(Store);
    return (
      <div>
        <h1>Summary Of Your Text</h1>
        <p>Number Of Words: {dataFromStore.WordCount}</p>
        <p>Number of characters : {dataFromStore.charCount} </p>
        <p>Reading Time: {dataFromStore.readingTime}</p>
      </div>
    );
}

export default Summary
