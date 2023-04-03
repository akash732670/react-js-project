function FormTextArea(prom) {
	return (
		<div className="form-group">
			<textarea className="massage-bt" placeholder={prom.placeholder} rows="5" id={prom.idName} name={prom.name}></textarea>
		</div>
	)
}

export default FormTextArea;