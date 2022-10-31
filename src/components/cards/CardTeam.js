import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";

import pentagonLogo from "../../assets/img/PENTAGON-IMAGOTIPO-PENTAGONO-TRANSPARENCY.png";
import "./cardTeam.css";

function TeamCard() {
	return (
		<article className="card">
			<div className="card__front">
				<div className="image">
					<img src={pentagonLogo} alt="Pentagon Operator" />
				</div>
				<div className="card__name">
					<h2>OPERATOR</h2>
				</div>
			</div>
			<div className="card__back">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, et ad
					qui quo dignissimos corrupti eius expedita explicabo voluptatibus iste
					sunt quas, provident vero omnis! Quia veniam nihil nam illo.
				</p>
			</div>
		</article>
	);
}

export default TeamCard;
