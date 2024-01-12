import React, { useState } from "react";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        setError("");
      };

      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
      setError("Please select a valid image file.");
    }
  };

  return (
    <div className="image-container">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {error && <p className="error-message">{error}</p>}
      {selectedImage && (
        <div className="selected-image">
          <p>Selected Image:</p>
          <img
            src={selectedImage}
            alt="Selected"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
