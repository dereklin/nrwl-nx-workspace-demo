/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

const app = express();

interface Ticket {
  id: number;
  title: string;
}

const tickets: Ticket[] = [
  {
    id: 1,
    title: 'Login page is broken'
  },
  {
    id: 2,
    title: 'Everything is broken'
  }
];

app.get('/api/tickets', (req, res) => {
  res.send(JSON.stringify(tickets));
});

const port = 3333;
app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Listening at http://localhost:${port}`);
});
