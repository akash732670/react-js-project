import CommonTexts from "./CommonTexts";
import LinkBtn from "./LinkBtn";

function BannerText() {
  return (
    <div className="col-md-5">
      <CommonTexts headerClass={"banner_taital"} textClass={"banner_text"} header={"New Model Cycle"} text={"It is a long established fact that a reader will be distracted by the readable content"} />
	  <LinkBtn class={"contact_bt"} link={"contact.html"} text={"Shop Now"}/>
    </div>
  );
}

export default BannerText;
