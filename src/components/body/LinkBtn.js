function LinkBtn(prom) {
	return (
		<div className={prom.class}><a href={prom.link}>{prom.text}</a></div>
	)
}

export default LinkBtn;