import { Onepiece } from "../src/components/header/header";
import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./components/main/main";
import Footer from "./components/footer/footer";
import "./App.css";
import Epi from "./routes/episodes/episodes";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<Onepiece />
			<Hero />
			<Footer />
		</div>
	);
}

export default App;
