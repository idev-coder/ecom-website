import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import ResponsiveAppBar from "@/component/navbar";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import { initializeFirebaseStorage } from "@/firebase/firebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import Swal from "sweetalert2";
import Router from "next/router";

interface FormData {
  name: string;
  price: number | "";
  description: string;
  imageURL: string;
}

const AddProductPage: React.FC = () => {
  const [imageUpload, setImageUploaded] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>("/images/add.png");
  let imageUploadSuccess = false;
  let productUploadSuccess = false;

  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: "",
    description: "",
    imageURL: "",
  });

  const inputImageRef = useRef<HTMLInputElement | null>(null);
  const dropAreaImageRef = useRef<HTMLDivElement | null>(null);

  const inputImageHandle = () => {
    if (inputImageRef.current !== null) {
      inputImageRef.current.click();
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImageUploaded(file);
      const imageUrl = URL.createObjectURL(file);
      await setImageUrl(imageUrl);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormOverflow = useMediaQuery("(max-width:800px)");
  const isImageOverheight = useMediaQuery("(max-width:400px)");

  const gridTemplateColumnResponsive = () => {
    if (isFormOverflow) {
      return "1fr";
    }
    return "1fr 1fr";
  };

  const responsiveImageHeight = () => {
    if (isFormOverflow) {
      return 300;
    }
    if (isImageOverheight) {
      return 255;
    }
    return 350;
  };

  const submitFormHandle = async () => {
    const storage = initializeFirebaseStorage();
    try {
      if (imageUpload !== null) {
        const storageRef = ref(storage, "images/" + self.crypto.randomUUID());

        const snapshot = await uploadBytes(storageRef, imageUpload, {
          contentType: imageUpload.type,
        });

        if (snapshot) {
          const downloadURL = await getDownloadURL(snapshot.ref);
          await setFormData((prevState) => ({
            ...prevState,
            imageURL: downloadURL,
          }));
          imageUploadSuccess = true;
        }
      }

      // Now upload product data
      const response = await axios.post("/api/product", {
        data: {
          name: formData.name,
          price: formData.price,
          description: formData.description,
          imageURL: formData.imageURL,
        },
      });

      if (response.status === 200) {
        productUploadSuccess = true;
      }
    } catch (error) {
      console.error("Error uploading image or adding product:", error);
    }

    // Show success message if both image upload and product upload are successful
    if (imageUploadSuccess && productUploadSuccess) {
      Swal.fire({
        title: "Successfully",
        icon: "success",
        text: "Add product successfully",
        confirmButtonColor: "#3085d6",
        showConfirmButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          Router.push("/");
        }
      });
    } else {
      Swal.fire({
        title: "Failed",
        icon: "error",
        text: "Add product failed please try again",
      });
    }
  };

  useEffect(() => {
    const dropAreaImageElement = dropAreaImageRef.current;
    if (dropAreaImageElement) {
      const handleDrop = (event: DragEvent) => {
        event.preventDefault();
        const file = event.dataTransfer?.files?.[0];
        if (file) {
          setImageUploaded(file);
          const imageUrl = URL.createObjectURL(file);
          setImageUrl(imageUrl);
        }
      };

      const handleDragOver = (event: DragEvent) => {
        event.preventDefault();
      };

      dropAreaImageElement.addEventListener("drop", handleDrop);
      dropAreaImageElement.addEventListener("dragover", handleDragOver);
      return () => {
        dropAreaImageElement.removeEventListener("drop", handleDrop);
        dropAreaImageElement.removeEventListener("dragover", handleDragOver);
      };
    }
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <Container
        sx={{
          display: "grid",
          gridTemplateColumns: gridTemplateColumnResponsive(),
          my: 2,
          border: "1px solid black",
          p: 1,
        }}
      >
        {imageUrl && (
          <Box
            ref={dropAreaImageRef}
            onClick={inputImageHandle}
            sx={{
              height: responsiveImageHeight(),
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
            }}
          >
            <form>
              <input
                type="file"
                accept="image/*"
                hidden
                ref={inputImageRef}
                onChange={handleFileChange}
              />
            </form>
          </Box>
        )}

        <Box sx={{ p: 2 }}>
          <Typography variant="h5">Product info</Typography>
          <form style={{ marginTop: 8 }}>
            <TextField
              type="text"
              name="name"
              label="Name"
              fullWidth
              placeholder="Enter your product name"
              required
              margin="normal"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              type="number"
              name="price"
              label="Price (Bath)"
              placeholder="Enter your product price"
              required
              margin="normal"
              inputProps={{ min: 0 }}
              value={formData.price}
              onChange={handleInputChange}
            />
            <TextField
              type="text"
              name="description"
              label="Description"
              fullWidth
              placeholder="Enter your product info or description"
              margin="normal"
              value={formData.description}
              onChange={handleInputChange}
            />
            <Button
              variant="contained"
              type="button"
              onClick={submitFormHandle}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};

export default AddProductPage;
