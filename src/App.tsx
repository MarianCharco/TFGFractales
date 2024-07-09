// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FractalesPage from "./Fractales";
import ContactoPage from "./ContactoPage";
import NotasPage from "./NotasPage";
import NavBar from "./components/Navbar";
function App() {
	return (
		<BrowserRouter>
      <NavBar/>
      <h1 className="text-orange-500 text-3xl font-bold text-center mb-3">
				El Universo Fractal de Marian
			</h1>
			<div className="max-w-[1000px] m-auto card mb-3">
				<Routes>
					<Route path="/contacto" element={<ContactoPage />}/>
					<Route path="/notas" element={<NotasPage />}/>
					<Route path="/" element={<FractalesPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
