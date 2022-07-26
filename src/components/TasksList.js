import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const renderTable = (data) => {
  const mapItems = (data) => {
    return data.map((row) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row">
          {row.name}
        </StyledTableCell>
        <StyledTableCell align="right">{row.deadline}</StyledTableCell>
        <StyledTableCell align="right">{row.amount}</StyledTableCell>
      </StyledTableRow>
    ));
  };

  return data.length ? mapItems(data) : "Processando";
};

const TasksList = ({ tasks }) => {
  return (
    <>
      {tasks.length ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Nome</StyledTableCell>
                <StyledTableCell align="right">Deadline</StyledTableCell>
                <StyledTableCell align="right">Valor estimado</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderTable(tasks)}</TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div> Nenhuma tarefa. </div>
      )}
    </>
  );
};

export default TasksList;
