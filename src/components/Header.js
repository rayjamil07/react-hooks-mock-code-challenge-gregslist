import React from "react";
import Search from "./Search";

function Header({ onSearch, setSortBy }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch}/>
       <button onClick={() => setSortBy('id')}>Sort By id</button> 
       <button onClick={() => setSortBy('location')}>Sort By Location</button>
    </header>
  );
}

export default Header;
