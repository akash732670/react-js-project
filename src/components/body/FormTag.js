function FormTag(prom) {
	return (
		<div className="form-group">
			<input type="text" className="email-bt" placeholder={prom.placeholder} name={prom.name} />
		</div>
	)
}

export default FormTag;