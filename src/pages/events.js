import React, { Component } from "react";
// import { useState } from "react";
// import { Form, Button } from "react-bootstrap";

import Modal from "../components/Modal/Modal";
import Backdrop from "../components/Backdrop/Backdrop";
import EventList from "../components/EventList/EventList";
import Spinner from "../components/Spinner/Spinner";
import AuthContext from "../authContext/auth-context";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Events.css";
// import InputGroup from "react-bootstrap/InputGroup";

// import DropdownButton from "react-bootstrap/DropdownButton";

class EventsPage extends Component {
  state = {
    creating: false,
    events: [],
    isLoading: false,
    selectedEvent: null,
    val: "",
  };
  isActive = true;

  static contextType = AuthContext;

  constructor(props) {
    super(props);
    this.titleElRef = React.createRef();
    this.priceElRef = React.createRef();
    this.dateElRef = React.createRef();
    this.descriptionElRef = React.createRef();

    //for the submit form
    // this.state = { value: "coconut" };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchEvents();
  }

  startCreateEventHandler = () => {
    this.setState({ creating: true });
  };

  modalConfirmHandler = () => {
    this.setState({ creating: false });
    const title = this.titleElRef.current.value;
    const price = +this.priceElRef.current.value;
    const date = this.dateElRef.current.value;
    const description = this.descriptionElRef.current.value;

    if (
      title.trim().length === 0 ||
      price <= 0 ||
      date.trim().length === 0 ||
      description.trim().length === 0
    ) {
      return;
    }

    const event = { title, price, date, description };
    console.log(event);

    const requestBody = {
      query: `
          mutation CreateEvent($title: String!, $desc: String!, $price: Float!, $date: String!) {
            createEvent(eventInput: {title: $title, description: $desc, price: $price, date: $date}) {
              _id
              title
              description
              date
              price
            }
          }
        `,
      variables: {
        title: title,
        desc: description,
        price: price,
        date: date,
      },
    };

    const token = this.context.token;

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
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
            _id: resData.data.createEvent._id,
            title: resData.data.createEvent.title,
            description: resData.data.createEvent.description,
            date: resData.data.createEvent.date,
            price: resData.data.createEvent.price,
            creator: {
              _id: this.context.userId,
            },
          });
          return { events: updatedEvents };
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  modalCancelHandler = () => {
    this.setState({ creating: false, selectedEvent: null });
  };

  fetchEvents() {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            events {
              _id
              title
              description
              date
              price
              creator {
                _id
                email
              }
            }
          }
        `,
    };

    fetch("http://localhost:8000/graphql", {
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
        const events = resData.data.events;
        console.log("the events: " + events);
        console.log("RES DATA: " + resData);
        if (this.isActive) {
          this.setState({ events: events, isLoading: false });
        }
      })
      .catch((err) => {
        console.log(err);
        if (this.isActive) {
          this.setState({ isLoading: false });
        }
      });
  }

  showDetailHandler = (eventId) => {
    this.setState((prevState) => {
      const selectedEvent = prevState.events.find((e) => e._id === eventId);
      return { selectedEvent: selectedEvent };
    });
  };

  bookEventHandler = () => {
    if (!this.context.token) {
      this.setState({ selectedEvent: null });
      return;
    }
    console.log(this.state.selectedEvent);
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
        id: this.state.selectedEvent._id,
      },
    };

    fetch("http://localhost:8000/graphql", {
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
        this.setState({ selectedEvent: null });
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

  // --------------

  render() {
    // const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;

    return (
      <React.Fragment>
        {(this.state.creating || this.state.selectedEvent) && <Backdrop />}
        {this.state.creating && (
          <Modal
            show={true}
            title="Adiciona la reserva aqui (recuerda llenarlo todo, sino no funciona)"
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.modalConfirmHandler}
            confirmText="Confirma"
          >
            <form>
              <div className="form-control">
                <label htmlFor="title">Nombre</label>
                <input type="text" id="title" ref={this.titleElRef} />
              </div>

              <div className="form-control">
                <label htmlFor="date">Fecha</label>
                <input type="datetime-local" id="date" ref={this.dateElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="price">Precio</label>
                <input type="number" id="price" ref={this.priceElRef} />
              </div>

              <div className="form-control">
                <label htmlFor="description">Descripcion</label>
                <textarea
                  id="description"
                  rows="4"
                  ref={this.descriptionElRef}
                />
              </div>
            </form>

            {/* ----------------------handlechange------------ */}
            {/* <div className="form-control">
                <form>
                  <select value={""}>
                    <option value="{this.handleChange.bind(this)}">
                      --Escoje una opcion--
                    </option>
                    <option value="Cuartorojo">Cuarto rojo</option>
                    <option value="Cuartoazul">Cuarto azul</option>
                    <option value="Cuartoverde">Cuarto verde</option>
                  </select>
                </form>
              </div> */}

            <form onSubmit={this.handleSubmit}>
              <label>
                --Escoje un cuarto--
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="Cuartorojo">Cuarto rojo</option>
                  <option value="Cuartoazul">Cuarto azul</option>
                  <option value="Cuartoverde">Cuarto verde</option>
                </select>
              </label>
              {/* <input  type="submit" value="Submit" /> */}
            </form>

            {/* --------------------------------------------- */}
          </Modal>
        )}
        {this.state.selectedEvent && (
          <Modal
            title={this.state.selectedEvent.title}
            canCancel
            canConfirm
            onCancel={this.modalCancelHandler}
            onConfirm={this.bookEventHandler}
            confirmText={this.context.token ? "Book" : "Confirma"}
          >
            <h1>{this.state.selectedEvent.title}</h1>
            <h2>
              ${this.state.selectedEvent.price} -{" "}
              {new Date(this.state.selectedEvent.date).toLocaleDateString()}
            </h2>
            <p>{this.state.selectedEvent.description}</p>
          </Modal>
        )}

        {this.context.token && (
          <div className="events-control">
            <p>Haz aqui la reserva!</p>
            <button className="btn" onClick={this.startCreateEventHandler}>
              Crear Reserva
            </button>
          </div>
        )}

        <div className="container contact">
          <div className="card shadow-lg border-0 p-4">
            <h1 className="text-center bg-dark text-white display-4 d-inline-block">
              Tabla de reservas
            </h1>
            {this.state.isLoading ? (
              <Spinner />
            ) : (
              <EventList
                events={this.state.events}
                authUserId={this.context.userId}
                onViewDetail={this.showDetailHandler}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EventsPage;
