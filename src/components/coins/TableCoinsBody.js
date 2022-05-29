import React from "react";
import { Link } from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const TableCoinsBody = ({ columns, rows, page, rowsPerPage }) => {
  return (
    <TableBody>
      {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          return (
            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
              {columns.map((column, index) => {
                const value = row[column.id];
                return (
                  <TableCell key={index} align={column.align}>
                    <Link
                      to={row["id"]}
                      style={{ textDecoration: "none", color: "grey" }}
                    >
                      {typeof value === "string" &&
                      value[value.length - 4] +
                        value[value.length - 3] +
                        value[value.length - 2] +
                        value[value.length - 1] ===
                        ".png" ? (
                        <img
                          src={value}
                          alt="not found"
                          width="40px"
                          height="40px"
                        />
                      ) : column.id === "price" ? (
                        <p>$ {value.toFixed(2)}</p>
                      ) : column.id === "priceChange1d" ? (
                        <p> {value.toFixed(2)} %</p>
                      ) : column.id === "marketCap" ? (
                        <p> $ {value.toFixed(2)} </p>
                      ) : (
                        value
                      )}
                    </Link>
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
    </TableBody>
  );
};

export default TableCoinsBody;
