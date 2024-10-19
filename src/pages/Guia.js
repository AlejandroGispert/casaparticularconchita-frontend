import React from "react";

export default function Guia() {
  return (
    <div className="m-5">
      <h2>Hola Familia</h2>
      <h5>
        Aqui les pongo una pequena descripcion de como funciona esta pagina:
      </h5>

      <p>
        {" "}
        Los que vean la pagina y quieran reservar un cuarto, pueden ven la
        habitacion deseada en la pagina "Rooms".
      </p>
      <p>
        {" "}
        Una vez que han entrado al cuarto deseado, los interesados pueden hacer
        su reserva, insertando todos los datos incluidas las fechas, pais,
        nombre, etc.
      </p>
      <p>
        Una vez que la peticion del extranjero ha sido hecha. Nosotros la
        recibimos en la pagina del "Panel de Control".
      </p>

      <p>
        {" "}
        Dentro de SuperReservaciones en la pestana recibidos hay una lista de
        todas las "peticiones" a las cuales podemos reservar, apretando el boton
        "detalles", y mas adentro "reservar".
      </p>

      <p>
        Una vez que la reserva ha sido hecha la podemos ver de color verde en la
        lista, bajo "status". Automaticamente podemos ver esta reserva en el
        Calendario.
      </p>
      <p>
        -las superreservas que se crean, son automaticamente puestas como
        reservados en verde.
      </p>
      <p>
        Dentro del calendario, donde dice agenda, hay una lista ordenada por
        dias de las reservas bookeadas.
      </p>

      <p>
        Se han agregado links en la lista de reservas, para enviar mails a los
        clientes.
      </p>
      <p>
        antes de eliminar las reservas, hay un link para mandar mail para pedir
        opiniones
      </p>

      <p>Un Besote</p>
      <p>Lex</p>
      <div>
        <button
          aria-expanded="false"
          data-toggle="collapse"
          className="text-muted btn-link btn-outline-light "
          href="#collapseExample"
          aria-controls="collapseExample"
          data-target="#collapseExample"
        >
          errata ...
        </button>

        <div
          className="blockquote-footer collapse"
          // aria-expanded="false"
          id="collapseExample"
        >
          <p>
            -la duracion del login es 3horas activo a no se que recarges la
            pagina, ahi se pierde
          </p>
          <p>
            <span className="text-success">RESUELTOO!!</span> -pagina de
            superreservas no recarga automaticamente. cuando se aprieta borrar,
            se borra en el database, pero hay que ir a otra pestana y volver a
            la lista para verlo.
          </p>
          <p>-Si se recarga la pagina se pierde el login</p>
          <p>
            --1el sistema de reconocimiento de password una vez que ya ha sido
            puesto, esta en el codigo, pero no puedo identificar desde aqui si
            trabaja o no{" "}
          </p>

          <p>
            -Las superreservas que son reservadas, crean un duplicado, y hay que
            borrarlas manualmente.
          </p>

          <p>-El calendario no funciona en Safari.</p>
        </div>
      </div>
    </div>
  );
}
