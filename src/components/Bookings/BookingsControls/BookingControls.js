import React from "react";

// import './BookingsControls.css';

const bookingsControl = (props) => {
  return (
    <div className="bookings-control">
      <button
        className={props.activeOutputType === "list" ? "active" : ""}
        onClick={props.onChange.bind(this, "list")}
      >
        Lista
      </button>
      {/* <button
        className={props.activeOutputType === "calendar" ? "active" : ""}
        onClick={props.onChange.bind(this, "calendar")}
      >
        Calendar
      </button> */}
      <button
        className={props.activeOutputType === "chart" ? "active" : ""}
        onClick={props.onChange.bind(this, "chart")}
      >
        Chart
      </button>
    </div>
  );
};

export default bookingsControl;
