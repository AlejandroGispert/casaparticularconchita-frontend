import React from "react";

const ModalCancel = (props) => (
  <div className="modalSuperbooking">
    <header className="modal__header5">
      <h4>{props.name}</h4>
      {"  "}
      <p>{props.country}</p>
    </header>

    <section className="modal__content5">
      <h4>Realmente quieres cancelar esta reserva? </h4>
      <p>Quieres mandar un recordatorio para dejarnos una recomendacion:</p>

      <a
        href={
          "mailto:" +
          props.email +
          "?subject=Thank%20you%20from%20Alquiler%20de%20Conchita%20y%20Alex&body=Thank%20you%20for%20staying%20with%20us%20at%20Alquiler%20de%20Conchita%20y%20Alex%0A%0AWe%20hope%20you%20enjoyed%20your%20experience.%20To%20help%20other%20guest%20with%20a%20recommendation,%20please%20leave%20a%20review%20here:%0A%0Ahttps://goo.gl/maps/7cthWTLDoTEvN3PXA%0A%0ABest%20wishes%2C%0AConchita%20y%20Alex"
        }
        target="_blank"
        rel="noreferrer"
      >
        {props.email}
      </a>
      {/* <h6>{props.children}</h6> */}
    </section>
    <section className="modal__actions5">
      <button className="btn" onClick={props.onCancel}>
        Cancelar
      </button>
      <button
        className="btn-danger p-1 pl-3 pr-3"
        onClick={props.deleteSuperbooking.bind(this, props.superBookingId)}
      >
        Eliminar Definitivamente
      </button>
    </section>
  </div>
);

export default ModalCancel;
