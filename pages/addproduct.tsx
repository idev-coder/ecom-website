import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useRef,
  useEffect,
} from "react";
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
import { uploadFile, getFile } from "@/lib/uploadImage";

interface FormData {
  name: string;
  price: number | "";
  description: string;
}

const AddProductPage: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>("/images/add.png");
  const [imageHeight, setImageHeight] = useState<number>(300);
  const [imageWidth, setImageWidth] = useState<number>(300);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: "",
    description: "",
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
      setImage(file);
      const imageUrl = URL.createObjectURL(file);
      await setImageUrl(imageUrl);
      setImageHeight(200);
      setImageWidth(300);
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
    try {
      const folder = "user/";
      const imagePath = await uploadFile(image, folder);
      const imageUrl = await getFile(imagePath);
      uploadFile(imageUrl, folder);
    } catch (error) {
      console.log(`You have an error ${error}`);
    }
  };

  useEffect(() => {
    const dropAreaImageElement = dropAreaImageRef.current;
    if (dropAreaImageElement) {
      const handleDrop = (event: DragEvent) => {
        event.preventDefault();
        const file = event.dataTransfer?.files?.[0];
        if (file) {
          setImage(file);
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
