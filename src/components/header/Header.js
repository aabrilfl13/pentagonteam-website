import React from "react";

import SocialMedia from "../floating/SocialMedia";
import "./header.css";

export const Header = () => {
	return (
		<div>
			<header id="header">
				<div className="container header__container">
					<h1>Aquí va la portada bro</h1>
					<SocialMedia />
				</div>
			</header>
		</div>
	);
};
