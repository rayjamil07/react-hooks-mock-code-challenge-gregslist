import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { NewListingForm } from "./NewListingForm";
// import ListingCard from "./ListingCard";

function App() {
  const [ listings,setListings ] = useState([]);
  const [ search,setSearch ] = useState('');
  const [ sortBy,setSortBy ] = useState()

   useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(response => response.json())
    .then((data) => setListings(data))
  },[]);

  function DeleteListing (id) {
    const updatedItems = listings.filter((items) => items.id !== id);
    setListings(updatedItems)
  }

    const updatedListings = listings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase())).sort((listingA,listingB) => {
      if(sortBy === 'id'){
        return listingA.id - listingB.id;
      } else {
        return listingA.location.localeCompare(listingB.location)
      }
    });
  

  return (
    <div className="app">
      <Header onSearch={setSearch}
      setSortBy={setSortBy}/>
    <ListingsContainer 
    onDelete={DeleteListing}
    listings={updatedListings}
    setListings={setListings}
    />
    </div>
  );
}

export default App;
