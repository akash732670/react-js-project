function Map() {
  return (
    <div className="col-lg-8 col-sm-12 padding_0">
      <div className="map_main">
        <div className="map-responsive">
          <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Rockers+Technologies" width="600" height="400" style={{ border: "0", width: "100%" }} allowFullScreen=""></iframe>
        </div>
      </div>
    </div>
  );
}

export default Map;