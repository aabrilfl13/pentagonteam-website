import React from "react";

import SocialMedia from "../floating/SocialMedia";
import "./header.css";

export const Header = () => {
	return (
		<div>
			<header>
				<div className="container header__container">
					<h5>Hello I'm</h5>
					<h1>Antonio Abril</h1>
					<h5 className="text-light">Backend Dev</h5>
					<SocialMedia />
				</div>
			</header>
		</div>
	);
};
