import React from "react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import CardTeam from "../cards/CardTeam";
import "./team.css";

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

export const Team = () => {
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
		<section id="team">
			<h5>OUR TEAM</h5>

			<Swiper
				className="container container__team"
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={slidesPerView()}
				pagination={{ clickable: true }}
			>
				<SwiperSlide className="slides">
					<CardTeam />
				</SwiperSlide>
				<SwiperSlide className="slides">
					<CardTeam />
				</SwiperSlide>
				<SwiperSlide className="slides">
					<CardTeam />
				</SwiperSlide>
				<SwiperSlide className="slides">
					<CardTeam />
				</SwiperSlide>
				<SwiperSlide className="slides">
					<CardTeam />
				</SwiperSlide>
				<SwiperSlide className="slides">
					<CardTeam />
				</SwiperSlide>
				<SwiperSlide className="slides">
					<CardTeam />
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Team;
