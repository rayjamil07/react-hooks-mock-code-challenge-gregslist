import React, { useState } from 'react';

export const NewListingForm = ({ setListings }) => {
    const [image,setImage] = useState([]);
    const [description,setDescription] = useState('');
    const [location,setLocation] = useState('');

    function handleSubmit(event) {
        event.preventDefault;
        const formData = { image, description, location };

    fetch(`http://localhost:6001/listings`,{
        Method: 'POST',
        headers: {
        "Content-Type" : "Aplication/json"
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then((newListing) => setListings(newListing))
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='location'>Location :</label>
            <input
            type='text'
            id='location'
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            />
            <label htmlFor='image'>Image :</label>
            <input
            type='text'
            id='image'
            value={image}
            onChange={(event) => setImage(event.target.value)}
            />
            <label htmlFor='Description'>Description :</label>
            <input
            type='text'
            id='description'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            />
        </form>
    </div>
  )
}
