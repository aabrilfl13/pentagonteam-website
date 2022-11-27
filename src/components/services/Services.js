import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import { CardService } from "../cards/CardService";
import "./services.css";

export const Services = () => {
	return (
		<section id="services">
			<h2>Servicios</h2>
			<h5>Que Te Ofrecemos</h5>

			<Swiper
				className="container container__services"
				modules={[Autoplay, Pagination]}
				spaceBetween={40}
				slidesPerView={1.2}
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000 }}
			>
				<SwiperSlide className="slides">
					<CardService
						header="Partidas públicas"
						texts={[
							"Ven a nuestro campo en las partidas públicas que organizamos",
							"Guiones dinámicos y divertidos",
							"Acción y diversión asegurada",
						]}
					/>
				</SwiperSlide>
				<SwiperSlide className="slides">
					<CardService
						header="Partidas privadas"
						texts={[
							"Celebra tu cumpleaños",
							"Eventos de trabajo",
							"Juega solo con tus amigos",
							"Entrena con tu equipo",
						]}
					/>
				</SwiperSlide>
				<SwiperSlide className="slides">
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
				</SwiperSlide>
			</Swiper>
		</section>
	);
};
