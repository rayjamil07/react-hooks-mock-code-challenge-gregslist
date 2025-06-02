import React, { useState } from "react";

export function NewListingForm({ setListings }) {
  const [formData, setFormData] = useState({
    description: "",
    image: "",
    location: ""
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newListing => {
        setListings(prev => [...prev, newListing]);
        setFormData({ description: "", image: "", location: "" });
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <input
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />
      <button type="submit">Add Listing</button>
    </form>
  );
}
