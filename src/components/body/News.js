import NewsDetail from "./NewsDetail";
import CommonTexts from "./CommonTexts";

function News() {
	const NEWS_DETAIL = [
		{
			id: '1',
			header: "Speed cycle",
			img: "img-6.png"
		},
		{
			id: '2',
			header: "Speed cycle",
			img: "img-7.png"
		},
		{
			id: '3',
			header: "Jaump cycle",
			img: "img-8.png"
		}
	];

	return (
		<div className="news_section layout_padding">
		<div className="container">
			<CommonTexts headerClass={"news_taital"} textClass={"news_text"} header={"News"} text={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using "}/>
		   <div className="news_section_2 layout_padding">
			  <div className="row">
				{NEWS_DETAIL.map((data, index) => (
					<NewsDetail key={index} img={data.img} header={data.header} />
				))}
			  </div>
		   </div>
		</div>
	 </div>
	)
};

export default News;