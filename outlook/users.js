  const nodemailer = require("nodemailer")
  const { PASSMAILER, USER, SERVICE } = require("../config/envConfig.js");

exports.userSignUpMsg = async (email, first_name) => {

    try {
        const transporter = nodemailer.createTransport({
            service: SERVICE,
            secure: true,
            auth: {
                pass: PASSMAILER,
                user: USER,
            },
        });

        await transporter.sendMail({
            from: USER,
            to: email,
            subject: "DEBUX EATERY",
            html: `<b> Dear customer </b> <br/>
                <p>
                Thank you for registering with us. We are thrilled to have you on board and look forward to serving you with the best dining experience.
                </p>
                
                </br>
                <b>
                
                <p>Best regards,</p>
                <p>DEBUX!</p>
                </b>
                `,
        });
        console.log("email sent successfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
};
