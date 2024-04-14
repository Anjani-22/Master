import React, { useState } from "react";

import supabase from "../Supabase";

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
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError("Name and email are required fields.");
    }

    if (!emailRegex.test(formData.name)) {
      setError("Invalid email format.");
    }
    if (!nameRegex.test(formData.name)) {
      setError("Invalid name format. Only letters and spaces are allowed.");
    }

    const { error } = await supabase
      .from("Portfolio_Customer_Data ")
      .insert([
        { Name: formData.name, Email: formData.email, Comment: formData.text },
      ])
      .select();

    if (error) {
      setError(
        "Currenlty facing error in inserting data into the database. Please share the required info on my linkedIn handle (in footer section) to connect"
      );
      alert(Error);
      console.log("ErrorMsg :" + JSON.stringify(error));
    } else {
      // Success
      alert("Data inserted successfully!");
      setFormData({ name: "", email: "", text: "" });
      setError(null);
    }
    console.log("Form Data:", formData);
    //console.log("Response :" + JSON.stringify(data));
    setFormData({ name: "", email: "", text: "" });
  };

  return (
    <div className="contact">
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
