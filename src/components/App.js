import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
   const [ data,setData ] = useState([]);

   useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(response => response.json)
    .then(data => setData(data.listings))
  },[]);

  function DeleteItem (id) {
    const updatedItems = data.filter(data => data.id !== id);

     fetch(`http://localhost:6001/listings{id}`,{
      Method: 'DELETE',
      headers: {
        "Content-Type" : "Aplication/json"
      }
    })
    setData(updatedItems)
  }

  return (
    <div className="app">
      <Header />
    <ListingsContainer onDelete={DeleteItem} data={data} setData={setData}/>
    </div>
  );
}

export default App;
