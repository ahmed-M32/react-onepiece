import React from "react";
import CountUp from "react-countup";
import { Route, Routes, Link } from "react-router-dom";

import "./main.css";

function Hero() {
	return (
		<div className="hero">
			<img
				className="lu"
				src="de5417b-844030f7-a1b3-495d-819e-23bb938eb2a7.png"></img>
			<div className="red"></div>
			<div className="desc">
				<h1 className="title">The One Piece</h1>
				<span className="des">
					<p>
						Wealth, fame, power. Gold Roger, the King of the Pirates, attained
						everything this world has to offer. And so, many men head for the
						Grand Line to find the great treasure he left behind, the One Piece.
						The world has truly entered a Great Pirate Era! Wearing the straw
						hat sworn upon him by the great pirate, Shanks Monkey D. Luffy heads
						out to the sea on a journey on the road to become King of the
						Pirates!
					</p>
				</span>
				<div className="numbers">
					<span className="no">
						<span className="ss">
							<CountUp start={930} end={958} duration={5} className="ep-num" />
							<span className="plus">+</span>
							<span className="ep">episodes</span>
						</span>
						<span className="ss">
							<CountUp
								start={1300}
								end={1363}
								duration={5}
								className="ep-num"
							/>
							<span className="plus">+</span>
							<span className="ep">Characters</span>
						</span>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Hero;
