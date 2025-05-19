import app from '../server/app.js';
import { createServer } from 'http';
import { parse } from 'url';

// Vercel needs this wrapper to handle requests
export default function handler(req, res) {
  const parsedUrl = parse(req.url, true);
  createServer(app).emit('request', req, res);
}
