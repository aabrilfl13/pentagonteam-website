import React from "react";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

import "./contact.css";

export const Contact = () => {
	const MAIL = "info@pentagonteam.es";

	return (
		<section id="contact">
			<h2>Contáctanos</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<a href="mailto:info@pentagonteam.es" target="_blank">
						<article className="contact__option">
							<AiOutlineMail className="contact__option-icon" />
							<h2>Email</h2>
							<p>{MAIL}</p>
						</article>
					</a>
					<a
						href="https://chat.whatsapp.com/CKHjz5SOWvfKQyrm14ifai"
						target="_blank"
					>
						<article className="contact__option">
							<AiOutlineWhatsApp className="contact__option-icon" />
							<h4>WhatsApp</h4>
							<p>Únete a nuestro grupo para estar actualizado al momento</p>
						</article>
					</a>
					<a href="https://maps.app.goo.gl/dLNtHRnAHeQjow4WA" target="_blank">
						<article className="contact__option">
							<MdOutlineLocationOn className="contact__option-icon" />
							<h4>Localización Campo</h4>
							<p>Cruce rio Tarafa y, Vinalopo, 03680 Aspe, Alicante</p>

							<iframe
								className="option__map"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104040.5682139701!2d-0.7252232625978818!3d38.313443228797794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63c9b0b9b5a1e5%3A0xd07bc39f708e11b9!2sPentagon%20Airsoft%20Camp!5e0!3m2!1ses!2ses!4v1613258061619!5m2!1ses!2ses"
								frameborder="0"
								allowfullscreen="1"
								aria-hidden="false"
								tabindex="0"
							/>
						</article>
					</a>
				</div>

				{/* <h5>Write Us</h5>
				<form action="">
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<input
						type="text"
						name="name"
						placeholder="Your Full Name"
						required
					/>
					<textarea
						name="message"
						rows="7"
						placeholder="Your Message"
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						Send Message
					</button>
				</form> */}
			</div>
		</section>
	);
};
