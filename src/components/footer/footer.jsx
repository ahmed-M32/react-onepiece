import React from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Epi from "../../routes/episodes/episodes";

import "./footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="part">
				<Link to="/epi" className="l">
					{" "}
					Episodes
				</Link>
			</div>
			<div className="part">
				<Link to="/char" className="l">
					{" "}
					Characters
				</Link>
			</div>
		</div>
	);
}
export default Footer;
