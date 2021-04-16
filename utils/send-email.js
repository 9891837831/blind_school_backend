"use strict"


const apiKey = '8680d575af96a20c90ffecb03dfefba1-a09d6718-2bc611c5';
const domain="sandbox01c1af4fc14d4b39affe3313f5c393a8.mailgun.org"

const mailgun = require('mailgun-js')({ domain, apiKey });
module.exports = {


    //Helper for sending Email
    sendMail: async (input) => {
        console.log('[=== Send Email Request ===]', input);
        await mailgun.messages().send({
            from: `<shubham.tacatlanta@gmail.com>`,
              to: input.email,
            subject: 'Login Details',
              text: `Here is Details`,
              html:`<h1>Hello  ${input.person_name}</h1>
                    <h3> This is your Login credentials</h3>
                    <p>email:${input.email}</p>
                    <p>password:${input.password}</p>`
            
            
          }).then((data) => {
            console.log(data)
            console.log('Message sent')
        }).catch((error) => {
            
            console.log(error)
            
        })
   
         
    },
  
    //Forgot Password reset Link
    sendresetMail: (username, email, reset_token) => {     
        console.log('reset token ===', username, email, reset_token)
        const resetLink = `http://localhost:3000/set-password?${reset_token}`
        console.log("***",resetLink)

          mailgun.messages().send({
            from: `Hello <shubham.tacatlanta@gmail.com>`,
              to: email,
            subject: 'Reset password',
              text: `Please click link to set password ${username} ${resetLink}`,
            
          }).then((data) => {
            console.log(data)
            console.log('Message sent')
        }).catch((error) => {
            
            console.log(error)
            
        })
   
         }
}