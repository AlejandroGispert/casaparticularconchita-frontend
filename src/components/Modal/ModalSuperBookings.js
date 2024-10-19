import React from "react";

const Modal2 = (props) => (
  <div className="modalSuperbooking">
    <header className="modal__header5">
      <h4>{props.name}</h4>
      {"  "}
      <p>{props.country}</p>
    </header>

    <section className="modal__content5">
      <h4>Datos: </h4>
      <h6>{props.children}</h6>
      {/* <section className="modal__actions5">
        <h5>Reasignar cuarto</h5>
        <button class="btn-secondary" id="btnredroom">
          Cuarto entrada izq
        </button>
        <button class="btn-secondary" id="btnblueroom">
          Cuarto azul
        </button>
        <button class="btn-secondary" id="btngreenroom">
          La casita
        </button>
      </section> */}
    </section>
    <section className="modal__actions5">
      {props.canCancel && (
        <button className="btn" onClick={props.onCancel}>
          Cancelar
        </button>
      )}

      {props.statusOfSuperBooking === "No reservado" && (
        <>
          {props.canConfirm && (
            <button className="btn" onClick={props.onConfirm}>
              {props.confirmText}
            </button>
          )}
        </>
      )}
    </section>
  </div>
);

export default Modal2;
