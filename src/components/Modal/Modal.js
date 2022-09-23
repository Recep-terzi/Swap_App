import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { db, storage } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
import Select from "@mui/material/Select";
import "./Modal.Module.css";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Modal = ({ open, setOpen }) => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [category, setCategory] = useState();
  const user = useSelector((state) => state.swap.user);
  const [description, setDescription] = useState();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const handleClose = () => {
    setOpen(false);
  };

  const FixedButton = styled(Button)({
    backgroundColor: "#222831",
    color: "#fff",
    marginTop: 30,
    "&:hover": {
      backgroundColor: "#393e46",
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = {
      title: title,
      price: price,
      image: image,
      image2: image2,
      image3: image3,
      category: category,
      description: description,
      seller: user.displayName,
    };
    const ref = collection(db, "items");
    try {
      await addDoc(ref, {
        ...doc,
        email: user.email,
      });
      handleClose();
      console.log("eklendi");
    } catch (error) {
      console.log(error);
    }
  };

  const categories = ["Kıyafet", "Teknolojik Ürünler", "Diğer"];

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="responsive-dialog-title">
            {"Yeni bir ürün ekle"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Buradan ürünlerinizi ekleyebilirsiniz. Lütfen ürün hakkındaki
              bilgileri detaylı ve doğru bir şekilde giriniz.
            </DialogContentText>
            <TextField
              margin="dense"
              id="name"
              label="Ürün Adı"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              autoComplete="off"
              fullWidth
              required
              variant="standard"
            />
            <TextField
              margin="dense"
              id="name"
              label="Ürün Fiyatı"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              autoComplete="off"
              type="text"
              fullWidth
              variant="standard"
            />

            <Box>
              <FormControl fullWidth sx={{ mt: 3 }}>
                <InputLabel id="demo-simple-select-label">
                  Kategori Seçiniz
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  required
                  label="Kategori Seçiniz"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((category, index) => (
                    <MenuItem value={category} key={index}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <div className="file-div">
              <p>Resim 1</p>
              <input
                margin="dense"
                id="name"
                value={""}
                className="file-input"
                accept="image/*"
                onChange={(e) => {
                  const file = e.currentTarget.files[0];
                  const imageRef = ref(storage, `photos/${file.name}`);
                  uploadBytes(imageRef, file);
                  getDownloadURL(imageRef).then((url) => {
                    setImage(url);
                  });
                }}
                type="file"
                variant="standard"
              />
            </div>
            <div className="file-div">
              <p>Resim 2</p>{" "}
              <input
                margin="dense"
                id="name"
                className="file-input"
                value={""}
                accept="image/*"
                onChange={(e) => {
                  const file = e.currentTarget.files[0];
                  const imageRef = ref(storage, `photos/${file.name}`);
                  uploadBytes(imageRef, file);
                  getDownloadURL(imageRef).then((url) => {
                    setImage2(url);
                  });
                }}
                type="file"
                variant="standard"
              />
            </div>

            <div className="file-div">
              <p>Resim 3</p>
              <input
                margin="dense"
                className="file-input"
                id="name"
                value={""}
                onChange={(e) => {
                  const file = e.currentTarget.files[0];
                  const imageRef = ref(storage, `photos/${file.name}`);
                  uploadBytes(imageRef, file);
                  getDownloadURL(imageRef).then((url) => {
                    setImage3(url);
                  });
                }}
                type="file"
                variant="standard"
              />
            </div>

            <TextField
              margin="dense"
              id="outlined-multiline-static"
              autoComplete="off"
              label="Ürünün Açıklaması"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              fullWidth
              inputProps={{ maxLength: "28" }}
              variant="standard"
              rows={4}
            />
            <div className="form-btn-group">
              <FixedButton className="modal-btn" type="submit">
                Ürünü Ekle
              </FixedButton>
              <FixedButton className="modal-btn" onClick={() => handleClose()}>
                İptal Et
              </FixedButton>
            </div>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default Modal;
