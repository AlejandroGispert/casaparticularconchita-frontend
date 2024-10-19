import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";
import { es } from "date-fns/locale";
// import SuperBookingsPage from "../../pages/SuperBookings";
require("moment/locale/es.js");
const localizer = momentLocalizer(moment);

// CHANGE ALL TO LUXON IF THIS ALL DOESNT WORK

registerLocale("es", es);

const SuperBookingsCalendar = (props) => {
  // const PassallDatafromBooking = props.bookings.map((booking) => {
  // console.log("titulo: " + booking.event.title);

  // let createdTitle = booking.event.title;

  //ACTIVATE THIS
  // let createdDatee33 = moment(booking.createdAt).format("YYYY,MM,DD");

  // console.log("createdAtmoment22: " + moment(createdDatee22).toDate());

  // console.log(
  //   "createdAtmoment22 +1: " +
  //     moment(createdDatee22).add(1, "months").toDate()
  // );

  // {tabs.map((item) => {

  //           return (
  //                <Tab
  //                     label={item.title}
  //                     key={item.index}
  //                     component={Link}
  //                     to={item.path}
  //                 />
  //            );
  //           })};

  //   return {
  //     title: createdTitle,
  //     allDay: true,
  //     start: createdDatee33,
  //     end: createdDatee33,
  //   };
  // });

  ////////ALLL DATA FROM BOOKINH END

  //ALL DATA FROM SUPER BOOKING START

  const PassAllDatafromSuperBooking = props.superBookings.map(
    (superBooking) => {
      // console.log("titulo: " + booking.event.title);
      if (superBooking.statusOfSuperBooking === "reservado") {
        let createdName = superBooking.name + " - de - " + superBooking.country;
        // console.log("createdName: " + createdName);
        // let createdDatee22 = moment(booking.createdAt).toDate();
        let fromDate = moment(superBooking.fromDate).format("YYYY,MM,DD");

        let toDate = moment(superBooking.toDate)
          .add(1, "days")
          .format("YYYY,MM,DD");
        // let toDate = moment(superBooking.createdAt).format("YYYY,MM,DD");

        // console.log("fromDate: " + superBooking.fromDate);
        // console.log("toDate: " + superBooking.toDate);

        // console.log("createdAtmoment22: " + moment(createdDatee22).toDate());

        // console.log(
        //   "createdAtmoment22 +1: " +
        //     moment(createdDatee22).add(1, "months").toDate()
        // );

        // {tabs.map((item) => {

        //           return (
        //                <Tab
        //                     label={item.title}
        //                     key={item.index}
        //                     component={Link}
        //                     to={item.path}
        //                 />
        //            );
        //           })};

        return {
          title: createdName,
          allDay: true,
          start: fromDate,
          end: toDate,
        };
      }
    }
  );
  // console.log("createdTitle2: " + PassAllDatafromSuperBooking);

  //END PASS SUPERVBOOKINGS VALUES

  // const events = [
  //   {
  //     title: "locuras",
  //     allDay: true,
  //     start: new Date(2022, 0, 2),
  //     end: new Date(2022, 0, 2),
  //   },
  //   {
  //     title: "Vacaciones",
  //     start: new Date(2022, 6, 7),
  //     end: new Date(2022, 6, 10),
  //   },
  //   {
  //     title: "Conferencia",
  //     start: new Date(2022, 6, 20),
  //     end: new Date(2022, 6, 23),
  //   },
  // ];

  const [newEvent, setNewEvent] = useState({
    title: "",
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
  });
  const [allEvents, setAllEvents] = useState(PassAllDatafromSuperBooking);

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="SuperBookingsCalendar">
      {/* <h1>Calendario</h1> */}
      <div className=" d-flex justify-content-end mr-5 mt-5">
        <button
          className="btn btn-primary hidden-print"
          onClick={() => window.print()}
        >
          Imprimir
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 1000, margin: "50px" }}
        messages={{
          next: "Alante",
          previous: "Atras",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
        }}
      />

      {/* <h2>Adiciona las reservas</h2>
      <div>
        <input
          type="text"
          placeholder="Titulo"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          locale="es"
          dateFormat="d MMMM, yyyy"
          placeholderText="Fecha Inicial"
          style={{ marginRight: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          locale="es"
          dateFormat="d MMMM, yyyy"
          placeholderText="Fecha final"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button
          className="btn"
          style={{ margin: "10px 0 40px 0" }}
          onClick={handleAddEvent}
        >
          Adiciona reserva
        </button>
      </div> */}
    </div>
  );
};

export default SuperBookingsCalendar;
