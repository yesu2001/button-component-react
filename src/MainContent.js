import './App.css';
import Button from './Button';

const MainContent = () => {
	const one = {
		gridArea: "one",
	}

	const two = {
		gridArea: "two",
	}

	const three = {
		gridArea: "three",
	}

	const four = {
		gridArea: "four",
	}

	const five = {
		gridArea: "five",
	}

	const six = {
		gridArea: "six",
	}

	const seven = {
		gridArea: "seven",
	}

	const eight = {
		gridArea: "eight",
	}

	const nine = {
		gridArea: "nine",
	}

	const ten = {
		gridArea : "ten",
	}

	const eleven = {
		gridArea: "eleven",
	}

	const twelve = {
		gridArea: "twelve",
	}
	const thirteen= {
		gridArea: "thirteen",
	}
	const fourteen = {
		gridArea: "fourteen",
	}
	const fifteen = {
		gridArea: "fifteen",
	}
	const sixteen = {
		gridArea: "sixteen",
	}
	const seventeen = {
		gridArea: "seventeen",
	}
	const eighteen = {
		gridArea: "eighteen",
	}
	const ninteen = {
		gridArea: "ninteen",
	}
	const twenty = {
		gridArea: "twenty",
	}
	const twenty_one = {
		gridArea: "twenty_one",
	}
	const twenty_two = {
		gridArea: "twenty_two",
	}


	const default_style = {
		background: "#E0E0E0",
	}

	const default_hover = {
		background: "#AEAEAE",
	}

	const outline = {
		border: "1px solid #3D5AFE",
	}

	const outline_hover = {
		background: "rgba(41, 98, 255, 0.1)",
		border: "1px solid #3D5AFE",
	}

	const text = {
		color: "#3D5AFE",
	}

	const text_hover = {
		background: "rgba(41, 98, 255, 0.1)",
	}

	const dis_shadow = {
		background: "#3D5AFE",
		color: "#fff",
	}

	const disabled = {
		background: "#E0E0E0",
		color: "#9E9E9E",
	}

	const text_disabled = {
		color: "#9E9E9E",
	}

	const start_icon = {
		background: "#2962FF",
		color: "#fff",
	}

	const end_icon = {
		background: "#2962FF",
		color: "#fff",
	}

	const size_S = {
		width: "70px",
		color: "#fff",
		background: "#2962FF",
	}

	const size_M = {
		width: "80px",
		color: "#fff",
		background: "#2962FF",
	}

	const size_L = {
		width: "90px",
		color: "#fff",
		background: "#2962FF",
	}

	const color_D ={
		background: "#E0E0E0",
	}

	const color_P ={
		background: "#2962FF",
		color: "#fff",
	}

	const color_S ={
		background: "#455A64",
		color: "#fff",
	}

	const color_d ={
		background: "#D32F2F",
		color: "#fff",
	}	

	const color_D_hover ={
		background: "#AEAEAE",
		color: "#fff",
	}

	const color_P_hover ={
		background: "#0039CB",
		color: "#fff",
	}

	const color_S_hover ={
		background: "#1C313A",
		color: "#fff",
	}

	const color_d_hover ={
		background: "#9A0007",
		color: "#fff",
	}	

	const desc = `&:hover , $:focus`
	const desc_one = `<button />`
	const desc_outline = `<button variant="outline" />`
	const desc_text = `<button variant="text" />`
	const desc_disShadow = `<button disableShadow />`
	const desc_disabled = `<button disabled />`
	const desc_text_disabled = `<button variant="text" disabled />`
	const desc_startIcon = `<button startIcon="local_grocery_store" n/>`
	const desc_endIcon = `<button endIcon="local_grocery_store" />`
	const desc_sizeS = `<button size="sm" />`
	const desc_sizeM = `<button size="md" />`
	const desc_sizeL = `<button size="lg" />`
	const desc_ColorD = `<button color="defult" />`
	const desc_ColorP = `<button color="primary" />`
	const desc_ColorS = `<button color="secondary" />`
	const desc_Colord = `<button color="danger" />`


	return (
		<div className='MainContent'>
			<h2> Buttons</h2>
			<div className="btn-container">
				<Button desc={desc_one} styling={default_style} grid={one}/>
				<Button desc={desc} styling={default_hover} grid={two}/>
				<Button desc={desc_outline} styling={outline} grid={three}/>
				<Button desc={desc} styling={outline_hover} grid={four}/>
				<Button desc={desc_text} styling={text} grid={five}/>
				<Button desc={desc} styling={text_hover} grid={six}/>
				<Button desc={desc_disShadow} styling={dis_shadow} grid={seven}/>
				<Button desc={desc_disabled} styling={disabled} grid={eight}/>
				<Button desc={desc_text_disabled} styling={text_disabled} grid={nine} />
				<Button desc={desc_startIcon} styling={start_icon} grid={ten}/>
				<Button desc={desc_endIcon} styling={end_icon} grid={eleven}/>
				<Button desc={desc_sizeS} styling={size_S} grid={twelve}/>
				<Button desc={desc_sizeM} styling={size_M} grid={thirteen}/>
				<Button desc={desc_sizeL} styling={size_L} grid={fourteen}/>
				<Button desc={desc_ColorD}styling={color_D} grid={fifteen}/>
				<Button desc={desc_ColorP} styling={color_P} grid={sixteen}/>
				<Button desc={desc_ColorS} styling={color_S} grid={seventeen}/>
				<Button desc={desc_Colord} styling={color_d} grid={eighteen}/>
				<Button styling={color_D_hover} desc={desc} grid={ninteen}/>
				<Button styling={color_P_hover} grid={twenty}/>
				<Button styling={color_S_hover} grid={twenty_one}/>
				<Button styling={color_d_hover} grid={twenty_two}/>
			</div>
		</div>
	)
}


export default MainContent;