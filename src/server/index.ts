import express from 'express';

async function createServer() {
  const app = express();

  app.listen(import.meta.env.VITE_API_PORT);

  app.get('/', (req, res) => {
    res.send('Hello world!');
  });

  return 0;
}

createServer();