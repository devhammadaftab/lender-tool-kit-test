import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTodo } from '../../store/tabelSlice';

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
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const BasicTable = ()=> {
    const { tabelData } = useSelector(state => state.tabel)
    const dispatch = useDispatch()

    const handleDelete = (i) => {
        dispatch(deleteTodo(i))
    }
    return (
        <TableContainer component={Paper}>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell style={{backgroundColor:'#1976d2'}}>Tasks</StyledTableCell>
                        <StyledTableCell align="right" style={{backgroundColor:'#1976d2'}}>Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tabelData.length===0 ?   <TableRow><TableCell sx={{textAlign:'right', paddingLeft:'3rem'}}>No data</TableCell></TableRow> :tabelData.map((row,i) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right"><DeleteIcon sx={{cursor:'pointer', color:'#d32f2f'}} onClick={()=>handleDelete(i)}/></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default BasicTable