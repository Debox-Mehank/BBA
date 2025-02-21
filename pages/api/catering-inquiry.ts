import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
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
      } = req.body;

      const htmlTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Catering Inquiry</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #222; }
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
      `;

      const { data, error } = await resend.emails.send({
        from: "BBA Catering <app.bb.atlanta@gmail.com>",
        to: ["bawarchibiryaniatl@gmail.com"],
        subject: "Bawarchi Atlanta: New Catering Inquiry",
        html: htmlTemplate,
      });

      if (error || !data) {
        console.error("Error sending email:", error);
        return res.status(500).json({ error: "Failed to send email" });
      }

      res.status(200).json({ message: "Email sent successfully", id: data.id });
    } catch (error) {
      console.error("Error in API handler:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
