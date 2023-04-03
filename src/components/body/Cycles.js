import CycleDetail from "./CycleDetial";
import CommonTexts from "./CommonTexts";
import LinkBtn from "./LinkBtn";

function Cycles() {
	const CYCLES_DATA = [
		{
			id: 1,
			headers: "Cycles",
			image: "img-2.png"
		},
		{
			id: 2,
			headers: "Stylis Cycle",
			image: "img-3.png"
		},
		{
			id: 3,
			headers: "Mordern Cycle",
			image: "img-4.png"
		},
	]
	return (
		<div className="cycle_section layout_padding">
		<div className="container">
		<CommonTexts headerClass={"cycle_taital"} textClass={"cycle_text"} header={"Our Cycle"} text={"It is a long established fact that a reader will be distracted by the"}/>
			{CYCLES_DATA.map((data, index) => (
				<CycleDetail key={index} id={data.id} image={data.image} headers={data.headers} checkeven={(index%2 == 0) ? "1" : "0"} />
			))}
		   <div className="read_btn_main">
		   <LinkBtn class={"read_bt_1"} link={"#"} text={"Read More"}/>
		   </div>
		</div>
	 </div>
	)
}

export default Cycles;