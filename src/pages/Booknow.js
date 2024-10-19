import React, { Component } from "react";
import { RoomContext } from "../context";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

import defaultBcg from "../images/latest pics/finalpics/our rooms NEWWWWW.png";
// import Stack from "react-bootstrap/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
// import email from "../email/email";
// import { Modal, Button } from "react-bootstrap";

export default class Booknow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
      startDate: new Date(),
      endDate: new Date(),

      superBookings: [],
      //modal
      // class1: "on",
      // class2: "off",

      passedpricevalue: "",

      nameTosend: "",
      emailTosend: "",
      commentTosend: "",
      fromDateTosend: "",
      toDateTosend: "",
      roomTosend: "",
    };

    this.nameElRef = React.createRef();
    this.countryElRef = React.createRef();
    this.emailElRef = React.createRef();

    this.roomElRef = React.createRef();

    this.personsElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.commentsElRef = React.createRef();
    this.fromDateElRef = React.createRef();
    this.toDateElRef = React.createRef();
    this.statusOfSuperBooking = React.createRef();
    // console.log(this.props);
    // this.nameElRef = (name) => {
    //   this.name = name;
    // };
    // this.state.name = this.nameElRef;
    console.log(this.nameElRef);
  }

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

  // dateHandler = () => {
  //   // this.setState({ creating: true });
  //   var date = new Date().toLocaleString();
  //   this.setState({ date });
  //   alert("Booking request sent now at: " + date);
  // };

  modalConfirmHandler = () => {
    console.log("esteee es:  " + this.state.passedpricevalue);

    // sendMail()
    //   .then((result) => console.log("Email sent...", result))
    //   .catch((error) => console.log(error.message));

    var date = new Date().toLocaleString();
    // var date = new Date();
    this.setState({ date });
    alert("Booking request sent");

    // alert("name is " + date);

    // this.setState({ creating: false });
    const name = this.nameElRef.current.value;
    const country = this.countryElRef.current.value;
    const email = this.emailElRef.current.value;
    const room = this.state.slug;
    const persons = +this.personsElRef.current.value;
    const price = +this.state.passedpricevalue;
    const comments = this.commentsElRef.current.value;
    const fromDate = this.state.startDate.toISOString();
    // const fromDate = this.state.startDate.toLocaleDateString();
    const toDate = this.state.endDate.toISOString();
    // const toDate = this.state.endDate.toLocaleDateString();
    const dateofSentRequest = date;
    const statusOfSuperBooking = "No reservado";

    //data to email
    this.setState({
      nameTosend: name,
      emailTosend: email,
      commentTosend: comments,
      fromDateTosend: fromDate,
      toDateTosend: toDate,
      roomTosend: room,
    });

    console.log("el mail" + this.state.email);

    if (
      name.trim().length === 0 ||
      country.trim().length === 0 ||
      email.trim().length === 0 ||
      room.trim().length === 0 ||
      persons <= 0 ||
      price <= 0 ||
      comments.trim().length === 0 ||
      fromDate.trim().length === 0 ||
      toDate.trim().length === 0
      // dateofSentRequest.trim().length === 0
    ) {
      return console.log("a value to send is missing");
    }

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
        console.log("resData:  " + resData);
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
  };

  //dates
  calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);
    return endDate.diff(startDate, "days");
  }
  static contextType = RoomContext;

  handleChange(superBooking) {
    this.setState({ superBookings: superBooking.target.value });
  }

  mailSubmitChange = (e) => this.setState({ [e.target.name]: e.target.value });

  // namehandler(event) {
  //   event.value = this.nameElRef.current.value;
  // }
  // emailhandler(event) {
  //   event.value = this.emailElRef.current.value;
  // }

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    const { startDate, endDate } = this.state;
    const daysLeft = this.calculateDaysLeft(startDate, endDate);
    // console.log("startdate: " + startDate.toLocaleDateString());
    // console.log("enddate: " + endDate.toLocaleDateString());
    // console.log("room: " + room);
    // this.state.fromstate = startDate.toLocaleDateString();
    // console.log("ENDDATE " + ENDDATE);
    // const ENDDATE = this.state.myvalue;
    // ENDDATE = (e) => {
    //   e.toDateElRef;
    // };

    if (!room) {
      return (
        <div className="container roomerror">
          <div className="row my-5">
            <div className="col-md-6 col-12 mx-auto">
              <div className="card shadow-lg border-0 p-4 error">
                <h1 className="text-center display-4">SORRY</h1>
                <h3>No such room could be found...</h3>
                <Link to="/rooms" className="btn btn-warning mt-4 ">
                  Back to Rooms
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
    const { name, capacity, size, price, breakfast, pets, images } = room;
    // const {} = sendBookingRequest;
    // this.priceElRef = room.price;
    // console.log("this price is : " + room.price);

    //the value of room price
    this.state.passedpricevalue = room.price * daysLeft;

    const [mainImg, ...defaultBcg] = images;
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
            <div>
              <h1 className="display-4">Booking</h1>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 my-auto">
                <img
                  src={mainImg || defaultBcg}
                  className="img-fluid"
                  alt="selected room"
                />
              </div>
              <div className="col-md-6 col-12 my-auto">
                <h1>Details</h1>
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th>Room Type</th>
                      <td>{name}</td>
                    </tr>
                    <tr>
                      <th>Capacity</th>
                      <td>{capacity}</td>
                    </tr>
                    <tr>
                      <th>Size</th>
                      <td>{size} sqft.</td>
                    </tr>
                    <tr>
                      <th>Breakfast</th>
                      <td>
                        {breakfast === true ? `Included` : `Not Included`}
                      </td>
                    </tr>
                    <tr>
                      <th>Pets</th>
                      <td>{pets === true ? `Allowed` : `Not Allowed`}</td>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="Fromdate" className="font-weight-bolder mr-3">
                    From Date{" "}
                  </label>
                  <DatePicker
                    ref={this.state.myvalue}
                    selected={this.state.startDate}
                    onChange={this.handleChangeStart}
                    // selected={startDate}
                    // onChange={(date) => setStartDate(date)}
                    className="form-control"
                    // selectsStart
                    // startDate={startDate}
                    // endDate={endDate}
                  />
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="Todate" className="font-weight-bolder mr-3">
                    To Date{" "}
                  </label>
                  <DatePicker
                    ref={this.toDateElRef}
                    selected={this.state.endDate}
                    onChange={this.handleChangeEnd}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <h6 className="font-weight-bolder">
                  Number of days : {daysLeft}
                </h6>
                <mark>Checkin is 24 hours open</mark>
              </div>
              <div className="col-md-6 col-12">
                <h6 className="font-weight-bold">
                  Price per day :{" "}
                  <span className="badge badge-info">€{price}</span>
                </h6>
                <h6 className="font-weight-bold">
                  Total Price to be paid :{" "}
                  <span className="text-primary">
                    €<small ref={this.priceElRef}>{daysLeft * price}</small>
                  </span>
                </h6>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="payment" className="font-weight-bolder">
                    Payment Options
                  </label>
                  <select className="form-control">
                    <option>Select payment option</option>
                    {/* <option value="Credit">Credit Card</option>
                    <option value="Debit">Debit Card</option> */}
                    <option value="checkin">Pay during Check-in</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6 col-12 my-auto">
                <div className="col-md-6 col-12 float-right">
                  <Link
                    className="btn btn-block text-light"
                    // data-toggle="modal"
                    // data-target="#theBookingForm"
                    to={"sectionbookingssending"}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    // to="#theBookingForm"
                    // onClick={this.sendBookingRequest}
                    // variant="primary"
                    // show={show}
                    // onClick={this.openModal}
                  >
                    Finalize Booking
                  </Link>
                  <a
                    href="/rooms"
                    className="btn-block d-flex justify-content-center"
                  >
                    Back to Rooms
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------- */}
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
                  <h3>The Booking Form</h3>
                  <p className="lead">Fill booking request</p>
                </div>
                <div>
                  <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    <div>
                      <TextField
                        required
                        // ref={this.nameElRef}
                        inputRef={this.nameElRef}
                        label="Your name"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: "25ch" }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              Name:{" "}
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        required
                        inputRef={this.countryElRef}
                        label="Your Country"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: "25ch" }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              Country:{" "}
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
                      label="Persons"
                      variant="outlined"
                      type="number"
                    />
                    <TextField
                      disabled
                      inputRef={this.roomElRef}
                      id="outlined-basic"
                      label={this.state.slug}
                      variant="outlined"
                    />
                    <TextField
                      inputRef={this.commentsElRef}
                      id="outlined-basic"
                      label="Comments"
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  </Box>
                </div>
                <div className="modal-footer">
                  {/* <button
                  type="button"
                  className="btn btn-secondary"
                  // data-toggle="modal"
                  // href="#thanks"
                  // data-dismiss="modal"
                  // onClick={() => {}}
                  data-dismiss="modal"
                  aria-label="Close"
                ></button> */}
                  {/* <button
                    className="btn btn-secondary"
                    onClick={this.startCreateEventHandler}
                  ></button> */}
                  <form
                    action="https://formsubmit.co/18977bb3a762a03a79ba195cc6fec1de"
                    method="POST"
                  >
                    <input
                      type="hidden"
                      name="_template"
                      value="table"
                      className="booknowAndSendtomail"
                    ></input>
                    <input
                      type="hidden"
                      name="_subject"
                      value="Peticion de Reserva a la casa de conchita/alex"
                      className="booknowAndSendtomail"
                    ></input>
                    {/* //to original page */}
                    <input
                      type="hidden"
                      name="_next"
                      value="/"
                      className="booknowAndSendtomail"
                    ></input>
                    <input
                      type="hidden"
                      name="nombre"
                      value={this.state.nameTosend}
                      onChange={this.mailSubmitChange}
                      className="booknowAndSendtomail"
                    ></input>
                    <input
                      type="hidden"
                      name="email"
                      value={this.state.emailTosend}
                      onChange={this.mailSubmitChange}
                      className="booknowAndSendtomail"
                    ></input>
                    <input
                      type="hidden"
                      name="mensaje"
                      value={this.state.commentTosend}
                      onChange={this.mailSubmitChange}
                      className="booknowAndSendtomail"
                    ></input>
                    <input
                      type="hidden"
                      name="desde"
                      value={this.state.fromDateTosend}
                      onChange={this.mailSubmitChange}
                      className="booknowAndSendtomail"
                    ></input>
                    <input
                      type="hidden"
                      name="hasta"
                      value={this.state.toDateTosend}
                      onChange={this.mailSubmitChange}
                      className="booknowAndSendtomail"
                    ></input>
                    <input
                      type="hidden"
                      name="cuarto"
                      value={this.state.roomTosend}
                      onChange={this.mailSubmitChange}
                      className="booknowAndSendtomail"
                    ></input>
                    <input
                      type="hidden"
                      name="_cc"
                      value="conchitaestela2022@gmail.com"
                    ></input>
                    <button
                      type="submit"
                      className="btn btn-secondary"
                      // data-toggle="modal"
                      // href="#thanks"
                      // data-dismiss="modal"
                      onClick={this.modalConfirmHandler}
                      // onClick={() => {
                      //   alert("Booking request sent");
                      // }}
                    >
                      Submit Booking Request
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
