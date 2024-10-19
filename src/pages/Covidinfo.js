import React from "react";
import Footer from "../components/Footer";

export default function Covidinfo() {
  return (
    <>
      <div className="CovidText">
        <h1>Covid Information</h1>

        <div className="govuk-grid-column-two-thirds">
          <div
            data-module="gem-track-click"
            data-track-category="SummaryTravelAdviceWarning"
            data-track-action="callOutBoxClicked"
            data-track-links-only=""
            data-limit-to-element-class="call-to-action"
          >
            <div
              className="gem-c-govspeak govuk-govspeak direction-ltr"
              data-module="govspeak"
            >
              <h2 id="coronavirus-travel-health">
                Visiting Cuba during Covid-19
              </h2>

              <p>
                Cuba is one of the most vaccinated countries. Generally
                speaking, Cuba is beginning the journey to recover from Covid-19
                and returning to a more normalized day to day.
              </p>

              <p>
                Hotels, guest houses, restaurants, cafes, and museums are open.
                Guests may have to wear face masks in some hotel areas and
                facilities and wearing a face mask in public in Covid-19 peak
                periods is advised or compulsory.
              </p>
              <p>
                We do recommend a few measures to make sure you are, feel and
                stay safe throughout your visit to Cuba. Of course, ‘Alquiler de
                Conchita’ hosts will support you on site, also in case of
                emergency.
                {/* We speak English and have family in Europe if extended
              support is needed. */}
              </p>
              <ol className="ml-5">
                <li>
                  Check the latest information on risk from COVID-19 for Cuba on
                  the TravelHealthPro website. Keep updated before arrival.
                </li>
                <li>
                  Pack an extra set of masks, sanitary hand gel, handkerchiefs
                  and other essential items that may prevent transmission, as
                  these items are not always available in Cuba.
                </li>

                <li>
                  <h4>Protection and Medicine</h4>
                  <p>
                    a. You may face a long queue to shop in a pharmacy.
                    Over-the-counter medicines and pharmacy products are not
                    always available. You should bring anything you might need
                    with you.
                  </p>
                  <p>
                    b. You should also bring your prescription medicines with
                    you and think about bringing extra in case you have to stay
                    longer than planned.
                  </p>
                </li>
                <li>
                  <h4>International travel</h4>
                  <p>
                    a. Cuba opened fully to tourism on 15 November 2021 and all
                    airports are open again for commercial and charter flights.
                    You should check the FCDO Travel Advice for any country you
                    have to transit on your journey to/from Cuba, to keep up to
                    date with current entry and transit rules.
                  </p>
                  <p>
                    b. See Entry requirements and check with the airline or your
                    travel company for the latest updates.
                  </p>
                </li>

                <li>
                  <h4>Be prepared for your plans to change</h4>
                  <p>
                    a. No travel is risk-free during COVID. Countries may
                    further restrict travel or bring in new rules at short
                    notice, for example due to a new COVID-19 variant. Check
                    with your travel company or airline for any transport
                    changes which may delay your journey home. Make sure you:
                  </p>
                  <p className="ml-10"> i. can access money, carry cash</p>
                  <p className="ml-10">
                    {" "}
                    ii. understand what your insurance will cover
                  </p>
                  <p className="ml-10">
                    {" "}
                    iii. can make arrangements to extend your stay and be away
                    for longer than planned
                  </p>
                </li>
              </ol>

              <p>
                If you are in doubt or need more information before traveling,
                please use <a href="/contact">the contact form</a> or email:
                conchitaestela2022@gmail.com directly.
              </p>
              <div className="d-flex justify-content-center">
                <a className="btn" href="/rooms">
                  View Rooms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
