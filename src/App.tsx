import { Link, Route, Routes } from "react-router-dom";
import IndexMenu from "./components/IndexMenu";
import DeudaTecnica from "./Pages/DeudaTecnica/CleanCode";
import MainWrapper from "./_partials/MainWrapper";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainWrapper />}>
					<Route index element={<IndexMenu />} />
					<Route path="/deuda-tecnica" element={<DeudaTecnica />} />
					<Route
						path="*"
						element={
							<>
								<h1>Creo que estar perdido</h1>
								<Link to="/">Volver a Home</Link>
							</>
						}
					/>
				</Route>
			</Routes>
		</>
	);
};

export default App;
