import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const CartItem = ({
  img,
  descripcion,
  precio,
  cantidad,
  marca,
  modelo,
  deleteItem,
}) => {
  return (
    <Card sx={{ display:"flex", flexDirection:"column" ,alignItems:'center', justifyContent:"center" } }>
      <CardActionArea sx={{display:"flex", flexDirection:"column" ,alignItems:'center', justifyContent:"center" }}>
        <CardMedia component="img" height="140" image={img} alt={descripcion} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {marca} {modelo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
          <Typography variant="h5">$ {precio * cantidad}.00</Typography>
          <Typography>Cantidad :{cantidad}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#333",
            "&:hover": { backgroundColor: "#555" },
          }}
          onClick={deleteItem}
        >
          Delete Item
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
