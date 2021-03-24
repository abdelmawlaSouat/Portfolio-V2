/*
 * File: send-mail.js
 * Author: Abdelmawla Souat
 * Email: abdelmawla.souat@gmail.com
 * -----
 * Created at: 2021-03-22 7:37:08 pm
 * Last Modified: 2021-03-24 7:45:36 pm
 * -----
 * Copyright (c) 2021 Yuei
 */

import nodemailer from 'nodemailer';

export default (req, res) => {
  const transporter = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAILER_EMAIL,
      pass: process.env.MAILER_PASSWORD,
    },
  });

  transporter.verify((error) => {
    // eslint-disable-next-line no-console
    if (error) console.log(error);
  });

  const mail = {
    from: req.body.name,
    to: 'abdelmawla.souat@gmail.com',
    subject: req.body.subject,
    html: `
      <span style="font-size: 2rem;"><b>Name: </b> ${req.body.name} <br/></span>
      <span style="font-size: 2rem;"><b>Email: </b> ${req.body.email} <br/></span>
      <span style="font-size: 2rem;"><b>Subject: </b> ${req.body.subject} <br/></span>
      <span style="font-size: 2rem;"><b>Message: </b> <br/></span>
      <p style="font-size: 1.5rem;">${req.body.message}</p>
    `,
  };

  transporter.sendMail(mail, (err) => {
    if (err) {
      res.json({ msg: 'fail' });
    } else {
      res.status(200).json({ msg: 'success' });
    }
  });
};
