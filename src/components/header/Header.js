import React from "react";

import logoHeader from "../../assets/img/PENTAGON-IMAGOTIPO-PENTAGONO-TRANSPARENCY.png";
import videoHeader from "../../assets/img/portada.mp4";
import SocialMedia from "../floating/SocialMedia";
import "./header.css";

export const Header = () => {
	return (
		<header id="header">
			<div className="container container__header">
				<div className="image__header">
					<img src={logoHeader} alt="logo" />
				</div>
				<video autoPlay loop muted>
					<source src={videoHeader} type="video/mp4" />
				</video>
				{/* <SocialMedia /> */}
			</div>
		</header>
	);
};
