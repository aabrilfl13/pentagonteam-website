import React from "react";

import FacebookLogo from "../../assets/img/icons/facebook.png";
import InstagramLogo from "../../assets/img/icons/instagram.png";
import WhatsappLogo from "../../assets/img/icons/whatsapp.png";
import YoutubeLogo from "../../assets/img/icons/youtube.png";
import "./socialMedia.css";

export const SocialMedia = () => {
	return (
		<div className="header__socials">
			<a
				className="icon__socials"
				href="https://www.instagram.com/pentagon_speedsoft/"
				target="_blank"
			>
				<img src={InstagramLogo} alt="logo" />
			</a>
			<a
				className="icon__socials"
				href="https://www.youtube.com/c/BlackSog"
				target="_blank"
			>
				<img src={YoutubeLogo} alt="logo" />
			</a>
			<a
				className="icon__socials"
				href="https://www.facebook.com/pentagonspeedsoft"
				target="_blank"
			>
				<img src={FacebookLogo} alt="logo" />
			</a>
			<a
				className="icon__socials"
				href="https://chat.whatsapp.com/CKHjz5SOWvfKQyrm14ifai"
				target="_blank"
			>
				<img src={WhatsappLogo} alt="logo" />
			</a>
		</div>
	);
};

export default SocialMedia;
