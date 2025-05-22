import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  return (
    <main>
      <ul className="cards">
      {listings.map((listing) => (
        <ListingCard
        key={listings.id}
        listing={listing}
        
        />
      ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
