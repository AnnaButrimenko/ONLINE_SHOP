import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './_help-panel'

export default function HelpPanel() {
  const classes = useStyles();
  return (
    <ExpansionPanel className={classes.root}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>
          Do you need help with this order?
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.detail}>
        <Typography className={classes.bold}>
          Customer Service
        </Typography>
        <Typography className={classes.bold}>
          +38 (044) 000 – 00 - 00
        </Typography>
        <Typography>
          Mo-Fr: 08:00 - 18:00
        </Typography>
        <Typography>
          Sat: 10:00 - 14:00
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}