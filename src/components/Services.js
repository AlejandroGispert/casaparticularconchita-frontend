import React, { Component } from "react";
import Title from "./Title";

import { FaTaxi, FaKey, FaMapMarkerAlt } from "react-icons/fa";

// import { RiGuideFill } from "react-icons/ri";
import { GiMeal } from "react-icons/gi";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaKey />,
        title: "Authentic acommodation",
        info: "Staying in a private room in a 'Casa Particular' is the most common way to visit in Cuba, similar to a bed & breakfast. This 'Casa' is hosted by the welcoming family Gispert.",
      },
      {
        icon: <FaMapMarkerAlt />,
        title: "Guide",
        info: "We are always open for a chat, and can arrange for us to show you the most exciting places in Havana, and introduce you into the cuban  culture and 'suave' lifestyle.",
      },
      {
        icon: <FaTaxi />,
        title: "trip coordination",
        info: "It is common practice to plan your stay and activities, on the spot. This casa is the perfect basecamp for excursions to beaches and other cities. We can help coordinate transportation and getting around the island.",
      },
      {
        icon: <GiMeal />,
        title: "Taste of Cuba",
        info: "Ever hear of a 'Paladar' ?         Cuban food is more than a meal. It is a social event. Enjoy a delicious home cooked traditional dish, with flavours of yuca, frijoles, platanitos and guayaba.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="We offer" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
