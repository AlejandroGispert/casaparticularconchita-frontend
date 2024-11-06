import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../images/latest pics/LOGO NEW.jpeg";
import jquery from "jquery";
import authContext from "../authContext/auth-context";

jquery(window).on(function () {
  jquery("nav").toggleClass("scrolled", jquery(this).scrollTop() > 0);
});

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <authContext.Consumer>
        {(context) => {
          return (
            <nav className="navbar">
              <div className="nav-center">
                <div className="nav-header">
                  <Link to="/">
                    <img src={logo} alt="house" width={130} id="logito" />
                  </Link>
                  <button
                    type="button"
                    className="nav-btn"
                    onClick={this.handleToggle}
                  >
                    <FaAlignRight className="nav-icon" />
                  </button>
                </div>
                <ul
                  className={
                    this.state.isOpen ? "nav-links show-nav" : "nav-links"
                  }
                >
                  <li className="nav-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/rooms">Rooms</Link>
                  </li>

                  {/* {!context.token && ( */}
                  <li className="nav-item">
                    <Link to="/contact">Contact</Link>
                  </li>
                  {/* )} */}
                  {/* <li className="nav-item">
                    <Link to="/Covidinfo">Covid-19 info</Link>
                  </li> */}
                  {!context.token && (
                    <li className="nav-item">
                      <Link to="/auth" id="adminbtn">
                        Admin
                      </Link>
                    </li>
                  )}

                  {context.token && (
                    // <li className="nav-item">
                    //   <Link to="/bookings">Confirmados</Link>
                    // </li>
                    <li className="nav-item">
                      <Link to="/guia">Guia</Link>
                    </li>
                  )}

                  {context.token && (
                    <React.Fragment>
                      {/* <li className="nav-item">
                        <Link to="/events">Guia</Link>
                      </li> */}
                      <li className="nav-item">
                        <Link to="/SuperBookings">Panel de control</Link>
                      </li>
                      <li className="nav-item">
                        <button id="logoutBtn" onClick={context.logout}>
                          Salir
                        </button>
                      </li>
                    </React.Fragment>
                  )}
                </ul>
              </div>
            </nav>
          );
        }}
      </authContext.Consumer>
    );
  }
}
