import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  useMediaQuery,
  Typography,
  Box,
  Container,
} from "@mui/material";

function BasicTable() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const tableData = [
    {
      name: "wiwat",
      orderID: 1,
      date: "21 January 2024",
      address: "Bangkok Thailand",
    },
    {
      name: "wiwat",
      orderID: 1,
      date: "21 January 2024",
      address: "Bangkok Thailand",
    },
    {
      name: "wiwat",
      orderID: 1,
      date: "21 January 2024",
      address: "Bangkok Thailand",
    },
    {
      name: "wiwat",
      orderID: 1,
      date: "21 January 2024",
      address: "Bangkok Thailand",
    },
    {
      name: "wiwat",
      orderID: 1,
      date: "21 January 2024",
      address: "Bangkok Thailand",
    },
  ];

  const mapDataTable = (dataObject: any) => {
    return Object.keys(dataObject).map((key) => (
      <TableRow key={key}>
        <TableCell>{dataObject[key].name}</TableCell>
        <TableCell align="center">{dataObject[key].orderID}</TableCell>
        <TableCell align="center">{dataObject[key].date}</TableCell>

        {isSmallScreen && (
          <TableCell align="center">{dataObject[key].address}</TableCell>
        )}
      </TableRow>
    ));
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        ...(isSmallScreen && {
          display: "block",
        }),
      }}
    >
      <Container sx={{ my: 1 }}>
        <Typography variant="h4" sx={{ my: 1 }}>
          Sales orders
        </Typography>
        <Table>
          <TableHead sx={{ background: "#35374B" }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Order ID</TableCell>
              <TableCell align="center">Date</TableCell>
              {isSmallScreen && <TableCell align="center">Address</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody sx={{ background: "#C7C8CC" }}>
            {mapDataTable(tableData)}
          </TableBody>
        </Table>
      </Container>
      <Container sx={{ my: 1 }}>
        <Typography variant="h4" sx={{ my: 1 }}>
          Shipped Orders
        </Typography>
        <Table>
          <TableHead sx={{ background: "#35374B" }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Order ID</TableCell>
              <TableCell align="center">Date</TableCell>
              {isSmallScreen && <TableCell align="center">Address</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody sx={{ background: "#C7C8CC" }}>
            {mapDataTable(tableData)}
          </TableBody>
        </Table>
      </Container>
    </TableContainer>
  );
}

export default BasicTable;
