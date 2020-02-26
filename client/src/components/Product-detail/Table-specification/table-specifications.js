import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  tableWrapper: {
    maxWidth: '980px',
  },
  table: {
    minWidth: 320,
    maxWidth: 1000
  },
  row: {
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.duration,
    '&:hover': {
      backgroundColor: theme.palette.background.primary,
    }
  },
  name: {
    fontWeight: '500'
  }
}));

function createData(name, data) {
  return { name, data };
}

export default function TableSpecifications({ data }) {
  const classes = useStyles();
  const { itemNo, brand, color, manufacturerCountry, myCustomParams } = data;
  const {
    EAN,
    collection,
    setSize,
    material,
    care,
    sizes = {},
    buildingMaterial,
    capacity
  } = myCustomParams;
  const rows = [
    createData('EAN', EAN),
    createData('Art.', itemNo),
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
  // console.log(sizes);
  return (
    <>
      {sizes ? (
        <TableContainer component={Paper} className={classes.tableWrapper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody className={classes.root}>
              {rows.map((row) => (
                <TableRow key={row.name} className={classes.row}>
                  {row.data ? (
                    <TableCell className={classes.name} component="th" scope="row">
                      {row.name}
                    </TableCell>
                  ) : null}
                  {row.data ? (
                    <TableCell
                      acomponent="th"
                      scope="row"
                    >
                      {row.data}
                    </TableCell>
                  ) : null}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </>
  )
}

TableSpecifications.propTypes = {
  data:
  PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
      PropTypes.object
    ])
  ).isRequired,
};