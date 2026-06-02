import { useState } from "react";

function BookingForm({ destinations }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    destination: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Booking Submitted");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>Book Now</h3>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }/>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }/>
      <input
        type="date"
        onChange={(e) =>
          setForm({ ...form, date: e.target.value })
        }/>
      <select
        onChange={(e) =>
          setForm({ ...form, destination: e.target.value })
        }>
        <option>Select Destination</option>
        {destinations.map((item) => (
          <option key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <button>Book Now</button>
    </form>
  );
}

export default BookingForm;