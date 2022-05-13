import { Route, Routes } from "react-router-dom";
import DeudaTecnica from "./Pages/DeudaTecnica/DeudaTecnica";
import MainWrapper from "./_partials/MainWrapper";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<MainWrapper />}>
					<Route index element={<DeudaTecnica />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
