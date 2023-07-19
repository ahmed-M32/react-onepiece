import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import "./index.css";

export function Onepiece(props) {
	return (
		<nav className="nab">
			<nav className="nav-left">
				<Link to="/">
					<img src="pngegg.png" className="logo" alt="" />
				</Link>
			</nav>
			{props.children}

			<nav className="right">
				<div className="episode">
					<Link to="/epi" className="l">
						{" "}
						Episode list
					</Link>
				</div>
				<div className="char">
					<Link to="/char" className="l">
						{" "}
						Character list
					</Link>
				</div>
			</nav>
		</nav>
	);
}
