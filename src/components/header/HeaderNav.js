import { useState } from "react";

function HeaderNav(props) {
	const [active, setActive] = useState(true);
	const openNav = () => {
		setActive(!active);
		props.onClick(active);
	}
	return (
		<div id="main">
			<span style={{fontSize:'36px', cursor:'pointer', color: '#000'}}>
				<img src="https://themewagon.github.io/Cycle/images/toggle-icon.png" style={{height: '30px'}} onClick={openNav} />
			</span>
		</div>
	)
};

export default HeaderNav;