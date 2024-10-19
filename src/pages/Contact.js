import React from "react";

import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="lastdivcontact">
        <div className="row">
          <div className="col-md-8 col-12 mx-auto">
            <div className="card shadow-lg border-0 p-4">
              <form
                action="https://formsubmit.co/18977bb3a762a03a79ba195cc6fec1de"
                method="POST"
                onSubmit={() => alert("Your message has been sent")}
              >
                <h1 className="text-center bg-dark text-white display-4 ">
                  Contact us
                </h1>
                <div className="form-group my-5">
                  <div className="row">
                    <div className="col-md-6 col-12 mx-auto my-2">
                      <input
                        name="name"
                        className="form-control-lg"
                        placeholder="First Name*"
                        required
                      />
                    </div>
                    <div className="col-md-6 col-12 mx-auto my-2">
                      <input
                        name="apellido"
                        type="text"
                        className="form-control-lg"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mb-5">
                  <div className="row">
                    <div className="col-md-6 col-12 mx-auto my-2">
                      <input
                        name="email"
                        type="email"
                        className="form-control-lg"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                    <div className="col-md-6 col-12 mx-auto my-2">
                      <input
                        name="tel"
                        type="tel"
                        className="form-control-lg"
                        placeholder="Phone no."
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-11">
                    <textarea
                      name="mensaje"
                      className="form-control"
                      row="20"
                      placeholder="Your message*"
                      required
                    ></textarea>
                  </div>
                </div>
                <input
                  type="hidden"
                  name="_subject"
                  value="Contacto a casa de conchita/alex"
                ></input>

                <input
                  type="hidden"
                  name="_cc"
                  value="conchitaestela2022@gmail.com"
                ></input>
                {/* //value nt bein read properly */}
                <input type="hidden" name="_next" value="/rooms"></input>

                <div className="mt-5 col-md-6 col-12 mx-auto">
                  <button
                    type="submit"
                    className="btn btn-outline-dark btn-lg btn-block"
                    // onClick={() => alert("Your message has been sent")}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Contact;
