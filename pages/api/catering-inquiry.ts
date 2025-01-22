import type { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { firstname, lastname, phonenumber, email, eventdate, pickuptime, noofpeople, management_message } =
        req.body

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      })

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "meet@debox.co.in",
        subject: "New Catering Inquiry",
        html: `Greetings! <br/><br/>
          A new catering inquiry was submitted by ${firstname} ${lastname} with the following details:
          <br/><br/>
          Phone Number: ${phonenumber}<br/>
          Email: ${email}<br/>
          Event Date: ${eventdate}<br/>
          Pickup/Delivery Time: ${pickuptime}<br/>
          Number of People: ${noofpeople}<br/>
          Message: ${management_message}<br/>
          <br/><br/>
        `,
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

