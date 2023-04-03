import SocailDetail from "./SocialDetail";
import Map from "./Map";
import React from "react";

function FooterMap() {
	return (
		<div className="footer_section layout_padding">
		<div className="container-fluid">
		   <div className="row">
			  <Map />
			  <SocailDetail />
		   </div>
		</div>
	 </div>
	)
};

export default FooterMap;