import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import EventPage from "./Pages/EventPage";
import { ErrorPage } from "./Pages/ErrorPage";

function App() {
	return (
		<div className="bg-gray-200">
			<ChakraProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/event/:eventId" element={<EventPage />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</BrowserRouter>
			</ChakraProvider>
		</div>
	);
}

export default App;
