import 'bootstrap/dist/css/bootstrap.min.css';  

function Links(prom) {
	return (
		<li className="nav-item active">
			<a className="nav-link" href="#">
				{prom.link}
			</a>
	  	</li>
	)
}

export default Links;