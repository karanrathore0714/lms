// import app from '../server/app.js';

// export default function handler(req, res) {
//   app(req, res); // ← Directly forward to Express
// }

import express from express

const app  = express()
app.get("/",(req,res) => {
  res.send("hii")
})

export default app