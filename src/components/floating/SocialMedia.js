import React from "react";

import FacebookLogo from "../../assets/img/icons/facebook.png";
import InstagramLogo from "../../assets/img/icons/instagram.png";
import WhatsappLogo from "../../assets/img/icons/whatsapp.png";
import YoutubeLogo from "../../assets/img/icons/youtube.png";
import "./socialMedia.css";

export const SocialMedia = () => {
	return (
		<div className="header__socials">
			<a className="icon__socials" href="#">
				<img src={InstagramLogo} alt="logo" />
			</a>
			<a className="icon__socials" href="#">
				<img src={YoutubeLogo} alt="logo" />
			</a>
			<a className="icon__socials" href="#">
				<img src={FacebookLogo} alt="logo" />
			</a>
			<a className="icon__socials" href="#">
				<img src={WhatsappLogo} alt="logo" />
			</a>
		</div>
	);
};

export default SocialMedia;
