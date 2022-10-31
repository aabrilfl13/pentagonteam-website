import React from "react";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";

import "./contact.css";

export const Contact = () => {
	const MAIL = "ayuda@pentagonteam.es";

	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<AiOutlineMail className="contact__option-icon" />
						<h2>Email</h2>
						<p>{MAIL}</p>
						<a href="ayuda@pentagonteam.es" target="_blank">
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<AiOutlineWhatsApp className="contact__option-icon" />
						<h4>WhatsApp</h4>
						<p>Stay update of everything</p>
						<a
							href="https://chat.whatsapp.com/CKHjz5SOWvfKQyrm14ifai"
							target="_blank"
						>
							Join group
						</a>
					</article>
					<article className="contact__option">
						<MdOutlineLocationOn className="contact__option-icon" />
						<h4>Location</h4>
						<p>Cruce rio Tarafa y, Vinalopo, 03680 Aspe, Alicante</p>
						<a href="https://maps.app.goo.gl/dLNtHRnAHeQjow4WA" target="_blank">
							How to go
						</a>
						<iframe
							className="option__map"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104040.5682139701!2d-0.7252232625978818!3d38.313443228797794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63c9b0b9b5a1e5%3A0xd07bc39f708e11b9!2sPentagon%20Airsoft%20Camp!5e0!3m2!1ses!2ses!4v1613258061619!5m2!1ses!2ses"
							frameborder="0"
							allowfullscreen="1"
							aria-hidden="false"
							tabindex="0"
						/>
					</article>
				</div>
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
				</form>
			</div>
		</section>
	);
};
