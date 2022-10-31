import React from "react";

import pentagonLogo from "../../assets/img/PENTAGON-IMAGOTIPO-PENTAGONO-TRANSPARENCY.png";
import CardTeam from "../cards/CardTeam";
import "./team.css";

export const Team = () => {
	return (
		<section id="team">
			<h5>OUR TEAM</h5>

			<div className="container container__team">
				<CardTeam />
				<CardTeam />
				<CardTeam />
				<CardTeam />
				<CardTeam />
				<CardTeam />
				<CardTeam />
			</div>
		</section>
	);
};
