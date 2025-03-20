import { body, validationResult} from "express-validator";
import nodemailer from "nodemailer";

const validated = [
    body("name").trim().notEmpty().withMessage("Name can not be empty.").escape(),
    body("email").trim().notEmpty().withMessage("Email can not be empty.").escape(),
    body("phone").trim().notEmpty().withMessage("Phone can not be empty.").escape(),
    body("extra").trim().escape()
]

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: globalThis.process.env.EMAIL,
        pass: globalThis.process.env.EMAILPASS
    }
})

function sendEmail(req, res, next) {
    const { name, email, phone, extra, service } = req.body;

    const mailOptions = {
        from: email,
        to: globalThis.process.env.EMAIL,
        subject: `${name} + " " + ${service}`,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${extra}`
    }

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).send(errors.array());

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error(error);
                return next(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        })

        //res.send("Email sent successfully!");
        res.redirect("/");
    } catch (e) {
        next(e);
    }
}

export { validated, sendEmail }