import React from "react";

const eventItem = (props) => (
  <li key={props.eventId} className="events__list-item">
    <div>
      <h1>{props.title}</h1>
      <h2>
        ${props.price} - {new Date(props.date).toLocaleDateString()}
      </h2>
    </div>
    <div>
      {/* esto es para que aparezca una o otra opcion, o el texto o el boton  */}
      {props.userId === props.creatorId ? (
        <p>Tu eres el creador de este evento.</p>
      ) : (
        <p>Alguien en la casa hizo este evento</p>
      )}

      <button
        className="btn"
        onClick={props.onDetail.bind(this, props.eventId)}
      >
        Ver Detalles
      </button>
    </div>
  </li>
);

export default eventItem;
