import { React, useState } from "react";
import { AiOutlinePlayCircle, AiOutlineUser } from "react-icons/ai";
import { GiMoneyStack } from "react-icons/gi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMilitaryTech } from "react-icons/md";

import "./nav.css";

export const Nav = () => {
	const [activeNav, setActiveNav] = useState("#header");

	return (
		<nav>
			<a
				href="#header"
				onClick={() => setActiveNav("#header")}
				className={activeNav === "#header" ? "active" : ""}
			>
				<AiOutlinePlayCircle />
			</a>
			{/* <a
				href="#about"
				onClick={() => setActiveNav("#about")}
				className={activeNav === "#about" ? "active" : ""}
			>
				<AiOutlineUser />
			</a> */}
			<a
				href="#team"
				onClick={() => setActiveNav("#team")}
				className={activeNav === "#team" ? "active" : ""}
			>
				<MdOutlineMilitaryTech />
			</a>
			<a
				href="#services"
				onClick={() => setActiveNav("#services")}
				className={activeNav === "#services" ? "active" : ""}
			>
				<GiMoneyStack />
			</a>
			<a
				href="#contact"
				onClick={() => setActiveNav("#contact")}
				className={activeNav === "#contact" ? "active" : ""}
			>
				<HiOutlineInformationCircle />
			</a>
		</nav>
	);
};
