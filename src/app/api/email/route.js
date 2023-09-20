import { NextResponse } from "next/server"

const sgMail = require("@sendgrid/mail")
export async function POST(request) {
  try {
    const body = await request.json()
    const { to, subject, text, html } = body

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to,
      from: "viandapphenry@gmail.com",
      subject,
      text,
      html,
    }
    const mail = await sgMail.send(msg)

    return NextResponse.json({ message: "email sent" }, { status: 200 })
  } catch (error) {
    console.log("file: route.js:22  error:", error)
  }
}
