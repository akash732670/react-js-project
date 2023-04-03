import BannerImg from "./BannerImg";
import BannerText from "./BannerText";

function ListCarousal(prom) {
  return (
    <div className={"carousel-item active"}>
      <div className="container">
        <div className="row">
          	<BannerImg />
			<BannerText />
        </div>
      </div>
    </div>
  );
}

export default ListCarousal;