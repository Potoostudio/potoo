

export default function (req, res) {
  require('dotenv').config()
    
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.gmail.com',
        service: 'Gmail',
        auth: {
            user: 'bscenclosurescontact@gmail.com',
            pass: process.env.password,
        },
        secure: true,
        tls: {
          rejectUnauthorized:false
        }
    })

    const mailData = {
        from: 'sender@bscenclosures.com',
        to: 'ahmedalf75@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<p>Message: ${req.body.message}</p> 
        <p>Phone Number: ${req.body.phone} </p>
        <p>Email: ${req.body.email} </p>
        <p>Sent from: ${req.body.email}</p>
        <p>--------------------------------------</p>`
      }

      transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(`there is an error sending the form` + err)
        else
          console.log(info)
      })

      console.log(req.body)
      res.status(200)
} 