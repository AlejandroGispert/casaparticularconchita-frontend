import React, { Component } from "react";
import defaultBcg from "../images/latest pics/front4NEW.JPG";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);

    if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    const [main, ...defaultImages] = images;
    // console.log(defaultImages);

    // return <div>Hello from single room{room.name}</div>;

    return (
      <>
        <StyledHero img={images[3] || this.state.defaultBcg}>
          <Banner title={`${name} `}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>

          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : €{price}</h6>
              <h6>size : {size} m2</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>

              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>

        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>

          {/* book now button */}

          <div className="p-4 clearfix">
            <div className="row">
              <div className="col-md-3 col-12 ml-auto">
                <Link
                  to={`/booknow/${this.state.slug}`}
                  className="btn btn-outline-primary btn-block btn-lg float-right "
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
