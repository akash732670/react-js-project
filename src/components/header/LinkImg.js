import Img from "../body/Img";

function LinkImg(prom) {
	return (
		<a href={prom.link}>
			<Img imgName={prom.image} />
		</a>
	)
}

export default LinkImg;