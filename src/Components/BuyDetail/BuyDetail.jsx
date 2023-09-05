import "./BuyDetail.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export function BuyDetail({ order }) {
  const time =
    order.date.getHours() +
    ":" +
    order.date.getMinutes() +
    ":" +
    order.date.getSeconds();

  return (
    <section className="dt-container">
      <h4 className="center">Detalle de Compra</h4>
      <p>
        {" "}
        {order.date.toLocaleDateString()} - {time}
      </p>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell className="dt-cell" align="left">
                Item
              </TableCell>
              <TableCell className="dt-cell" align="right">
                Precio
              </TableCell>
              <TableCell className="dt-cell" align="right">
                Cantidad
              </TableCell>
              <TableCell className="dt-cell" align="right">
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="dt-cell">
                  {item.marca} {item.modelo}
                </TableCell>
                <TableCell className="dt-cell" align="right">
                  {item.precio}
                </TableCell>
                <TableCell className="dt-cell" align="right">
                  {item.count}
                </TableCell>
                <TableCell className="dt-cell" align="right">
                  $ {item.precio * item.count}
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell className="dt-cell" />
              <TableCell className="dt-cell" />
              <TableCell className="dt-cell" align="right">
                Precio Total:{" "}
              </TableCell>
              <TableCell className="dt-cell" align="right">
                $ {order.total}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      

      <Link to="/">
        <Button
          variant="contained"
          size="large"
          sx={{
            marginTop: 3,
            color: "white",
            backgroundColor: "#333",
            "&:hover": { backgroundColor: "#555" },
          }}
        >
          Ir a Home y Seguir comprando
        </Button>
      </Link>
    </section>
  );
}
