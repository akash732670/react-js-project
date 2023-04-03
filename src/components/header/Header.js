import React, { useState } from "react";
import Navbar from "./Navbar";
import HeaderNav from "./HeaderNav";
import Img from "../body/Img";
import HeaderButton from "./HeaderButton";

function Header() {
  const [checkActive, setCheckActive] = useState(false);
  const getData = (data) => {
	console.log(data);
	setCheckActive(data);
  }
  return (
	<nav className="navbar navbar-expand-lg navbar-light container">
            <a href="index.html" className="logo">
				<Img imgName={"logo.png"} altName={""} />
			</a>
            <HeaderButton />
            <Navbar newClass = {checkActive ? "nav-normal" : ""}/>
            <HeaderNav onClick={getData}/>
         </nav>
  );
}

export default Header;