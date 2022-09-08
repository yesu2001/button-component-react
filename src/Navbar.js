import './App.css';

const Navbar = () => {
	return (
		<div className='Navbar'>
			<strong><span>Dev</span>challenges.io</strong>
			<ul>
				<li>Colors</li>
				<li>Typography</li>
				<li>Spaces</li>
				<li className="active">Buttons</li>
				<li>Inputs</li>
				<li>Grid</li>
			</ul>
		</div>
	)
}


export default Navbar;