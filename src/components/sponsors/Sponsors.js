import React from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import ArmycopyIcon from "../../assets/img/sponsors/ARMYCOP/armycop_icon.png";
import AYEPIcon from "../../assets/img/sponsors/AYEP/ayep_icon_white.png";
import CoreIcon from "../../assets/img/sponsors/CORE-AIRSOFT/core_icon.png";
import CubyIcon from "../../assets/img/sponsors/CUBYSOFT/cubysoft.png";
import AidaIcon from "../../assets/img/sponsors/aida/firma.png";
import "./sponsors.css";

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

export const Sponsors = () => {
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
		<section id="sponsors">
			<h2>Nuestros Patrocinadores</h2>

			<Swiper
				className="container container__sponsors"
				modules={[Pagination, Autoplay]}
				spaceBetween={40}
				slidesPerView={slidesPerView()}
				autoplay={{ delay: 2000 }}
			>
				<SwiperSlide className="slides">
					<a href="#" target="_blank">
						<img src={AYEPIcon} alt="AYEPIcon" />
					</a>
				</SwiperSlide>
				<SwiperSlide className="slides">
					<a href="#" target="_blank">
						<img src={ArmycopyIcon} alt="ArmycopyIcon" />
					</a>
				</SwiperSlide>
				<SwiperSlide className="slides">
					<a href="#" target="_blank">
						<img src={AidaIcon} alt="AidaIcon" />
					</a>
				</SwiperSlide>
				<SwiperSlide className="slides">
					<a href="#" target="_blank">
						<img src={CoreIcon} alt="CoreIcon" />
					</a>
				</SwiperSlide>
				<SwiperSlide className="slides">
					<a href="#" target="_blank">
						<img src={CubyIcon} alt="CubySoft" />
					</a>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Sponsors;
