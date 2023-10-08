import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import Epi from "./routes/episodes/episodes";
import Char from "./routes/characters/char";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

let arr = [];

/*async function getdata(){

  await fetch('./One Piece json.json')
 .then((response) => response.json())
 .then((json) => arr =json )
 console.log(arr);
}
getdata()*/

function Appp() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/"  element={<App></App>}></Route>
				<Route path="/epi" element={<Epi></Epi>}></Route>
				<Route path="/char" element={<Char></Char>}></Route>
			</Routes>
		</BrowserRouter>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Appp></Appp>);
