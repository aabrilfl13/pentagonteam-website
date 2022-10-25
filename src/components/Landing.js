import React from "react";
import vid_portada from "../assets/img/portada.mp4";

export const Landing = () => {
	return (
		<section className="home" id="home">
			{/* <!-- <h1 class="title-text">
    <span>pentagon</span>
</h1>
<p>Airsoft - Speedsoft</p> --> */}
			<video muted loop autoPlay src={vid_portada}></video>
			<a href="#events">
				<svg className="arrows">
					<path className="a1" d="M0 0 L30 32 L60 0"></path>
					<path className="a2" d="M0 20 L30 52 L60 20"></path>
					<path className="a3" d="M0 40 L30 72 L60 40"></path>
				</svg>
			</a>
		</section>
	);
};
