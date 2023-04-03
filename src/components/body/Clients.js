import ClientDetail from "./ClientDetail";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Client() {
	const CLIENT_DETAIL = [
		{
			id: "1"
		},
		{
			id: "2"
		},
		{
			id: "3"
		},
	]
	return (
		<div className="client_section layout_padding">
         <div id="my_slider" className="carousel slide" data-ride="carousel">
		 <OwlCarousel loop={true} margin={10} items={1} nav={true} lazyLoad={true} autoplay ={true}>  
            	{CLIENT_DETAIL.map((data, index) => (
					<ClientDetail key={index}/>
				))}
			</OwlCarousel>
            {/* <a className="carousel-control-prev" role="button" data-slide="prev">
               <i className="fa fa-angle-left"></i>
            </a>
            <a className="carousel-control-next" role="button" data-slide="next">
              <i className="fa fa-angle-right"></i>
            </a> */}
         </div>
      </div>
	)
}

export default Client;