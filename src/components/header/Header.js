import React from "react";

import logoHeader from "../../assets/img/LOGO-IMAGOTIPO-01.png";
import videoHeader from "../../assets/img/portada.mp4";
import SocialMedia from "../floating/SocialMedia";
import "./header.css";

export const Header = () => {
	return (
		<header id="header">
			<video autoPlay loop muted playsInline>
				<source src={videoHeader} type="video/mp4" />
			</video>
			<div className="container container__header">
				<SocialMedia />
				<div className="image__header">
					<img src={logoHeader} alt="logo" />
				</div>

				<a href="#" className="action_button__header">
					INSCRIBETE A LA PARTIDA
				</a>
			</div>
		</header>
	);
};
