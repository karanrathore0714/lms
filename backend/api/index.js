import app from '../server/app.js';

export default function handler(req, res) {
  app(req, res); // ← Directly forward to Express
}