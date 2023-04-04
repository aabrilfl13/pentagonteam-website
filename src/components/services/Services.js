import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import { CardService } from "../cards/CardService";
import "./services.css";

function debounce(fn, ms) {
	let timer;
	return (_) => {
		clearTimeout(timer);
		timer = setTimeout((_) => {
			timer = null;
			fn.apply(this, arguments);
		}, ms);
	};
}

export const Services = () => {
	const [dimensions, setDimensions] = React.useState({
		width: window.innerWidth,
	});
	React.useEffect(() => {
		const debouncedHandleResize = debounce(function handleResize() {
			setDimensions({
				width: window.innerWidth,
			});
		}, 1000);

		window.addEventListener("resize", debouncedHandleResize);

		return (_) => {
			window.removeEventListener("resize", debouncedHandleResize);
		};
	});

	let slidesPerView = () => {
		if (dimensions.width <= 600) return 1;
		else if (dimensions.width <= 1100) return 2;
		else return 3;
	};

	return (
		<section id="services">
			<h2>Servicios</h2>
			<h5>Que Te Ofrecemos</h5>

			<Swiper
				className="container container__services"
				modules={[Autoplay, Pagination]}
				spaceBetween={40}
				slidesPerView={slidesPerView()}
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
