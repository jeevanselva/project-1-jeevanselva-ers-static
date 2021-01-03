import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


let rows


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function PendingTable(props) {
  const classes = useStyles();
rows = props.rows
  return (
    <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Reimbursement ID</StyledTableCell>
            <StyledTableCell align="right">Author Id</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Amount ($)</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Date Submitted</StyledTableCell>
            <StyledTableCell align="right">Decision</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.reimbursementId}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.reimbursementId}
              </StyledTableCell>
              <StyledTableCell align="right">{row.authorId}</StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">{row.dateSubmitted}</StyledTableCell>
              <StyledTableCell align="right">
              <button type="button" onClick={this.handleSubmit} class="btn btn-success">Approve</button></StyledTableCell>
              <button type="button" onClick={this.handleSubmit} class="btn btn-danger">Decline</button>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <button class="btn btn-primary" type="button" onClick={props.updateSelected}>Go Back</button>
    </div>
  );
}