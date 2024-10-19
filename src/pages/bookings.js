import React, { Component } from "react";

import Spinner from "../components/Spinner/Spinner";
import AuthContext from "../authContext/auth-context";
import BookingList from "../components/Bookings/BookingList/BookingList";
import BookingsChart from "../components/Bookings/BookingsChart/BookingChart";
import BookingsControls from "../components/Bookings/BookingsControls/BookingControls";
import { Table } from "react-bootstrap";

import SuperBookingsCalendar from "../components/SuperBookingsCalendar/SuperBookingsCalendar";

class BookingsPage extends Component {
  state = {
    isLoading: false,
    bookings: [],

    outputType: "list",

    calTitle: "",
    calStartDate: "",
    calEndDate: "",
  };

  static contextType = AuthContext;

  componentDidMount() {
    this.fetchBookings();
  }
  //CHANGE TO FETCH SUPERBOOKINGS
  fetchBookings = () => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          query {
            bookings {
              _id
             createdAt
             event {
               _id
               title
               date
               price
             }
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
        const bookings = resData.data.bookings;

        this.setState({ bookings: bookings, isLoading: false });

        // const createdDate = new Date(resData.data.bookings.createdAt)
        //   .toLocaleString;

        // this.setState({ createdDate: createdDate });
        // console.log("created: " + this.state.createdDate);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  deleteBookingHandler = (bookingId) => {
    this.setState({ isLoading: true });
    const requestBody = {
      query: `
          mutation CancelBooking($id: ID!) {
            cancelBooking(bookingId: $id) {
            _id
             title
            }
          }
        `,
      variables: {
        id: bookingId,
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
        this.setState((prevState) => {
          const updatedBookings = prevState.bookings.filter((booking) => {
            return booking._id !== bookingId;
          });
          return { bookings: updatedBookings, isLoading: false };
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  changeOutputTypeHandler = (outputType) => {
    if (outputType === "list") {
      this.setState({ outputType: "list" });
    }

    if (outputType === "chart") {
      this.setState({ outputType: "chart" });
    }
    if (outputType === "calendar") {
      this.setState({ outputType: "calendar" });
    }
  };

  render() {
    let content = <Spinner />;
    if (!this.state.isLoading) {
      content = (
        <React.Fragment>
          {/* <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody></tbody>
          </Table> */}
          <BookingsControls
            activeOutputType={this.state.outputType}
            onChange={this.changeOutputTypeHandler}
          />
          <div>
            {this.state.outputType === "list" && (
              <BookingList
                bookings={this.state.bookings}
                onDelete={this.deleteBookingHandler}
              />
            )}
            {/* {this.state.outputType === "calendar" && (
              <SuperBookingsCalendar bookings={this.state.bookings} />
            )} */}
            ;
            {this.state.outputType === "chart" && (
              <BookingsChart bookings={this.state.bookings} />
            )}
          </div>
        </React.Fragment>
      );
    }
    return <React.Fragment>{content}</React.Fragment>;
  }
}

export default BookingsPage;
