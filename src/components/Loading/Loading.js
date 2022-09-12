import { Grid } from "@mui/material";
import React from "react";
import ReactLoading from "react-loading";
const Loading = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <ReactLoading
        type={"bubbles"}
        color={"#000"}
        height={"7%"}
        width={"7%"}
      />
    </Grid>
  );
};

export default Loading;
