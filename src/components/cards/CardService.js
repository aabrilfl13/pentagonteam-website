import React from "react";
import { BiBadgeCheck } from "react-icons/bi";

import "./cardService.css";

export const CardService = (props) => {
	return (
		<article className="service">
			<div className="service__head">
				<h3>{props.header}</h3>
			</div>

			<ul className="service__list">
				{props.texts.map((text, index) => (
					<li key={index}>
						<div className="service__list-icon">
							<BiBadgeCheck />
						</div>
						<p>{text}</p>
					</li>
				))}
			</ul>
		</article>
	);
};
