import React from "react";
import { BiBadgeCheck } from "react-icons/bi";

import { CardService } from "../cards/CardService";
import "./services.css";

export const Services = () => {
	return (
		<section id="services">
			<h2>Servicios</h2>
			<h5>Que Te Ofrecemos</h5>

			<div className="container container__services">
				<CardService
					header="Partidas públicas"
					texts={[
						"Ven a nuestro campo en las partidas públicas que organizamos",
						"Guiones dinámicos y divertidos",
						"Acción y diversión asegurada",
					]}
				/>
				<CardService
					header="Partidas privadas"
					texts={[
						"Celebra tu cumpleaños",
						"Eventos de trabajo",
						"Juega solo con tus amigos",
						"Entrena con tu equipo",
					]}
				/>
				<CardService
					header="Alquiler equipación"
					texts={[
						"Réplica marcadora airsoft",
						"Gafas protección ocular",
						"Protección facial (opcional)",
						"Chaleco táctico",
						"Munición infinita durante toda la partida",
					]}
				/>
				<CardService
					header="Servicio de reparación"
					texts={["Guy di lo tuyo"]}
				/>
			</div>
		</section>
	);
};
