import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({count, handleDown, handleUp, handleOnAdd}) => {
  
  

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#333",
            "&:hover": { backgroundColor: "#555" },
          }}
          onClick={handleDown}
        >
          -
        </Button>
        <Typography variant="h5" textAlign={"center"} sx={{ margin: 4 }}>
          {count}
        </Typography>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#333",
            "&:hover": { backgroundColor: "#555" },
          }}
          onClick={handleUp}
        >
          +
        </Button>
      </Box>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} gap={3}>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#333",
            "&:hover": { backgroundColor: "#555" },
          }}
          onClick={handleOnAdd}
        >
          Agregar al Carrito
        </Button>
        <Link to={"/cart"}><Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#333",
                color:"#fafafa",
                "&:hover": { backgroundColor: "#555" },
              }}
              >Terminar Compra</Button></Link>
      </Box>
    </Box>
  );
};

export default ItemCount;
