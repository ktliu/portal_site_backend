import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://lwvymquvzsachymoouxf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3dnltcXV2enNhY2h5bW9vdXhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5Njk3OTAsImV4cCI6MjAzNTU0NTc5MH0.hQtBZi2d6enMbc37SiauOr4RjAI85eAVsD_0_NkU2D0"
);

const WEBFLOW_DOMAIN = "https://portal-site-7b3329.webflow.io/";
const YOUR_DOMAIN = "http://localhost:3000"; // Replace with your actual domain

export default async function handler(req, res) {
  // Extract token from Authorization header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Verify the token using Supabase SDK or API
  // try {
  //   const { data, error } = await supabase.auth.api.verify(token);

  //   if (error) {
  //     console.error("Error verifying token:", error.message);
  //     return res.status(403).json({ error: "Forbidden" });
  //   }

  //   // Token is verified successfully, store decoded token in req
  //   req.decodedToken = data;

  //   // Proceed to handle your API logic here

  //   res.status(200).json({ message: "Token verified successfully", data });
  // } catch (error) {
  //   console.error("Error verifying token:", error.message);
  //   return res.status(403).json({ error: "Forbidden" });
  // }
}
