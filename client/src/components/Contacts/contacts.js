import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { Divider, Container } from '@material-ui/core';

import Contact from './contact';
import useStyles from './_contacts';

const Contacts = () => {
  const classes = useStyles();
  const address = 'Kyiv, Hetmana 1, office 115';
  const info = [
    { contact: '+38 (044) 123-456-789', icon: <PhoneIcon />, id: 1 },
    { contact: '+38 (067) 123-456-789', icon: <img className={classes.img} src={`${process.env.PUBLIC_URL}/img/contacts/kyivstar.jpg`} alt="contact telephone" />, id: 2 },
    { contact: '+38 (063) 123-456-789', icon: <img className={classes.img} src={`${process.env.PUBLIC_URL}/img/contacts/lifecell.jpg`} alt="contact telephone" />, id: 3 },
    { contact: '+38 (099) 123-456-789', icon: <img className={classes.img} src={`${process.env.PUBLIC_URL}/img/contacts/vodafone.jpg`} alt="contact telephone" />, id: 4 },
    { contact: '+38 (099) 123-456-789', icon: <TelegramIcon />, id: 5 },
    { contact: '+38 (099) 123-456-789', icon: <WhatsAppIcon />, id: 6 },
    { contact: 'wmf-about@mail.com', icon: <AlternateEmailIcon />, id: 7 }
  ]

  const renderInfos = info.map((item) => (
    <Contact key={item.id} icon={item.icon}>{item.contact}</Contact>
  ))

  return (
    <Container maxWidth="xl">
      <h2>Consultations and order by phone:</h2>
      <Divider />
      <div className={classes.container}>
        {renderInfos}
        <h3>Address:</h3>
        <span className={classes.block}>{address}</span>
      </div>
    </Container>
  )
}

export default Contacts;
