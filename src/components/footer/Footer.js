import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

import "./footer.css";

export const Footer = () => {
	return (
		<div id="footer">
			<br />
			<br />
			<div className="footer__container">
				Desinged and developed by Antonio Abril
				<div className="footer__socials">
					<a href="https://github.com/aabrilfl13" target="_blank">
						<AiOutlineGithub />
					</a>
					<a href="https://www.linkedin.com/in/aabrilfl" target="_blank">
						<AiOutlineLinkedin />
					</a>
				</div>
			</div>
		</div>
	);
};
