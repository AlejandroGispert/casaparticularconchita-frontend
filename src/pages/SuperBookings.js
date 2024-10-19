import React, { Component } from "react";
import Spinner from "../components/Spinner/Spinner";
import AuthContext from "../authContext/auth-context";
import SuperBookingList from "../components/SuperBookingList/SuperBookingList";
//calendario
import SuperBookingsControl from "../components/SuperBookingControls/SuperBookingControls";
import SuperBookingsCalendar from "../components/SuperBookingsCalendar/SuperBookingsCalendar";

import "bootstrap/dist/css/bootstrap.min.css";
// import Modal from "../components/Modal/Modal";

import Backdrop from "../components/Backdrop/Backdrop";
import { Table, Button } from "react-bootstrap";
// import { unstable_composeClasses } from "@mui/material";
import Modal2 from "../components/Modal/ModalSuperBookings";

import CreateSB from "../components/CreateSB";
import ModalCancel from "../components/Modal/ModalCancel";

// import { format } from 'date-fns';

// const PLAYER_ONE_SYMBOL = "pending";
// const PLAYER_TWO_SYMBOL = "nOt";

class SuperBookingsPage extends Component {
  state = {
    //this to force reload
    // keyvalue: 0,
    // this one TO RELOAD LIST

    //
    creating: false,
    creating2: false,
    superBookings: [],
    isLoading: false,
    selectedSuperBooking: null,
    selectedSuperBooking2: null,
    //to calender

    val: "",

    //controls
    outputType: "lista",

    //FROM TABLE
    books: [],
    newBookData: {
      name: "",
      persons: "",
    },
    editBookData: {
      id: "aqui",

      // nombre: "testnombre",
      // email: "testemail",
      // personas: "testpersons",
      // comentarios: "testcomments",
      // entrada: "testentrada",
      // salida: "testsalida",
      // cuarto: "testcuarto",
      // estado: "testestado",
    },
    newBookModal: false,
    editBookModal: false,

    nombre: "",
    email: "",
    personas: "",
    comentarios: "",
    entrada: "",
    salida: "",
    cuarto: "",
    estado: "",
    pais: "",
    precio: +"",
    fecha: "",

    // change status
    Statusclicked: "No reservado",
    isBoxVisible: "badge badge-pill badge-warning",

    //to forceupdate
    users: "bueno",

    //modalclick count
    clickCount: 0,

    //activate modal3 bookit
    // modal3activate: false,
  };
  isActive = true;

  static contextType = AuthContext;

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

    //for the submit form
    // this.state = { value: "coconut" };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchSuperBookings();
  }

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const name = this.nameElRef.current.value;
    const country = this.countryElRef.current.value;
    const email = this.countryElRef.current.value;
    const room = this.roomElRef.current.value;
    const persons = this.personsElRef.current.value;
    const price = +this.priceElRef.current.value;
    const comments = this.commentsElRef.current.value;
    const fromDate = this.fromDateElRef.current.value;
    const toDate = this.toDateElRef.current.value;
    const dateofSentRequest = this.dateofSentRequestElRef.current.value;
    const statusOfSuperBooking = this.statusOfSuperBookingElRef.current.value;

    if (
      name.trim().length === 0 ||
      price <= 0 ||
      persons <= 0 ||
      email.trim().length === 0 ||
      country.trim().length === 0 ||
      comments.trim().length === 0 ||
      fromDate.trim().length === 0 ||
      toDate.trim().length === 0 ||
      dateofSentRequest.trim().length === 0
    ) {
      return;
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
          mutation createSuperBooking($name: String!,  $country: String!, $email: String!, $room: String!, $persons: Float!, $price: Float!, $comments:String! , $fromDate: String!, $toDate: String!, $dateofSentRequest: String!, $statusOfSuperBooking: String! ) {
            createEvent(eventInput: {name: $name, country: $country, email: $email, room: $room, persons: $persons, price: $price, comments: $comments, fromDate: $fromDate, toDate: $toDate, dateofSentRequest: $dateofSentRequest, statusOfSuperBooking: $statusOfSuperBooking}) {
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

    // const token = this.context.token;

    // fetch("http://localhost:8000/graphql", {
    fetch("/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then((resData) => {
        this.setState((prevState) => {
          const updatedEvents = [...prevState.events];
          updatedEvents.push({
            _id: resData.data.createSuperBooking._id,
            name: resData.data.createSuperBooking.name,
            country: resData.data.createSuperBooking.country,
            email: resData.data.createSuperBooking.email,
            room: resData.data.createSuperBooking.room,
            persons: resData.data.createSuperBooking.persons,
            price: resData.data.createSuperBooking.price,
            comments: resData.data.createSuperBooking.comments,
            fromDate: resData.data.createSuperBooking.fromDate,
            toDate: resData.data.createSuperBooking.toDate,
            dateofSentRequest:
              resData.data.createSuperBooking.dateofSentRequest,
            statusOfSuperBooking:
              resData.data.createSuperBooking.statusOfSuperBooking,
          });
          return { events: updatedEvents };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false, selectedSuperBooking: null });
  };

  modalCancelHandler2 = () => {
    this.setState({ creating: false, selectedSuperBooking2: null });
  };

  fetchSuperBookings() {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            superBookings {
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
        const superBookings = resData.data.superBookings;

        // data to state
        // this.setState({
        //   name: resData.data.superBookings.name,

        //   email: resData.data.superBookings.email,
        //   cuarto: resData.data.superBookings.room,
        //   personas: resData.data.superBookings.persons,

        //   comentarios: resData.data.superBookings.comments,
        //   entrada: resData.data.superBookings.fromDate,
        //   salida: resData.data.superBookings.toDate,

        //   country: resData.data.superBookings.country,
        //   dateofSentRequest: resData.data.superBookings.dateofSentRequest,
        //   price: resData.data.superBookings.price,
        // });

        if (this.isActive) {
          this.setState({ superBookings: superBookings, isLoading: false });
        }
      })
      .catch((err) => {
        console.log(err);
        if (this.isActive) {
          this.setState({ isLoading: false });
        }
      });
  }

  //put this on button on rows
  showDetailHandler = (superBookingId) => {
    // console.log("superBookingId: " + superBookingId);
    this.setState((prevState) => {
      const selectedSuperBooking = prevState.superBookings.find(
        (e) => e._id === superBookingId
      );
      return { selectedSuperBooking: selectedSuperBooking };
    });
  };

  showDetailHandler2 = (superBookingId) => {
    // console.log("superBookingId: " + superBookingId);
    this.setState((prevState) => {
      const selectedSuperBooking2 = prevState.superBookings.find(
        (e) => e._id === superBookingId
      );
      return { selectedSuperBooking2: selectedSuperBooking2 };
    });
  };

  //NOT WORKING DELETE
  // deleteSuperbookingHandler = (superBookingId) => {
  //   this.setState((prevState) => {
  //     const selectedSuperBooking = prevState.superBookings.find(
  //       (e) => e._id === superBookingId
  //     );
  //     return { selectedSuperBooking: selectedSuperBooking };
  //   });
  // };

  bookEventHandler = (index) => {
    // this.setState({ Statusclicked: "reservado" });

    // this.setState({
    //   Statusclicked: "clicked" ? "NOT clicked" : "clicked",
    // });

    if (this.state.Statusclicked === "No reservado") {
      this.setState({
        Statusclicked: "reservado",
        isBoxVisible: "badge badge-pill badge-success",
      });
    } else {
      this.setState({
        Statusclicked: "No reservado",
        isBoxVisible: "badge badge-pill badge-warning",
      });
    }

    //ORIGINAL
    if (!this.context.token) {
      this.setState({ selectedSuperBooking: null });
      return;
    }
    console.log("es null: " + this.state.selectedSuperBooking._id);
    const requestBody = {
      query: `
               mutation BookEvent($id: ID!) {
                 bookEvent(eventId: $id) {
                   _id
                   createdAt
                  updatedAt
                }
              }
             `,
      variables: {
        id: this.state.selectedSuperBooking._id,
      },
    };

    // fetch("http://localhost:8000/graphql", {
    fetch("/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token,
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        this.setState({ selectedSuperBooking: null });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentWillUnmount() {
    this.isActive = false;
  }

  //this is for opening button form
  // toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  //table methods
  toggleNewBookModal() {
    this.setState({
      newBookModal: !this.state.newBookModal,
    });
  }
  toggleEditBookModal() {
    this.setState({
      editBookModal: !this.state.editBookModal,
    });
  }

  // --------------controls
  changeOutputTypeHandler = (outputType) => {
    if (outputType === "lista") {
      this.setState({ outputType: "lista" });
    }
    if (outputType === "calendario") {
      this.setState({ outputType: "calendario" });
    }

    if (outputType === "crear") {
      this.setState({ outputType: "crear" });
    }
  };

  //delete handler
  deleteSuperBookingHandler = (superBookingId) => {
    // console.log("superBookingId: " + superBookingId);

    alert("Has borrado esta reserva");
    const requestBody = {
      query: `
        mutation CancelsuperBooking($id: ID!) {
          cancelsuperBooking(superbookingId: $id)
        }
      `,
      variables: {
        id: superBookingId,
      },
    };
    // fetch("http://localhost:8000/graphql", {
    fetch("/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.context.token,
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then((resData) => {
        this.fetchSuperBookings();
        // console.log("resData" + resData);
        // this.setState((prevState) => ({
        //   users: "loco",
        //   const updatedsuperBookings = prevState.superBookings.filter(
        //     (superBooking) => {
        //       return superBookingId._id !== superBookingId;
        //     }
        //   );
        //   return { superBookings: updatedsuperBookings, isLoading: false };
        // }));
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
      });
    this.setState({ creating: false, selectedSuperBooking2: null });
  };

  //modal confirm to make and event
  modalConfirmHandler2 = (superBookingId) => {
    // this.setState({ isLoading: true });
    // book now start
    // console.log("esteee es:  " + this.state.passedpricevalue);

    // sendMail()
    //   .then((result) => console.log("Email sent...", result))
    //   .catch((error) => console.log(error.message));

    var date = new Date().toLocaleString();
    // var date = new Date();
    this.setState({ date });
    alert("Has reservado a: " + this.state.selectedSuperBooking.name);

    // alert("name is " + date);

    // this.setState({ creating: false });
    const name = this.state.selectedSuperBooking.name;
    const country = this.state.selectedSuperBooking.country;
    const email = this.state.selectedSuperBooking.email;
    const room = this.state.selectedSuperBooking.room;
    const persons = +this.state.selectedSuperBooking.persons;
    const price = +this.state.selectedSuperBooking.price;
    const comments = this.state.selectedSuperBooking.comments;
    const fromDate = this.state.selectedSuperBooking.fromDate;
    // const fromDate = this.state.startDate.toLocaleDateString();
    const toDate = this.state.selectedSuperBooking.toDate;
    // const toDate = this.state.endDate.toLocaleDateString();

    // \change this one
    const dateofSentRequest = this.state.selectedSuperBooking.dateofSentRequest;
    const statusOfSuperBooking = "reservado";

    //data to email
    // this.setState({
    //   nameTosend: name,
    //   emailTosend: email,
    //   commentTosend: comments,
    //   fromDateTosend: fromDate,
    //   toDateTosend: toDate,
    //   roomTosend: room,
    // });

    // console.log("el mail" + this.state.email);

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

    // const requestBody2 = {
    //   query: `
    //     mutation CancelsuperBooking($id: ID!) {
    //       cancelsuperBooking(superbookingId: $id)
    //     }
    //   `,
    //   variables: {
    //     id: superBookingId,
    //   },
    // };

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

        //TO RELOAD

        this.fetchSuperBookings();

        // //TO DELETE THE REST

        // this.deleteSuperBookingHandler();

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
      selectedSuperBooking2: null,
    });

    // this.forceUpdate();

    // TO TO DELETE THIS

    alert("Has tratado de borrar la duplica esta reserva");

    // fetch("http://localhost:8000/graphql", {
    //   method: "POST",
    //   body: JSON.stringify(requestBody2),
    //   headers: {
    //     "Content-Type": "application/json",
    //     // Authorization: "Bearer " + this.context.token,
    //   },
    // });

    // THE END OF DELETE
    //RELOAD
    // this.deleteSuperBookingHandler();
  };
  //modal 3

  // modal3activator = () => {
  //   this.setState({
  //     modal3activate: true,
  //   });
  // };

  // end

  render() {
    let books = this.state.books.map((book) => {
      return (
        <tr key={books.id}>
          <td>{books.id}</td>
          <td>{books.name}</td>
          <td>{books.persons}</td>
          <td>
            <Button
              color="success"
              size="sm"
              className="mr-2"
              // onClick={this.editSuperbooking.bind(
              //   this,
              //   superBooking.id,
              //   superBooking.name,
              //   superBooking.rating
              // )}
            >
              Edit
            </Button>
            <Button
              color="danger"
              size="sm"
              // onClick={this.deleteSuperbooking.bind(this, book.id)}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <React.Fragment>
        {(this.state.creating || this.state.selectedSuperBooking) && (
          <Backdrop />
        )}
        {(this.state.creating || this.state.selectedSuperBooking2) && (
          <Backdrop />
        )}

        {this.state.selectedSuperBooking && (
          <Modal2
            name={this.state.selectedSuperBooking.name}
            country={this.state.selectedSuperBooking.country}
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler2}
            // {this.modalConfirmHandler2}
            // modalConfirmHandler2
            // deleteSuperBookingHandler

            confirmText={
              this.state.clickCount === 0 ? "Reservar" : "Quitar Reserva"
            }
            statusOfSuperBooking={
              this.state.selectedSuperBooking.statusOfSuperBooking
            }
          >
            <p>fecha de entrada {this.state.selectedSuperBooking.fromDate}</p>
            <p>fecha de salida {this.state.selectedSuperBooking.toDate}</p>
            <p>precio: €{this.state.selectedSuperBooking.price}</p>
            <p>
              Hora de peticion de reserva :{" "}
              {this.state.selectedSuperBooking.dateofSentRequest}
            </p>
            <p>Comentarios: {this.state.selectedSuperBooking.comments}</p>
            <p styles="color: blue">
              Usa este link para mandar una confirmacion de reserva a:
            </p>
            <a
              href={
                "mailto:" +
                this.state.selectedSuperBooking.email +
                "?subject=Booking%20Confirmation%20for%20Room%20in%20Alquiler%20de%20Conchita%20y%20Alex&body=Thank%20you%20for%20your%20request.%20We%20hereby%20confirm%20your%20booking.%0APlease%20use%20the%20contact%20form%20on%20the%20website%20if%20you%20have%20any%20request%20for%20additional%20offers%20before%20arriving,%20e.g%20arranged%20airport%20pick%20up,%20guided%20tours,etc.%0AWe%20look%20forward%20to%20welcoming%20you%20to%20Cuba.%0ABest%20wishes%2C%0AConchita%20y%20Alex"
              }
              target="_blank"
              rel="noreferrer"
            >
              {this.state.selectedSuperBooking.email}
            </a>
          </Modal2>
        )}

        {this.state.selectedSuperBooking2 && (
          <ModalCancel
            name={this.state.selectedSuperBooking2.name}
            country={this.state.selectedSuperBooking2.country}
            email={this.state.selectedSuperBooking2.email}
            superBookingId={this.state.selectedSuperBooking2._id}
            onCancel={this.modalCancelHandler2}
            deleteSuperbooking={this.deleteSuperBookingHandler}
          ></ModalCancel>
        )}

        <SuperBookingsControl
          activeOutputType={this.state.outputType}
          onChange={this.changeOutputTypeHandler}
        />

        <div className="coverBothControls">
          {this.state.outputType === "lista" && (
            <div
              className="card shadow-lg border-0 p-4 col-sm-9"
              id="tablacontainer"
            >
              <h1
                id="tablacontainerH1"
                className="text-center bg-dark text-white display-4 d-inline-block p-4"
              >
                {/* <button
                  className=" btn-secondary btn-sm float-sm-left ml-5 mt-3"
                  onClick={this.modal3activator}
                >
                  crear nueva superReserva
                </button> */}
                Tabla de SuperReservas{" "}
                <span className="h6">(reservas directas)</span> <br />
              </h1>

              {this.state.isLoading ? (
                <Spinner />
              ) : (
                <>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Pais</th>
                        <th>Cuarto</th>
                        <th>#Personas</th>
                        <th>Comentarios</th>
                        <th>Entrada</th>
                        <th>Salida</th>
                        <th>Estado</th>
                        <th>Precio</th>
                        <th>Msg Recibido</th>
                        <th>Accion</th>
                      </tr>
                    </thead>

                    <SuperBookingList
                      superBookings={this.state.superBookings}
                      // i am passing this too
                      Statusclicked={this.state.Statusclicked}
                      // authUserId={this.context.userId}
                      onViewDetail={this.showDetailHandler}
                      isBoxVisible={this.state.isBoxVisible}
                      deleteSuperbooking={this.showDetailHandler2}

                      // deleteSuperbooking={this.deleteSuperBookingHandler}
                      //to reload the list
                      // key={this.state.keyvalue}
                    />
                  </Table>
                </>
              )}
            </div>
          )}

          {this.state.outputType === "calendario" && (
            <SuperBookingsCalendar superBookings={this.state.superBookings} />
          )}
          {this.state.outputType === "crear" && <CreateSB />}
        </div>
        {/* {this.state.modal3activate === true && <div>HOlaaa</div>} */}
      </React.Fragment>
    );
  }
}

export default SuperBookingsPage;
