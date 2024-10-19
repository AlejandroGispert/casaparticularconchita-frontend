import React from "react";

const SuperBookingItem = (props) => (
  <tr key={props.superBookingId} className="superbooking__list-item">
    <td>{props.name}</td>
    <td>
      <a href={"mailto:" + props.email} target="_blank" rel="noreferrer">
        {props.email}
      </a>
    </td>
    <td>{props.country}</td>
    <td>{props.room}</td>
    <td>{props.persons}</td>
    <td>{props.comments}</td>

    <td>{props.fromDate}</td>
    <td>{props.toDate}</td>
    <td>
      <span
        className={
          props.statusOfSuperBooking === "reservado"
            ? "badge badge-pill badge-success"
            : "badge badge-pill badge-warning"
        }
      >
        {props.statusOfSuperBooking}
      </span>
      {/* <span className={props.isBoxVisible}>{props.statusOfSuperBooking}</span> */}
      {/* change to: badge badge-pill badge-success */}
      {/* 
      {
          this.state.Statusclicked
            ? "badge badge-pill badge-success"
            : "badge badge-pill badge-warning"
        }
         */}
    </td>
    <td>€{props.price}</td>
    {/* {new Date(props.toDate).toLocaleDateString()} */}

    <td>{props.dateofSentRequest}</td>

    <td>
      <button
        className="btn"
        onClick={props.onDetail.bind(this, props.superBookingId)}
      >
        Detalles
      </button>

      <button
        className="btn"
        onClick={props.onDelete.bind(this, props.superBookingId)}
      >
        Eliminar
      </button>
    </td>
  </tr>
);

export default SuperBookingItem;
