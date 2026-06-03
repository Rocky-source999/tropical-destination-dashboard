import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import BookingForm from "../../components/BookingForm/BookingForm";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const API =
  "https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/19e5009c-c751-4324-a3fe-3a29d46587f2_destinationData.json";

function Home() {
  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);

  const filtered = destinations.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <section className="hero">
        <div>
          <h1>Tropical Destinations For Students</h1>
          <p>Explore amazing tropical locations with special discounts.</p>
          <button>See More</button>
        </div>
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt=""/>
      </section>
      <section className="search-section">
        <input
          type="text"
          placeholder="Search destination..."
          value={search}
          onChange={(e) => setSearch(e.target.value)
          }/>
      </section>
      <section className="destinations">
        <h2>Our Destinations</h2>
        <div className="cards">
          {filtered.length === 0 ? (
            <h3>No such destination</h3>
          ) : (
            filtered.map((item) => (
              <div className="card" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}/>
                <h3>{item.name}</h3>
                <p>{item.location}</p>
                <span>⭐ {item.rating}</span>
              </div>
            ))
          )}
        </div>
      </section>
      <section className="discount">
        <div>
          <h2>Student Discounts Available</h2>
          <p>Get up to 15% OFF on selected destinations.</p>
          <button>Book Now</button>
        </div>
      </section>
      <section className="booking-container">
        <BookingForm destinations={destinations} />
      </section>
      <Footer />
    </>
  );
}

export default Home;