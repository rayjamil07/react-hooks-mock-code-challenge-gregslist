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
    setListings(updatedItems)
  }

    const updatedListings = listings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase()));
  

  return (
    <div className="app">
      <Header onSearch={setSearch}/>
    <ListingsContainer 
    onDelete={DeleteListing}
    listings={updatedListings}
    />
    </div>
  );
}

export default App;
