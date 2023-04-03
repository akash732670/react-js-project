function NewsText(prom) {
	return (
		<div className="padding_15">
			<h2 className="speed_text">{prom.header}</h2>
			<div className="post_text">Post by : Den <span style={{float: "right"}}>20-12-2019</span></div>
			<p className="long_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using </p>
		</div>
	)
}

export default NewsText;