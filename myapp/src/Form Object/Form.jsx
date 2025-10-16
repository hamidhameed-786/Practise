import { useState } from "react";
import "./form.css";

function Vite() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleform = (e) => {
    e.preventDefault();

    if (!form.username) {
      alert("Username is required");
    } else if (!form.email) {
      alert("Email is required");
    } else if (!form.password) {
      alert("Password is required");
    } else {
      alert("Form is submitted");
      setForm({
        username: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <h1>hilo</h1>
      <form onSubmit={handleform}>
        <input
          type="text"
          placeholder="Name"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <br />
        <br />

        <input
          type="email"
          placeholder="Enter your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <br />
        <br />

        <input
          type="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <br />
        <br />

        <input type="Submit" value="submit" />
      </form>

      <h1>Key Value pairs</h1>
      <p>Name: {form.username}</p>
      <p>Email: {form.email}</p>
      <p>Password: {form.password}</p>
    </>
  );
}

export default Vite;
