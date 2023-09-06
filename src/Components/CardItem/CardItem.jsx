import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const CardItem = ({ img, tipo, marca, modelo, descripcion, precio, id }) => {
  return (
    <Card>
      <CardMedia  src={img}sx={{ height: 300, objectFit:'contain'}} component={"img"} alt={tipo}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {marca} {modelo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion.slice(0,200)+'...'}
        </Typography>
        <Typography variant="h6" textAlign={"center"}>
          $ {precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Box display={"flex"} alignItems={"center"} justifyContent={'center'} width={"100%"}>
        <Link to={`/item/${id}`}>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "#333",
              "&:hover": { backgroundColor: "#555" },
            }}
          >
            Detalle
          </Button>
        </Link>
        </Box>
      </CardActions>
    </Card>
  );
};
export default CardItem;
