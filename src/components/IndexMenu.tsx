import { Link } from "react-router-dom";

const IndexMenu = () => {
	return (
		<>
			<h1 className="display-1">Clean Code - Fernando Herrera</h1>
			<ul>
				<h5>Seciones del curso</h5>
				<li>
					<Link to="/deuda-tecnica">Deuda Tecnica</Link>
				</li>
			</ul>
		</>
	);
};

export default IndexMenu;
