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
						<h3>Partidas públicas</h3>
					</div>

					<ul className="service__list">
						<li>
							<div className="service__list-icon">
								<BiBadgeCheck />
							</div>
							<p>
								Ven a nuestro campo en las partidas públicas que organizamos
							</p>
						</li>
						<li>
							<div className="service__list-icon">
								<BiBadgeCheck />
							</div>
							<p>Guiones dinámicos y divertidos</p>
						</li>
						<li>
							<div className="service__list-icon">
								<BiBadgeCheck />
							</div>
							<p>Guiones dinámicos y divertidos</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service__head">
						<h3>Partidas privadas</h3>
					</div>

					<ul className="service__list">
						<li>
							<div className="service__list-icon">
								<BiBadgeCheck />
							</div>
							<p>Celebra tu cumpleaños</p>
						</li>
						<li>
							<div className="service__list-icon">
								<BiBadgeCheck />
							</div>
							<p>Eventos de trabajo</p>
						</li>
						<li>
							<div className="service__list-icon">
								<BiBadgeCheck />
							</div>
							<p>Juega solo con tus amigos</p>
						</li>
						<li>
							<div className="service__list-icon">
								<BiBadgeCheck />
							</div>
							<p>Entrena con tu equipo</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service__head">
						<h3>Alquiler equipación</h3>
					</div>

					<ul className="service__list">
						<li>
							<div className="service__list-icon">
								<BiBadgeCheck />
							</div>
							<p>Réplica marcadora airsoft</p>
						</li>
						<li>
							<div className="service__list-icon">
								<BiBadgeCheck />
							</div>
							<p>Gafas protección ocular</p>
						</li>
						<li>
							<div className="service__list-icon">
								<BiBadgeCheck />
							</div>
							<p>Protección facial (opcional)</p>
						</li>
						<li>
							<div className="service__list-icon">
								<BiBadgeCheck />
							</div>
							<p>Chaleco táctico</p>
						</li>
						<li>
							<div className="service__list-icon">
								<BiBadgeCheck />
							</div>
							<p>Munición infinita durante toda la partida</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};
