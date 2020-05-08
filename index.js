import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import escapeHtml from 'escape-html';

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./index.html'));
});

app.post('/', (req, res) => {
  const reqBody = req.body;
  const text = (
    reqBody.text //unsafe
    // escapeHtml(reqBody.text) //safe
  );
  res.send(`<textarea cols="40" rows="5" id="resultText">${text}</textarea>`);
});

app.listen(PORT, () => console.log(`server listening to ${PORT}`));