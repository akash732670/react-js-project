import LinkImg from "./LinkImg";

function Form() {
	return (
		<form className="form-inline my-2 my-lg-0">
			<div className="login_menu">
				<ul>
					<li>
						<a href="#">Login</a>
					</li>
					<li>
						<LinkImg image={"trolly-icon.png"} link={"#"}/>
					</li>
					<li>
						<LinkImg image={"search-icon.png"} link={"#"}/>
					</li>
				</ul>
			</div>
      </form>
	)
}

export default Form;