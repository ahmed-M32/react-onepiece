import React, { useEffect, useState } from "react";
import { Onepiece } from "../../components/header/header";
import "../characters/char.css";

let users = [];
let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Fetch() {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("./Characters.json")
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				let char = document.querySelector(".char-main");
				for (let i = 0; i < json.length; i++) {
					json[i]["category"] = json[i].name[0];
				}
				for (let i = 0; i < alpha.length; i++) {
					let sorted = document.createElement("div");
					let sorted1 = document.createElement("div");
					let sorted2 = document.createElement("div");

					let sortedTitle = document.createElement("span");
					sorted.className = "letter";
					sortedTitle.className = "alph";
					sorted1.classList.add(`${alpha[i]}`);
					sorted1.classList.add("text");
					sortedTitle.innerHTML = alpha[i];

					let roll3 = document.createElement("img");
					roll3.src = "186407_arrow_up_icon.png";
					roll3.className = "roll2";
					sorted2.className = "maine";

					sorted2.append(sortedTitle);
					sorted2.append(roll3);
					sorted.append(sorted2);
					sorted.appendChild(sorted1);
					char.appendChild(sorted);
				}

				for (let i = 0; i < json.length; i++) {
					let named = document.createElement("div");
					let roll = document.createElement("img");
					let charInfo = document.createElement("div");
					let epAppearance = document.createElement("span");
					let mangaAppearance = document.createElement("span");
					let notes = document.createElement("span");
					let appearanceTime = document.createElement("span");

					charInfo.className = "charInfo"
					epAppearance.className ="appearance"
					mangaAppearance.className = "appearance"
					notes.className ="appearance"
					appearanceTime.className = "appearance"

					epAppearance.innerHTML = `appeared in episode : ${json[i].episode}`;
					mangaAppearance.innerHTML = `appeared in chapter : ${json[i].chapter}`;
					notes.innerHTML = `notes : ${json[i].note}`;
					appearanceTime.innerHTML = `appeared in : ${json[i].year}`;

					charInfo.append(epAppearance);
					charInfo.append(mangaAppearance);
					charInfo.append(notes);
					charInfo.append(appearanceTime);


					charInfo.style.display = "none";

					roll.src = "186407_arrow_up_icon.png";
					roll.className = "roll3";

					let sortingChar = document.querySelector(`.${json[i].name[0]}`);
					named.innerHTML = json[i].name;
					named.className = "names";

					named.append(roll);
					named.append(charInfo);
					sortingChar.append(named);
				}
				let charRoll = document.querySelectorAll(".roll3");

				charRoll.forEach((e) => {
					e.onclick = function () {
						let parent = e.parentElement.children[1];
						if (opened) {
							e.style.webkitTransform = "rotate(0deg)";
							for (let i = 0; i < hide.length; i++) {
								parent.style.display = "";
							}
							parent.parentElement.classList.add("active");
							opened = false;
						} else {
							e.style.webkitTransform = "rotate(180deg)";

							for (let i = 0; i < hide.length; i++) {
								parent.style.display = "none";
							}
							parent.parentElement.classList.remove("active");
							opened = true;
						}
					};
				});

				//display setting
				let hide = document.querySelectorAll(".text");
				console.log(hide);
				for (let i = 0; i < hide.length; i++) {
					hide[i].style.display = "none";
				}

				let opened = true;
				let button = document.querySelectorAll(".roll2");

				button.forEach(function (e) {
					e.onclick = () => {
						if (opened) {
							e.style.webkitTransform = "rotate(0deg)";
							for (let i = 0; i < hide.length; i++) {
								e.parentElement.parentElement.children[1].style.display = "";
							}
							opened = false;
						} else {
							e.style.webkitTransform = "rotate(180deg)";

							for (let i = 0; i < hide.length; i++) {
								e.parentElement.parentElement.children[1].style.display =
									"none";
							}
							opened = true;
						}
					};
				});
			});
	});

	return (
		<div className="chara">
			<Onepiece></Onepiece>
			<div className="char-main"></div>
		</div>
	);
}
export default Fetch;
