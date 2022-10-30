import React from "react";
import { BiBadgeCheck } from "react-icons/bi";

import "./services.css";

export const Services = () => {
	return (
		<section id="services">
			<h2>Servicios</h2>
			<h5>Que Te Ofrecemos</h5>

			<div className="container container__services">
				<article className="service">
					<div className="service__head">
						<h3>Alquiler de equipo</h3>
					</div>

					<ul className="service__list">
						<li>
							<BiBadgeCheck className="service__list-icon" />
							<p>Alquiler de réplica</p>
						</li>
						<li>
							<BiBadgeCheck className="service__list-icon" />
							<p>Máscara</p>
						</li>
						<li>
							<BiBadgeCheck className="service__list-icon" />
							<p>Gafas de protección</p>
						</li>
						<li>
							<BiBadgeCheck className="service__list-icon" />
							<p>Munición infinita</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service__head">
						<h3>Suministros</h3>
					</div>

					<ul className="service__list">
						<li>
							<BiBadgeCheck className="service__list-icon" />
							<p>Bebida</p>
						</li>
						<li>
							<BiBadgeCheck className="service__list-icon" />
							<p>Almuerzo</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};
