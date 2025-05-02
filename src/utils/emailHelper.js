const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service : "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "arya000045@gmail.com",
    pass: "rcclydmajwcrlzwi",
  },
});

// const otpGenerator = () => {
//     let string = '1234567890'
//     let ans = ""

//     for(let i = 0 ; i < 4 ; i++){
//         const index = Math.floor(Math.random() * 10);
//         ans += string[index]
//     }
    
//     return ans ;
// }


// let otp = parseInt(otpGenerator())




const sendOtpMail = async ({otp , email}) => {
    await sendMail({
        subject : "OTP Verification",
        email : email,
        html : `
        <html>
            <body>
                <div>
                    <div style = "display:flex ;  align-items:center ; justify-content:center ; padding:10px">
                        <h2>OTP Verification</h2>
                        <p> Your otp is : <strong> ${otp} </strong></p>
                    </div>
                </div>
            </body>
        </html>
        `
    })
}


const sendMail = async ({email , subject , html}) => {
    try{
        const info = await transporter.sendMail({
            from: '"App Admin" <noreply@gmail.com>', // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            html: html, // html body
        });
    }
    catch(e){
        console.log("Can't send mail" , e)
    }
}


module.exports = {
    sendOtpMail
}
