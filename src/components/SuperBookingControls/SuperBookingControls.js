import React from "react";

const SuperBookingsControl = (props) => {
  return (
    <div className="bookings-control">
      <button
        className={props.activeOutputType === "lista" ? "active" : ""}
        onClick={props.onChange.bind(this, "lista")}
      >
        Recibidas
      </button>
      <button
        className={props.activeOutputType === "crear" ? "active" : ""}
        onClick={props.onChange.bind(this, "crear")}
      >
        Crear nueva superReserva
      </button>

      <button
        className={props.activeOutputType === "calendario" ? "active" : ""}
        onClick={props.onChange.bind(this, "calendario")}
      >
        Calendario
      </button>
    </div>
  );
};

export default SuperBookingsControl;
