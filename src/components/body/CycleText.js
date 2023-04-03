import CommonTexts from "./CommonTexts";
import LinkBtn from "./LinkBtn";

function CycleText(prom) {
	return (
			<div className="col-md-6">
				<CommonTexts headerClass={"cycles_text"} textClass={"lorem_text"} header={prom.headers} text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"}/>
				<div className="btn_main">
					<LinkBtn class={"buy_bt"} link={"#"} text={"Buy Now"}/>
					<h4 className="price_text">Price <span style={{color: '#f7c17b'}}>$</span> <span style={{color: '#325662'}}>200</span></h4>
				</div>
			</div>
	)
}

export default CycleText;