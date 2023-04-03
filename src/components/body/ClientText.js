import Img from "./Img";

function ClientText() {
  return (
    <div className="client_right">
      <div className="quote_icon" style={{ width: "25px" }}>
        <Img imgName={"quote-icon.png"} altName={""} />
      </div>
      <p className="client_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
      <h3 className="client_name">Channery</h3>
    </div>
  );
}

export default ClientText;
