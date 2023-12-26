import React, { useState } from "react";

import supabase from "../../Supabase";

function Contact() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-z\s]+$/;

  const [Error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    if (!formData.name || !formData.email) {
      setError("Name and email are required fields.");
      return;
    }

    if (!emailRegex.test(formData.name)) {
      setError("Invalid email format.");
      return;
    }
    if (!nameRegex.test(formData.name)) {
      setError("Invalid name format. Only letters and spaces are allowed.");
      return;
    }
    const { error } = await supabase.from("Portfolio_Customer_Data ").insert({
      Name: formData.name,
      Email: formData.email,
      Comment: formData.text,
    });

    if (error) {
      setError("Error inserting data into the database.");
    } else {
      // Success
      alert("Data inserted successfully!");
      setFormData({ name: "", email: "", text: "" });
      setError(null);
    }
    console.log("Form Data:", formData);
    setFormData({ name: "", email: "", text: "" });
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="text"
          className="feedback-input"
          placeholder="Comment"
          value={formData.text}
          onChange={handleChange}
        ></textarea>
        {Error && <div style={{ color: "red" }}>{Error}</div>}

        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}

export default Contact;
