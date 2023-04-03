function Img(props) {
	return (
		<img src={require('../../assets/'+props.imgName)} alt={props.altName} className={props.class}  />
	)
}

export default Img;