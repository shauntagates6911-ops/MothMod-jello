import express from "express";
import nodemailer from "nodemailer";
import crypto from "crypto";

const app = express();
app.use(express.json());

// Generate magic link tokens
function generateToken() {
  return crypto.randomBytes(32).toString("hex");
}

// Gmail SMTP transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "YOUR_GMAIL@gmail.com",
    pass: "YOUR_APP_PASSWORD"
  }
});

// Send magic link
app.post("/send-magic-link", async (req, res) => {
  const email = req.body.email;
  const token = generateToken();
  const magicLink = `https://yourwebsite.com/magic-login?token=${token}`;

  try {
    await transporter.sendMail({
      from: "shaunta.gates6911@gmail.com",
      to: email,
      subject: "🐛 MothMod Magic Link",
      html: `
        <h2>MothMod Access Portal</h2>
        <p>Your login link is ready:</p>
        <a href="${magicLink}">${magicLink}</a>
        <p>Check your inbox if you dont see it!</p>
      `
    });

    res.json({ success: true, message: "Magic link sent!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Email failed." });
  }
});

app.listen(3000, () => {
  console.log("MothMod Magic Link Server running on port 3000");
});
