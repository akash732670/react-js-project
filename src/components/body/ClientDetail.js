import ClientImg from "./ClientImg";
import ClientText from "./ClientText";

function ClientDetail() {
	return (
		<div className="carousel-inner">
			<div className="carousel-item active">
				<div className="container">
					<div className="client_main">
					<h1 className="client_taital">Says Customers</h1>
					<div className="client_section_2">
						<ClientImg />
						<ClientText />
					</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default ClientDetail;