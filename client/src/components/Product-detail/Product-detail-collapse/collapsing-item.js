import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => createStyles({
  nested: {
    paddingLeft: theme.spacing(0),
  },
}),);

export default function CollapsingItem(props) {
  const { label, children } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse
        in={Boolean(open)}
        timeout="auto"
        unmountOnExit
        transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
      >
        <List component="div" >
          <ListItem className={classes.nested}>
            <ListItemText >
              {children}
            </ListItemText>
          </ListItem>
        </List>
      </Collapse>
    </>
  )
}

CollapsingItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
