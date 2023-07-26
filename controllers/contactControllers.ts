import { mailOptions, transporter } from "@/services/nodemailerServices";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

const CONTACT_MESSAGE_FIELDS: any = {
  name: "Name",
  email: "Email",
  phone: "Phone No.",
  message: "Message",
};

function generateEmailContent(data: any) {
  const stringData = Object.entries(data).reduce((str, [key, value]) => {
    return (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${value}\n\n`);
  }, "");

  const year = new Date().getFullYear();
  const footer = `<span>&copy; RJ Interior ${year}</span>`;

  const htmlData = Object.entries(data).reduce((str, [key, value]) => {
    return (str += `<tr><td style="padding: 4px !important; line-height: 1.5rem; style="font-size: 1.5rem; font-weight: 500"><span style="font-weight: 600"
    >${CONTACT_MESSAGE_FIELDS[key]}:</span> ${value}</td>`);
  }, "");

  return {
    text: stringData,
    html: `<html>
    <head>
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    </head>
  
    <body
      style="
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
          'Lucida Sans', Arial, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <!-- Outer Container -->
      <div
        style="
          padding: 36px;
          width: 100%;
          height: 100%;
          background-color: #f9fafb;
        "
      >
        <div style="width: 100%; height: 100%">
          <!-- Inner Container -->
          <div
            style="
              width: 600px;
              height: fit-content;
              background-color: white;
              box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
              border: solid 1px #dddddd;
              border-radius: 8px;
              overflow: hidden;
              margin: auto;
            "
          >
            <!-- Logo -->
            <div>
              <div
                style="
                  padding: 16px 0px 16px 0px;
                  background-color: #b3432a;
                  color: white;
                  border-bottom: 1px solid #dddddd;
                  text-align: center;
                "
              >
                <h1
                  style="
                    margin-bottom: 0px;
                    margin-top: 8px;
                    font-weight: bold;
                    font-size: 1.5rem;
                  "
                >
                  RJ Interior
                </h1>
              </div>
            </div>
            <div style="padding: 16px">
            <table style="width: 100%; border-collapse: collapse">
            ${htmlData}
            </table>
          </div>
          <div style="border-top: 1px solid #dddddd; text-align: center">
            <p>😃 Have a nice day! 😃</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
            `,
  };
}

export default async function contact(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = req.body;
  if (
    !data ||
    (data && !data.name) ||
    (data && !data.email) ||
    (data && !data.phone) ||
    (data && !data.message)
  ) {
    return res.status(400).json({ message: "Bad Request" });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject: data.name,
    });
    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error: any) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
}
