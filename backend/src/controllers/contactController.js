import { body, validationResult} from "express-validator";

const validated = [
    body("name").trim().notEmpty().withMessage("Name can not be empty.").escape(),
    body("email").trim().notEmpty().withMessage("Email can not be empty.").escape(),
    body("phone").trim().notEmpty().withMessage("Phone can not be empty.").escape(),
    body("extra").trim().escape()
]

function sendEmail(req, res, next) {
    const { name, email, phone, extra, service } = req.body;

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).send(errors.array());
        res.redirect("/");
    } catch (e) {
        next(e);
    }
}

export { validated, sendEmail }