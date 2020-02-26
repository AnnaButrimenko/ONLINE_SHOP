import React from 'react';

import { Grid } from '@material-ui/core';
import FooterCompanyLink from './Footer-links/company';
import FooterAccountLink from './Footer-links/account';
import FooterContactsLink from './Footer-links/contacts';

const FooterNavbar = () => (
  <Grid xs={12} md={7} item>
    <Grid container justify="center" spacing={4}>
      <FooterContactsLink />
      <FooterCompanyLink />
      <FooterAccountLink />
    </Grid>
    <p>&copy; 2020 all rights reserved</p>
  </Grid>
);

export default FooterNavbar