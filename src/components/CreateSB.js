import React, { Component } from "react";
import Box from "@mui/material/Box";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import moment from "moment";
// import { RoomContext } from "../context";
import { Redirect } from "react-router";

class CreateSB extends Component {
  state = {
    nombre: "",
    email: "",
    personas: "",
    comentarios: "",
    entrada: "",
    salida: "",
    cuarto: "",
    estado: "",
    pais: "",
    precio: "",
    fecha: "",

    startDate: new Date(),
    endDate: new Date(),

    passedpricevalue: "",

    roomvalue: "",

    redirect: false,
  };

  constructor(props) {
    super(props);
    this.nameElRef = React.createRef();
    this.countryElRef = React.createRef();
    this.emailElRef = React.createRef();
    this.roomElRef = React.createRef();
    this.personsElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.commentsElRef = React.createRef();
    this.fromDateElRef = React.createRef();
    this.toDateElRef = React.createRef();
    this.dateofSentRequestElRef = React.createRef();
    this.statusOfSuperBooking = React.createRef();
  }
  //dates
  calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);
    return endDate.diff(startDate, "days");
  }

  modalConfirmHandler2 = (superBookingId) => {
    // var date = new Date().toLocaleString();
    var date = new Date();
    this.setState({ date });
    alert("Has reservado a: " + this.nameElRef.current.value);

    // alert("name is " + date);

    // this.setState({ creating: false });
    const name = this.nameElRef.current.value;
    const country = this.countryElRef.current.value;
    const email = this.emailElRef.current.value;
    const room = this.state.roomvalue;
    const persons = +this.personsElRef.current.value;
    const price = +this.state.passedpricevalue;
    const comments = this.commentsElRef.current.value;

    const fromDate = this.state.startDate;

    const toDate = this.state.endDate;

    // \change this one
    const dateofSentRequest = date;
    const statusOfSuperBooking = "reservado";

    // if (
    //   name.trim().length === 0 ||
    //   country.trim().length === 0 ||
    //   email.trim().length === 0 ||
    //   room.trim().length === 0 ||
    //   persons <= 0 ||
    //   price <= 0 ||
    //   comments.trim().length === 0 ||
    //   fromDate.trim().length === 0 ||
    //   toDate.trim().length === 0
    //   // dateofSentRequest.trim().length === 0
    // ) {
    //   return console.log("a value to send is missing");
    // }

    const superBooking = {
      name,
      country,
      email,
      room,
      persons,
      price,
      comments,
      fromDate,
      toDate,
      dateofSentRequest,
      statusOfSuperBooking,
    };
    console.log(superBooking);

    const requestBody = {
      query: `
      mutation createSuperBooking($name: String!,  $country: String!, $email: String!, $room: String!, $persons: Float!, $price: Float!, $comments: String! , $fromDate: String!, $toDate: String!, $dateofSentRequest: String!, $statusOfSuperBooking: String!) {
        createSuperBooking(superBookingInput: {name: $name, country: $country, email: $email, room: $room, persons: $persons, price: $price, comments: $comments, fromDate: $fromDate, toDate: $toDate, dateofSentRequest: $dateofSentRequest, statusOfSuperBooking: $statusOfSuperBooking}) {
          _id
          name
          country
          email
          room
          persons
          price
          comments
          fromDate
          toDate
          dateofSentRequest
          statusOfSuperBooking
        }
      }
    `,
      variables: {
        name: name,
        country: country,
        email: email,
        room: room,
        persons: persons,
        price: price,
        comments: comments,
        fromDate: fromDate,
        toDate: toDate,
        dateofSentRequest: dateofSentRequest,
        statusOfSuperBooking: statusOfSuperBooking,
      },
    };
    // console.log("requestBody is: " + requestBody);

    // fetch("http://localhost:8000/graphql", {
    fetch("/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }

        return res.json();
      })
      .then((resData) => {
        // console.log("resData:  " + resData);
        // this.setState((prevState) => {
        //   const updatedSuperBookings = [...prevState.superBookings];
        //   updatedSuperBookings.push({
        //     _id: resData.data.createSuperBooking._id,
        //     name: resData.data.createSuperBooking.name,
        //     country: resData.data.createSuperBooking.country,
        //     email: resData.data.createSuperBooking.email,
        //     room: resData.data.createSuperBooking.room,
        //     persons: resData.data.createSuperBooking.persons,
        //     price: resData.data.createSuperBooking.price,
        //     comments: resData.data.createSuperBooking.comments,
        //     fromDate: resData.data.createSuperBooking.fromDate,
        //     toDate: resData.data.createSuperBooking.toDate,
        //     dateofSentRequest:
        //       resData.data.createSuperBooking.dateofSentRequest,
        //   });
        //   return { superBookings: updatedSuperBookings };
        // });
      })
      .catch((err) => {
        console.log(err);
      });

    // book now end

    this.setState({
      creating: false,
      selectedSuperBooking: null,
      redirect: true,
    });
    // this.forceUpdate();

    // history.push("/guia");
  };

  //Date pickker
  handleChangeStart = (date) => {
    this.setState({
      startDate: date,
    });
  };
  handleChangeEnd = (date) => {
    this.setState({
      endDate: date,
    });
  };
  //input form for rooms
  handleChange5(event) {
    console.log("event: " + event.target.value);
    this.setState({ roomvalue: event.target.value });
  }
  render() {
    const { startDate, endDate } = this.state;
    const daysLeft = this.calculateDaysLeft(startDate, endDate);
    const multiply = 40 * daysLeft;
    this.state.passedpricevalue = multiply;

    //the value of room price
    // this.state.passedpricevalue = room.price * daysLeft;

    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/guia" />;
    }

    return (
      <section className="sectionbookingssending">
        <div
          className="modal2"
          id="theBookingForm"
          // show={this.state.show}
          // handleClose={this.hideModal}

          role="dialog"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-4">
                <h3>El Formulario de superReservas</h3>
                <p className="lead">Llenar completo</p>
              </div>
              <div>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                  <div>
                    <TextField
                      required
                      // ref={this.nameElRef}
                      inputRef={this.nameElRef}
                      label="El nombre de la persona"
                      id="outlined-start-adornment"
                      sx={{ m: 1, width: "25ch" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            Nombre:{" "}
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      required
                      inputRef={this.countryElRef}
                      label="El pais de la persona"
                      id="outlined-start-adornment"
                      sx={{ m: 1, width: "25ch" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            Pais:{" "}
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      required
                      inputRef={this.emailElRef}
                      label="Email"
                      id="outlined-start-adornment"
                      sx={{ m: 1, width: "25ch" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            Email:{" "}
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </Box>

                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "40ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    inputRef={this.personsElRef}
                    id="outlined-basic"
                    label="Cuantas personas son: "
                    variant="outlined"
                    type="number"
                  />
                  {/* <TextField
                    disabled
                    inputRef={this.roomElRef}
                    id="outlined-basic"
                    label="arreglar este y poner opciones"
                    variant="outlined"
                  /> */}

                  <select
                    className="form-control"
                    value={this.state.roomvalue}
                    inputRef={this.roomElRef}
                    onChange={(event) => this.handleChange5(event)}
                  >
                    <option value="select">Selecciona cuarto</option>
                    <option value="Cuarto Azul">Cuarto Azul</option>
                    <option value="Cuarto Blanco">Cuarto Blanco</option>
                    <option value="La Casita">La Casita</option>
                  </select>

                  <TextField
                    inputRef={this.commentsElRef}
                    id="outlined-basic"
                    label="Comentarios"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Box>
              </div>
              <div className="modal-footer"></div>
              <div className="row my-3">
                <div className="col-md-6 col-12">
                  <div className="form-group ml-2">
                    <label
                      htmlFor="Fromdate"
                      className="font-weight-normal mr-3 ml-3"
                    >
                      desde la fecha{" "}
                    </label>
                    <DatePicker
                      ref={this.state.entrada}
                      selected={this.state.startDate}
                      onChange={this.handleChangeStart}
                      // selected={startDate}
                      // onChange={(date) => setStartDate(date)}
                      className="form-control"
                      // selectsStart
                      // startDate={startDate}
                      // endDate={endDate}
                      dateFormat="dd/MM/yy"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="form-group mr-2">
                    <label htmlFor="Todate" className="font-weight-normal mr-3">
                      Hasta la fecha{" "}
                    </label>
                    <DatePicker
                      ref={this.state.salida}
                      selected={this.state.endDate}
                      onChange={this.handleChangeEnd}
                      className="form-control"
                      dateFormat="dd/MM/yy"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <h6 className="font-weight-normal ml-3">
                    Numero de dias : {daysLeft}
                  </h6>
                </div>
                <div className="col-md-6 col-12">
                  <h6 className="font-weight-bold">
                    Precio por dia :{" "}
                    <span className="badge badge-info">€{40}</span>
                  </h6>
                  <h6 className="font-weight-bold">
                    Total a ser recibido :{" "}
                    <span className="text-primary">
                      €<small ref={this.state.precio}>{daysLeft * 40}</small>
                    </span>
                  </h6>
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    // data-toggle="modal"
                    // href="#thanks"
                    // data-dismiss="modal"
                    onClick={this.modalConfirmHandler2}
                    // onClick={() => {
                    //   alert("Booking request sent");
                    // }}
                  >
                    Crear superReserva
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CreateSB;
