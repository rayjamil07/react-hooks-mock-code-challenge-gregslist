import React from 'react';

export const NewListingForm = ({ setListings }) => {

    function handleSubmit(event) {
        event.preventDefault;
    }

    const formData = { image, description, location };

    function handleNewListing() {
     fetch(`http://localhost:6001/listings{id}`,{
        Method: 'DELETE',
        headers: {
        "Content-Type" : "Aplication/json"
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then( setListings(formData))
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>

        </form>
    </div>
  )
}
