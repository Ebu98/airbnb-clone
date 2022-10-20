import React from "react";
import Search from "../Input/search";
import './Topnav.scss'

const Topnav = () => {
  return (
      <section className="nav-wapper">
    <div className="nav-content">
      <div className="logo-container">airbnb</div>
      <div className="button-container">
          <Search/>
        <div>
          <div>Become a Host</div>
          <div></div>
          <div>
            <i className="fa-sharp fa-solid fa-globe"></i>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};
export default Topnav;