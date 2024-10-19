import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

//DISABLE THIS ONE TO DISABLE ROOMS
import RoomsContainer from "../components/RoomsContainer";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      {/* //DISABLE THIS ONE TOO TO DISABLE ROOMS */}
      <RoomsContainer />
      <Footer />
    </>
  );
};

export default Rooms;
