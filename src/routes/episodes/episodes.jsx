import React, { useEffect, useState } from "react";
import { Onepiece } from "../../components/header/header";
import "../episodes/episodes.css";

let users = [];
function Fetch() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("./One Piece json.json")
			.then((response) => response.json())
			.then((json) => {
				users = json;
				console.log(json);

				let ep = document.querySelector(".epis");
				let bar = document.querySelector(".search");

				for (let i = 0; i < users.length; i++) {
					let newDiv = document.createElement("div");
					newDiv.className = "epp";
					let epNum = document.createElement("div");
					epNum.className = "epn";
					let epTitle = document.createElement("div");
					epTitle.className = "ept";

					let press = document.createElement("div");
					press.className = "press";
					press.innerHTML = "click for more information";
					let red = document.createElement("div");
					red.className = "red1";
					let red1 = document.createElement("div");
					red1.className = "red2";
					let info = document.createElement("div");
					info.className = "info";

					let rate = document.createElement("div");
					rate.className = "ept";
					info.append(rate);

					let air = document.createElement("div");
					air.className = "air";

					air.innerHTML = `airing date : ${users[i].start}`;

					info.append(air);
					let trend = document.createElement("div");
					trend.className = "tre";

					trend.innerHTML = `trending : ${users[i].trend}`;

					info.append(trend);

					rate.innerHTML = users[i].average_rating;
					epTitle.innerHTML = `Episode Title : ${users[i].name}`;
					let rateStar = document.createElement("img");
					rateStar.src = "1483754.png";
					rateStar.className = "rs";
					rate.appendChild(rateStar);

					let roll = document.createElement("img");
					roll.src = "186407_arrow_up_icon.png";
					roll.className = "roll";

					epNum.innerHTML = users[i].episode;
					let num1 = Math.floor(Math.random() * 255);
					let num2 = Math.floor(Math.random() * 255);
					let num3 = Math.floor(Math.random() * 255);
					let num4 = Math.floor(Math.random() * 255);
					let num5 = Math.floor(Math.random() * 255);
					let num6 = Math.floor(Math.random() * 255);

					info.appendChild(roll);

					info.style.display = "none";
					let pull = false;

					press.onclick = function () {
						if (pull) {
							info.style.display = "none";
							press.style.display = "";
							pull = false;
						} else {
							newDiv.style.height = "90%";
							info.style.marginTop = "50px";
							info.style.display = "";
							pull = true;
							press.style.display = "none";
						}
					};
					roll.onclick = () => {
						if (pull) {
							info.style.display = "none";
							press.style.display = "";
							newDiv.style.height = "fit-content";

							pull = false;
						} else {
							info.style.display = "";
							pull = true;
							press.style.display = "none";
						}
					};

					red.style.backgroundImage = `linear-gradient(rgb(${num1},${num2},${num3}),rgb(${num4},${num5},${num6}))`;
					red1.style.backgroundColor = `rgb(${num4},${num5},${num6})`;

					newDiv.appendChild(epNum);
					newDiv.appendChild(epTitle);
					newDiv.appendChild(red);
					newDiv.appendChild(red1);

					newDiv.appendChild(press);
					newDiv.appendChild(info);

					users[i]["el"] = newDiv;
					ep.appendChild(newDiv);
				}
				bar.addEventListener("input", (e) => {
					let se = users.forEach((ele) => {
						console.log(ele);
						const isVisible =
							ele.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
							ele.episode
								.toString()
								.toLowerCase()
								.includes(e.target.value.toString().toLowerCase());
						ele.el.classList.toggle("hide", !isVisible);
					});
				});
				console.log(users);
			});
	});

	{
		return (
			<div className="s">
				<Onepiece>
					<div className="bar">
						<input
							type="search"
							name="search"
							id="s"
							className="search"
							placeholder="search by title or episode number"
						/>
					</div>
				</Onepiece>

				<template className="epis"></template>
			</div>
		);
	}
}

export default Fetch;
