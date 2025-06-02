import React, {useState} from "react";
import { NewListingForm } from "./NewListingForm";

function ListingCard({ onDelete, listing, setListings }) {
  const [ favorite, setFavorite ] = useState(false);
  const { id, image, description, location} = listing;
 
  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings{id}`,{
    Method: 'DELETE',
    headers: {
      "Content-Type" : "Aplication/json"
    }
  })
    onDelete(id)
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button 
          onClick={() => setFavorite(false)}
          className="emoji-button favorite active">★</button>
        ) : (
          <button 
          onClick={() => setFavorite(true)}
          className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
        <NewListingForm
        setListings={setListings}
        />
       
      </div>
    </li>
  );
}

export default ListingCard;
