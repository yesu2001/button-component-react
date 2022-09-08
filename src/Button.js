import './App.css';

const Button = ({desc,styling,grid}) => {
	console.log(grid)
	return (
		<div style={grid} className="Button">
			<pre>{desc}</pre>
			<button style={styling}>Default</button>
		</div>
	)
}

export default Button;