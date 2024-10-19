import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeatureRooms";
import Hero from "../components/Hero";
import Map from "../components/Map";
import Services from "../components/Services";
// import Reviews from "../components/Reviews";
import { useMatomo } from "@datapunt/matomo-tracker-react";

import Footer from "../components/Footer";

//trsck in

export default function Home() {
  const { trackPageView } = useMatomo();
  React.useEffect(() => {
    trackPageView({ documentTitle: "Alquiler MainPage" });
  }, []);

  return (
    <>
      <Hero hero={"defaultHero"}>
        <Banner
          title="Live in Havana"
          subtitle="
    
    Get the city experience right by the sea. "
          subtitle2="Private rooms in colonial style house starting at 40€"
        >
          <Link to="/rooms" className="btn-primary">
            View Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />

      <Map />

      <FeaturedRooms />
      <Footer />
    </>
  );
}

// export default home;
