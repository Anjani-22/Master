import React, { useEffect, useState } from "react";

function ImageUploader({ file }) {
  const [selectedImage, setSelectedImage] = useState("./ab.jpg");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          setSelectedImage(e.target.result);
          setError("");
        };

        reader.readAsDataURL(file);
      } else {
        setSelectedImage("./ab.jpg");
        setError("Please select a valid image file.");
      }
    } catch (e) {
      console.log(e);
      setSelectedImage("./ab.jpg");
    }
  }, [file]); // Run this effect when 'file' changes

  return (
    <div className="image-container">
      {error && <p className="error-message">{error}</p>}
      {selectedImage && (
        <div className="selected-image">
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
