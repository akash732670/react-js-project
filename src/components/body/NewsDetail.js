import Img from "./Img";
import NewsText from "./NewsText";

function NewsDetail(prom) {
	return (
		<div className="col-sm-4">
			<div className="box_main_1">
			<div className="zoomout frame">
				<Img imgName={prom.img} altName={""} />
			</div>
			<NewsText header={prom.header}/>
			</div>
	 	</div>
	)
};

export default NewsDetail;