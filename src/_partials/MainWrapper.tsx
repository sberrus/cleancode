import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavbarMenu from "../components/NavbarMenu";

const MainWrapper = () => {
	return (
		<div className="mb-5">
			<NavbarMenu />
			<Container fluid>
				<Outlet />
			</Container>
		</div>
	);
};

export default MainWrapper;
