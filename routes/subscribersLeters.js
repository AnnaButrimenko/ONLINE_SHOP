const nodemailer = require('nodemailer');
const letter = require('../emails/subscribeMail');
const tranporter = nodemailer.createTransport(
  {
    service: 'gmail',
    auth: {
      user: '7plynet@gmail.com',
      pass: 'Mike1994s'
    }
  }
);

module.exports = app=>{
  app.post('/user-mails', async(req,res)=>{
    try {
      const userEmail = req.body.mail;
      await tranporter.sendMail(letter(userEmail));
    } catch (e) {
      // console.log(e)
    }
  })
};