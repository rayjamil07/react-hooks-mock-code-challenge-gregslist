import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete, setListings }) {
  return (
    <main>
      <ul className="cards">
      {listings.map((listing) => (
        <ListingCard
        key={listing.id}
        listing={listing}
        onDelete={onDelete}
        setListings={setListings}
        />
      ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
