import { NextApiRequest, NextApiResponse } from 'next'

export default function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=6Lcj4QUiAAAAACWQnQKT78wPFW3sPfXVHFAtOfSz&response=${req.body.gReCaptchaToken}`,
        })
            .then(reCaptchaRes => reCaptchaRes.json())
            .then(reCaptchaRes => {
                if (reCaptchaRes?.score > 0.5) {
                    const data: { name: string; email: string; message: string } = req.body as object as {
                        name: string
                        email: string
                        message: string
                    }

                    let nodemailer = require('nodemailer')

                    const transporter = nodemailer.createTransport({
                        port: 465,
                        host: 'smtp.yandex.com',
                        auth: {
                            user: 'dev@sosinterior.com',
                            pass: 'uwtardhuwlufulqv',
                        },
                        secure: true,
                    })

                    const mailData = {
                        from: 'dev@sosinterior.com',
                        // to: 'info@sosinterior.com',
                        to: 'mertozyilmazz@gmail.com',
                        subject: `Message Fromtest`,
                        html: `<div>
                            Ad Soyad: ${data.name}<br />
                            Email: ${data.email}<br />
                            Mesaj: ${data.message}
                        </div>`,
                    }

                    transporter.sendMail(mailData, function (err: any) {
                        if (err) {
                            console.log(err)
                            return res.status(500).json({ status: false })
                        } else {
                            return res.status(200).json({ status: true })
                        }
                    })
                } else {
                    console.log(reCaptchaRes)
                    res.status(200).json({ status: false })
                }
            })
            .catch(err => {
                console.log(err)
                res.status(405).json({ status: false })
            })
    } else {
        res.status(405)
        res.end()
    }
}
