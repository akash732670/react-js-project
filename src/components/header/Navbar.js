import Links from "./Links";
import Form from "./Form";

function Navbar(prom) {

	const LINKS = [
		{
			id: "1",
			link: "Home"
		},
		{
			id: "2",
			link: "About"
		},
		{
			id: "3",
			link: "Our Cycle"
		},
		{
			id: "4",
			link: "Shop"
		},
		{
			id: "5",
			link: "News"
		},
		{
			id: "6",
			link: "Contact Us"
		},
	]
  return (
    <div className={"collapse navbar-collapse " + prom.newClass} id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto" style={{display: 'flex', width: '100%'}}>
	  {LINKS.map(data => (
			<Links key={data.id} link={data.link} />
		))}
      </ul>
      <Form />
    </div>
  );
}

export default Navbar;
