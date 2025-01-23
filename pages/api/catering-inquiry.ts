import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const {
        firstname,
        lastname,
        phonenumber,
        email,
        eventdate,
        pickuptime,
        noofpeople,
        management_message,
        catering_type,
        event_type,
      } = req.body

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      })

      const htmlTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Catering Inquiry</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #222    ; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h1 { color: #4a5568; }
            .info { margin-bottom: 20px; }
            .label { font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>New Catering Inquiry</h1>
            <div class="info">
              <p><span class="label">Name:</span> ${firstname} ${lastname}</p>
              <p><span class="label">Phone:</span> ${phonenumber}</p>
              <p><span class="label">Email:</span> ${email}</p>
              <p><span class="label">Event Date:</span> ${eventdate}</p>
              <p><span class="label">Pickup/Delivery Time:</span> ${pickuptime}</p>
              <p><span class="label">Number of People:</span> ${noofpeople}</p>
          
              <p><span class="label">Message:</span> ${management_message}</p>
            </div>
          </div>
        </body>
        </html>
      `
    //   <p><span class="label">Catering Type:</span> ${catering_type}</p>
    //   <p><span class="label">Event Type:</span> ${event_type}</p>

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "meet@debox.co.in",
        subject: "New Catering Inquiry",
        html: htmlTemplate,
      }

      await transporter.sendMail(mailOptions)

      res.status(200).json({ message: "Email sent successfully" })
    } catch (error) {
      console.error("Error sending email:", error)
      res.status(500).json({ error: "Failed to send email" })
    }
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

