import { React, useState } from "react";
import {
	AiOutlineAppstore,
	AiOutlineBook,
	AiOutlinePlayCircle,
	AiOutlineUser,
} from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";

import "./nav.css";

export const Nav = () => {
	const [activeNav, setActiveNav] = useState("#");

	return (
		<nav>
			<a
				href="#"
				onClick={() => setActiveNav("#")}
				className={activeNav === "#" ? "active" : ""}
			>
				<AiOutlinePlayCircle />
			</a>
			<a
				href="#about"
				onClick={() => setActiveNav("#about")}
				className={activeNav === "#about" ? "active" : ""}
			>
				<AiOutlineUser />
			</a>
			<a
				href="#experience"
				onClick={() => setActiveNav("#experience")}
				className={activeNav === "#experience" ? "active" : ""}
			>
				<AiOutlineBook />
			</a>
			<a
				href="#services"
				onClick={() => setActiveNav("#services")}
				className={activeNav === "#services" ? "active" : ""}
			>
				<AiOutlineAppstore />
			</a>
			<a
				href="#contact"
				onClick={() => setActiveNav("#contact")}
				className={activeNav === "#contact" ? "active" : ""}
			>
				<IoLocationOutline />
			</a>
		</nav>
	);
};
