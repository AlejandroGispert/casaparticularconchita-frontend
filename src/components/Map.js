import { color } from "@mui/system";
import React, { Component } from "react";
import star from "../images/svg/star-full.svg";

export default class Map extends Component {
  render() {
    return (
      <div className="map-container">
        <div className="recomendation">
          <h3>Excellent Location</h3>
          <p>
            You will stay in the house "Alquiler de Conchita" that is placed in
            the exclusive cozy area of Miramar, right on the coastline, not far
            from the airport.
          </p>
          <p>
            <strong> In the daytime</strong> you will relax and recharge before
            heading to explore the city and "Old Havana". Within 10 minutes you
            have some of the most visited cultural and historic places like:{" "}
            <a
              href="https://cubanews.de/en/things-to-do-in-havana-fusterlandia/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Fusterlandia Art Gallery
            </a>
            ,{" "}
            <a
              href="https://www.lahabana.com/guide/teatro-karl-marx/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Karl Marx Theater
            </a>
            ,{" "}
            <a
              href="http://www.hemingwaycuba.com/marina-hemingway-cuba.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              Marina Hemingway
            </a>{" "}
            and{" "}
            <a
              href="http://www.fac.cu/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Fabrica de Arte Cubano.
            </a>
          </p>
          <p>
            <strong>In the evening</strong> you are close by the vibrant night
            life where you can enjoy music, dancing and drinks in clubs like{" "}
            <a
              href="https://www.lahabana.com/guide/don-cangrejo-2/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Don Cangrejo
            </a>
            ,{" "}
            <a
              href="https://www.cabaret-tropicana.com/en/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Tropicana
            </a>
            ,{" "}
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g147271-d3170437-Reviews-Centro_Cultural_El_Sauce-Havana_Ciudad_de_la_Habana_Province_Cuba.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              El Sauce
            </a>{" "}
            and{" "}
            <a
              href="http://cuba-explore.com/restaurants/view/715"
              target="_blank"
              rel="noreferrer noopener"
            >
              Casa de la Musica Miramar
            </a>
            .
          </p>

          <p>
            More suggestions?{" "}
            <a href="https://goo.gl/maps/nFPZZgwnVE5bR9cy6">Click Here</a>
          </p>
        </div>
        <div className="mapdistance">
          <iframe
            title="House in Cuba"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14679.223740919193!2d-82.4453128!3d23.1041989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x38193bf21359f75c!2sAlquiler%20de%20Conchita!5e0!3m2!1sen!2sdk!4v1620156130066!5m2!1sen!2sdk"
            width="600"
            height="450"
            styles={"border:0"}
            // allowfullscreen=""
            loading="lazy"
            className="map"
          ></iframe>
        </div>

        <section className="sectionreviews body-padding">
          {/* <h2 id="reviews">Reviews</h2> */}
          {/* <a href="#description">Description</a>
      <a href="#location">Location</a>
      <a href="#gallery">Gallery</a> */}

          <div className="review-container">
            <h3>Marit Lehmann</h3>
            {/* <span className="span-to-right">June, 2016</span> */}

            <div className="rating">
              <span className="stars">
                <img src={star} alt="star rating" width="15px" />
              </span>
              <span className="stars">
                <img src={star} alt="star rating" width="15px" />
              </span>
              <span className="stars">
                <img src={star} alt="star rating" width="15px" />
              </span>
              <span className="stars">
                <img src={star} alt="star rating" width="15px" />
              </span>
              <span className="stars">
                <img src={star} alt="star rating" width="15px" />
              </span>
            </div>

            <p>
              Honestamente me ha encantado el lugar! La ubicacion, a pesar de no
              estar en el corazon de la ciudad permitia llegar con total
              facilidad al Vedado, La Habana Vieja, Centro Habana, etc. Fue
              genial encontrar a Arturo y Conchita esperandonos con bebidas
              justo al llegar. El area de Miramar es genial si quieres alejarte
              del ruido y disfrutar una estancia especial para la relajacion.
              Sin duda repetiremos!
            </p>

            <h3>Eric (France)</h3>
            {/* <span className="span-to-right">March, 2016</span> */}

            <div className="rating">
              <span className="stars">
                <img src={star} alt="star rating" width="15px" />
              </span>
              <span className="stars">
                <img src={star} alt="star rating" width="15px" />
              </span>
              <span className="stars">
                <img src={star} alt="star rating" width="15px" />
              </span>
              <span className="stars">
                <img src={star} alt="star rating" width="15px" />
              </span>
              <span className="stars">
                <img src={star} alt="star rating" width="15px" />
              </span>
            </div>

            <p>
              La vie à la cubaine. Accueil chaleureux de toute la famille qui
              m'a trouvé facilement des solutions à mes différentes demandes de
              déplacement, car l'emplacement est un peu excentré du coeur de la
              havane. Cela étant, le quartier, très calme, ne pose pas de
              problèmes de sécurité. Expérience à vivre.
            </p>
          </div>
        </section>
      </div>
    );
  }
}
