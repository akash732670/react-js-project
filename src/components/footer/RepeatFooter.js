import Img from "../body/Img";

function RepeatFooter(prom) {
	return (
		<div className="call_text">
			<a href="#">
				<Img imgName={prom.img} /><span className="padding_left_0">{prom.text}</span>
			</a>
		</div>
	)
}

export default RepeatFooter;