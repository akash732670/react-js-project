import { Fragment } from "react"

function CommonTexts(props) {
	return (
		<Fragment>
			<h1 className={props.headerClass}>{props.header}</h1>
			<p className={props.textClass}>{props.text}</p>
		</Fragment>
	)
};

export default CommonTexts;