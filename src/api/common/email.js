import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",  
  secure: true,
  port: 587,
  auth: {
    user:'screenplay95@gmail.com',
    pass:'gmxhjiwruwpgchvn'
  },
});

export const sendEmail = (tomail, subject, body) => {  
  const message = {
    from: 'screenplay95@gmail.com',
    to: tomail,
    subject: subject,
    html: body
  };

  transporter.sendMail(message).then((info)=>{
    console.log('Message sent: %s', info.messageId);
  }).catch((err)=>{
    console.log('in nodemailer transporter',err)
  }) 
};