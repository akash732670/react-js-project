import LinkImg from "../header/LinkImg";
import RepeatFooter from "./RepeatFooter";

function SocailDetail() {

	const FOOTERSOCIAL = [
		{
			id: 1,
			img: "map-icon.png",
			text: "Page when looking at its layou"
		},
		{
			id: 2,
			img: "call-icon.png",
			text: "Call Now +01 123467890"
		},
		{
			id: 3,
			img: "map-icon.png",
			text: "demo@gmail.com"
		}
	];

	const SOCIALLINK = [
		{
			id: 1,
			icon: "fb-icon1.png",
			link: "#"
		},
		{
			id: 2,
			icon: "twitter-icon.png",
			link: "#"
		},
		{
			id: 3,
			icon: "linkedin-icon.png",
			link: "#"
		},
		{
			id: 4,
			icon: "instagram-icon.png",
			link: "#"
		}
	]

	return (
		<div className="col-lg-4 col-sm-12">
			{FOOTERSOCIAL.map((data, index1) => (
				<RepeatFooter key={index1} img={data.img} text={data.text} />
			))}
			<div className="social_icon">
				<ul>
				{SOCIALLINK.map((data, index) => (
					<li>
						<LinkImg key={index} image={data.icon} link={data.link} />
					</li>
				))}
				</ul>
			</div>
			<input type="text" className="email_text" placeholder="Enter Your Email" name="Enter Your Email" />
			<div className="subscribe_bt"><a href="#">Subscribe</a></div>
		</div>
	)
}

export default SocailDetail;