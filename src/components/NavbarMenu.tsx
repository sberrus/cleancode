import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Link to="/" className="navbar-brand">
						Home
					</Link>
					<Nav className="me-auto">
						<li className="nav-item">
							<Link to="/deuda-tecnica" className="nav-link">
								Clean Code
							</Link>
						</li>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default NavbarMenu;
