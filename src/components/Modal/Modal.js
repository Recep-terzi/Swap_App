import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { TextareaAutosize, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { db } from "../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Modal = ({ handleClickOpen, open, setOpen }) => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [star, setStar] = useState();
  const [image, setImage] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const user = useSelector((state) => state.swap.user);
  console.log(user);
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

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = {
      title: title,
      price: price,
      image: image,
      image2: image2,
      image3: image3,
      star: star,
      description: description,
    };
    const ref = collection(db, "items");
    try {
      await addDoc(ref, {
        ...doc,
        email: user.email,
      });
      navigate("/");
      console.log("eklendi");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="responsive-dialog-title">{"Add Item"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Buradan ürünlerinizi ekleyebilirsiniz. Lütfen ürün hakkındaki
              bilgileri detaylı ve doğru bir şekilde giriniz.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Ürün Adı"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Ürün Fiyatı"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Ürün Puanı ( 0 - 5 )"
              value={star}
              onChange={(e) => setStar(e.target.value)}
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Ürünün resmi (1)"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Ürünün resmi (2)"
              value={image2}
              onChange={(e) => setImage2(e.target.value)}
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Ürünün resmi (3)"
              value={image3}
              onChange={(e) => setImage3(e.target.value)}
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="outlined-multiline-static"
              label="Ürünün Açıklaması"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              fullWidth
              variant="standard"
              rows={4}
            />
            <FixedButton fullWidth className="modal-btn" type="submit">
              Ürünü Ekle
            </FixedButton>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default Modal;
