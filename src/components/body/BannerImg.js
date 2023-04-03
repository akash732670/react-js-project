import Img from "./Img";

function BannerImg() {
  return (
    <div className="col-md-7">
      <div className="best_text">Best</div>
      <div className="image_1">
        <Img imgName={"img-1.png"} altName={""} />
      </div>
    </div>
  );
}

export default BannerImg;