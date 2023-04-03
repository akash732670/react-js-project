import CycleImage from "./CycleImage";
import CycleText from "./CycleText";

function CycleDetail(prom) {

	return (
		<div className={(prom.checkeven == '0') ? "cycle_section_3 layout_padding" : "cycle_section_2 layout_padding" }>
			<div className="row">
				{(prom.checkeven == '1') ? <CycleImage id={prom.id} image={prom.image} /> : <CycleText headers={prom.headers} /> }
				{(prom.checkeven == '1') ? <CycleText headers={prom.headers} /> : <CycleImage id={prom.id} image={prom.image} /> }
			</div>
	 </div>
	)
}

export default CycleDetail;