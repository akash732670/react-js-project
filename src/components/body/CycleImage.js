import Img from "./Img";

function CycleImage(prom) {
	return (
		<div className="col-md-6">
			<div className="box_main">
			<h6 className="number_text">0{prom.id}</h6>
			<div className="image_2">
				<Img imgName={prom.image} altName={""} />
			</div>
			</div>
		</div>
	)
};

export default CycleImage;