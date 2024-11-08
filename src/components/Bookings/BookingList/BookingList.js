import React from "react";

// import './BookingList.css';

const bookingList = (props) => (
  <ul className="bookings__list">
    {props.bookings.map((booking) => {
      return (
        <li key={booking._id} className="bookings__item">
          <div className="bookings__item-data">
            {booking.event.title} -{" "}
            {new Date(booking.createdAt).toLocaleDateString()}
            <p>Cuarto: </p>
          </div>
          <div className="bookings__item-actions">
            <button className="btn">Detalles</button>

            <button
              className="btn-danger p-1 pl-2 pr-2"
              onClick={props.onDelete.bind(this, booking._id)}
            >
              Cancelar
            </button>
          </div>
        </li>
      );
    })}
  </ul>
);

export default bookingList;
