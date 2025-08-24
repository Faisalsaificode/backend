// import nodemailer
const nodemailer = require('nodemailer');

//configure email and send it

async function sendMail(){
    //create an eamil transporter
    //SMTP (simple mail tranfer protocol)
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth : {
            user:'faisalsaifi.code@gmail.com',
            pass:'bydl ylmd redo azna',

        },
    });

    // configure email content

    const mailOptions = {
        from:'faisalsaifi.code@gmail.com',
        to: 'shaikfouzi1903@gmail.com',
        subject: 'Ummmmahhhhh',
        text: 'Your men send this email to check there node mail server!\nIf you find this mail reply back with some good msg......',
    }

    //send the mail
    try{
        const result = await transporter.sendMail(mailOptions);
        console.log("Email sent Successfully");
    }catch(err){
        console.log('Email send failed with error: ' + err)
    }
}

sendMail();