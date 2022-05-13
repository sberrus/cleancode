import { Container, Nav, Navbar } from "react-bootstrap";

const NavbarMenu = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">Clean Code - Fernando Herrera</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/deuda-tecnica">Deuda Técnica</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
};

export default NavbarMenu;
