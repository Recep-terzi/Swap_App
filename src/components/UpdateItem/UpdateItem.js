import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./UpdateItem.Module.css";
import { FormControl, InputLabel, MenuItem, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";

const UpdateItem = () => {
  const categories = ["Kıyafet", "Teknolojik Ürünler", "Diğer"];
  const [category, setCategory] = useState();

  return (
    <>
      <Navbar />

      <div className="updateitem-container">
        <div className="update-item-text">
          Ürününüzü güncellemek mi istiyorsunuz? Aşağıdan düzenlemeyi
          yapabilirsiniz. Bol kazançlar. İyi takaslar.
        </div>
        <form>
          <div className="form-card">
            <div className="title-input">
              <label>Ürün Adı </label>
              <input type="text" />
            </div>
            <div className="price-input">
              <label>Ürün Fiyatı </label>

              <input type="text" />
            </div>
            <div className="category-selection">
              <Box>
                <FormControl fullWidth sx={{ mt: 3 }}>
                  <InputLabel id="demo-simple-select-label">
                    Kategori Seçiniz
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
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
            </div>
            <div className="description-input">
              <TextField
                margin="dense"
                id="outlined-multiline-static"
                label="Ürünün Açıklaması"
                type="text"
                fullWidth
                inputProps={{ maxLength: "28" }}
                variant="standard"
                rows={4}
              />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateItem;
