import React, {useState} from "react";

function ListingCard({
  listing: { id, image, description, location}, onDelete
}) {
  const [ favorite, setFavorite ] = useState(false);
 
  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings{id}`,{
    Method: 'DELETE',
    headers: {
      "Content-Type" : "Aplication/json"
    }
  });
  onDelete(id)
  }

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
      </div>
    </li>
  );
}

export default ListingCard;
