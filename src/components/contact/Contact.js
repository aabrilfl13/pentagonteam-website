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
						<h4>Email</h4>
						<h5>{MAIL}</h5>
						<a href="ayuda@pentagonteam.es" target="_blank">
							Send a message
						</a>
					</article>
					<article className="contact__option">
						<AiOutlineWhatsApp className="contact__option-icon" />
						<h4>WhatsApp</h4>
						<h5>Stay update of everything</h5>
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
						<h5>Cruce rio Tarafa y, Vinalopo, 03680 Aspe, Alicante</h5>
						<a href="https://maps.app.goo.gl/dLNtHRnAHeQjow4WA" target="_blank">
							How to go
						</a>
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
