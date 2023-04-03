import AboutText from "./AboutText";
import Img from "./Img";
import LinkBtn from "./LinkBtn";

function About() {
	return (
		<div className="about_section layout_padding">
		<div className="container">
		   <AboutText />
		   <div className="about_main">
			<Img imgName={"img-5.png"} altName={""} class={"image_5"} />
		   </div>
		   <LinkBtn class={"read_bt_1"} link={"#"} text={"Read More"}/>
		</div>
	 </div>
	)
};

export default About;