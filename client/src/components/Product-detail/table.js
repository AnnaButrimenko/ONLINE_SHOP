import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name: string, data) {
  return { name, data };
}

export default function SimpleTable({ data }) {
  // console.log('TAble', data);
  const classes = useStyles();
  const { brand, color, manufacturerCountry, myCustomParams } = data;
  const { EAN, collection, setSize, material, care, sizes, buildingMaterial, capacity } = myCustomParams;
  const rows = [
    createData('EAN', EAN),
    createData('Brand', brand),
    createData('Collection', collection),
    createData('Size sets', `${setSize}-pc.`),
    createData('Material', material),
    createData('Building Material', buildingMaterial),
    createData('Production', `Made in ${manufacturerCountry}`),
    createData('Color', color),
    createData('Diameter (cm)', sizes.diameter),
    createData('Width (cm)', sizes.width),
    createData('Height (cm)', sizes.height),
    createData('Length (cm)', sizes.length),
    createData('Blade Length (cm)', sizes.bladeLength),
    createData('Capacity (in l)', capacity),
    createData('Care', care),
  ];
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              {row.data ? (
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
              ) : null}
              {row.data ? <TableCell acomponent="th" scope="row">{row.data}</TableCell> : null }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}