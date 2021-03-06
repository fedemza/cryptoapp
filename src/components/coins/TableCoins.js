import React, { useState } from "react";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableCoinsBody from "./TableCoinsBody";

const TableCoins = ({ columns, rows }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 700, minHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow sx={{ color: "grey" }}>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontSize: "1rem",
                    // backgroundColor: "#95A5A6",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableCoinsBody
            columns={columns}
            rows={rows}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

TableCoins.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};

export default TableCoins;
