import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [ listings,setListings ] = useState([]);
  const [ search,setSearch ] = useState([]);

   useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(response => response.json)
    .then((data) => setListings(data.listings))
  },[]);

  function DeleteListing (id) {
    const updatedItems = listings.filter((items) => items.id !== id);

     fetch(`http://localhost:6001/listings{id}`,{
      Method: 'DELETE',
      headers: {
        "Content-Type" : "Aplication/json"
      }
    })
    setListings(updatedItems)
  }

  function handleSearch () {
    const updatedSearch = listings.filter((item) => item.description.toLowerCase().include(search.toLowerCase()))
    setSearch(updatedSearch)
  }

  return (
    <div className="app">
      <Header onSearch={handleSearch}/>
    <ListingsContainer onDelete={DeleteListing}/>
    </div>
  );
}

export default App;
