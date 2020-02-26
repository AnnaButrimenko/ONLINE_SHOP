import React from 'react';
import { Grid, List, ListItem, Typography } from '@material-ui/core';

import useStyles from './_sign-up-info';

export default function SignUpInfo () {
  const classes = useStyles();

  const advantagesList = [
    '€10 welcome bonus*',
    'Invitations to the VIP sale and events',
    'Simple and easy management of your customer data, orders and much more'
  ];

  return (
    <Grid item xs={12} sm={10} md={5} className={classes.accountContentLeft} >
      <Typography
        component="p"
        align="justify"
        variant="body2"
        className={classes.benefitText}
      >
        For cooking enthusiasts and epicureans, lovers of elegant design and long-lasting
        quality: Register now, secure your welcome bonus and benefit from the many
        advantages of the myWMF Club!
      </Typography>

      <List className={classes.list}>
        {advantagesList.map((item) => <ListItem key={item} alignItems="flex-start" disableGutters className={classes.listItem}>{item}</ListItem>)}
      </List>

      <Typography
        align="justify"
        variant="body2"
        gutterBottom
        className={classes.helperBonus}
      >
        * To receive the welcome bonus, you must give your consent to the use of your
        personal data. Redeemable in all WMF stores and in the WMF online shop, €50 minimum
        order value applies.
      </Typography>
    </Grid>
  )
}