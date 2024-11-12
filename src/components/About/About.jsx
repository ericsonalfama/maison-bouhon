import React from "react";
import '../../index.css';


const About = () => {

    return (
        <section class="presentation">
            <div class="presentation-box">
                <h2 class="presentation_title">À propos de nous</h2>
                <p class="presentation_text">Maison Bohuon est une boulangerie située à Méru, dans le département de l'Oise. Elle est spécialisée dans la production de pains et de viennoiseries de qualité, utilisant des ingrédients frais et locaux.</p>
            </div>
            <div class="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.106443268649!2d2.1316046767398347!3d49.23647107402511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e65625acf3c975%3A0xce5374003657cd0f!2s30%20Pl.%20de%20l'H%C3%B4tel%20de%20ville%2C%2060110%20M%C3%A9ru!5e0!3m2!1sfr!2sfr"></iframe>
            </div>
        </section>
    )
}

export default About