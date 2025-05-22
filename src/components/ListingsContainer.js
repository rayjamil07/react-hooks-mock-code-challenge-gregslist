import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ onDelete }) {
  return (
    <main>
      <ul className="cards">
        <ListingCard onDelete={deleteItem}/>
      </ul>
    </main>
  );
}

export default ListingsContainer;
