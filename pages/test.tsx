import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

interface file {
  file: File;
}

const TestPage: React.FC = () => {
  const [imageUpload, setImageUpload] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImageUpload(file);
    }
  };

  const handleUpload = async () => {
    if (!imageUpload) {
      console.error("No file selected.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", imageUpload);

      // Perform axios post request with the form data
      const response = await axios.post("/product", formData);

      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <>
      <section>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </section>
    </>
  );
};

export default TestPage;
