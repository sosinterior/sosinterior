export default function (req: Request, res: Response) {
    console.log(req.body)
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
        port: 465,
        host: 'smtp.yandex.com',
        auth: {
            user: 'dev@sosinterior.com',
            pass: 'uwtardhuwlufulqv',
        },
        secure: false,
    })

    const mailData = {
        from: 'info@sosinterior.com',
        to: 'mertozyilmazz@gmail.com',
        subject: `Message Fromtest`,
        text: 'test',
        html: `<div>{req.body.message}</div>`,
    }

    transporter.sendMail(mailData, function (err: any, info: any) {
        if (err) {
            console.log('ERROR')
            console.log(err)
        } else {
            console.log('NO ERROR')
            console.log(info)
        }
    })
}
