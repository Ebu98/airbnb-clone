import React from "react";
import Search from "../Input/search";
import user from "../../assets/image/user-profile.png";
import Menu from "../../assets/image/menu.png";
import World from "../../assets/image/icon-world.png";
import "./Topnav.scss";

const Topnav = () => {
  return (
    <section className="nav-wapper">
      <div className="nav-content">
        <div className="logo-container">airbnb</div>
        <div className="button-container">
          <Search />
          <div>
            <div className="right-content">
              <div className="text-host">Become a Host</div>
              <div className="world-icon">
              <img src={World} alt=""/>
              </div>
              <div className="profile-image">
                {" "}
                <img src={Menu} alt="" /> <div className="image"><img src={user} alt="" /></div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Topnav;
