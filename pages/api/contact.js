import nodemailer from 'nodemailer'

export default async (req, res) => {
  const {name, phone, email, message} = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass
    }

  });

  try {
    const emailRes = await transporter.sendMail({
        from: email,
        to: 'ahmedalf75@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<p>Message: ${req.body.message}</p> 
        <p>Phone Number: ${req.body.phone} </p>
        <p>Email: ${req.body.email} </p>
        <p>Sent from: ${req.body.email}</p>
        <p>--------------------------------------</p>`
    })
    console.log('email sent', emailRes.messageId)
  } catch (err) {
    console.log(err)
  }

  res.status(200).json(req.body);

};
