import React, { useState } from "react";

import logo from "../ui/logo.gif";
import { ReactComponent as BrightIcon } from '../assets/light-svgrepo-com.svg'
import { ReactComponent as BatteryIcon } from '../assets/battery-svgrepo-com.svg'
import {ReactComponent as ShielIcon } from '../assets/shield-svgrepo-com.svg'

const Sidebar = () => {
  const [nav, setNav] = useState([
    { label: "Home", icon: "icon-home", slug: "/" },
    { label: "Discover", icon: "icon-ul", slug: "discover" },
    { label: "Categories", icon: "icon-tag", slug: "/categories" },
    { label: "My  courses", icon: "icon-brief", slug: "/my-courses" },
  ]);

  const [currentPage, setCurrentPage] = useState("/");

  var navigation = [];
  for (let i = 0; i < nav.length; i++) {
    navigation.push(
      <li key={"nav" + i + "-" + nav[i].slug}>
        <a
          href={nav[i].slug}
          className={
            "link aic  noul flex c333" +
            (currentPage == nav[i].slug ? " on" : " ")
          }
        >
          <div className={"ico s20" + nav[i].icon} />
          <h2 className="lbl s20">{nav[i].label}</h2>
        </a>
      </li>
    );
  }

  return (
    <div className="sidebar fixed">
      <a href="#" className="logo bl">
        <img className="bl" src={logo} alt="logo_img" />
      </a>
      <ul className="nav">{navigation}</ul>

      <div className="updated-course flex aic">
        <BrightIcon className="icon-lamp-bright ico cff s24 svgIcon" />
        <div className="lbl s15 c333 fontb">
          Updated courses
          <h2 className="author s13 c777">by ARI</h2>
        </div>
      </div>

      <div className="stats aic jic flex">
        <div className="stats-box aic jic points flex">
          <ShielIcon className="ico ico-points s24 icon-shield svgIcon" />
          <h2 className="val s15 c333 fontb">18 000</h2>
          <h2 className="lbl s13 c777">points</h2>
        </div>
        <div className="stats-box aic jic flex">
          <BatteryIcon className="ico ico-battery s24 icon-battery-90 svgIcon" />
          <h2 className="val s15 c333 fontb">43.5%</h2>
          <h2 className="lbl s13 c777">complete</h2>
        </div>
      </div>

      <div className="me flex aic">
        <div className="photo cff s24">
          <img
            src="https://placeimg.com/100/100/people"
            alt="img"
            className="block"
          />
        </div>
        <div className="lbl s15 c333 fontb">
          Arailym Kuanishbek
          <h2 className="author s13 c777">arailym@mail.ru</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
