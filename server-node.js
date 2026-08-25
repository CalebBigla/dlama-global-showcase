import { createServer } from 'http';
import handler from './dist/server/server.js';

const PORT = process.env.PORT || 3000;

const server = createServer(async (req, res) => {
  try {
    // Convert Node.js request to Web Request
    const url = `http://${req.headers.host}${req.url}`;
    const request = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
    });

    // Call the Cloudflare-style handler
    const response = await handler.fetch(request, {}, {});

    // Convert Web Response back to Node.js response
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    const body = await response.arrayBuffer();
    res.end(Buffer.from(body));
  } catch (error) {
    console.error('Server error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Internal Server Error');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
