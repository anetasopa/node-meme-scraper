import { promises as fs } from 'node:fs';
import fetch from 'node-fetch';
import parser from 'node-html-parser';

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const data = await response.text();
const body = await parser.parse(data).querySelectorAll('img');

const downloadImage = async (url, path) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.writeFile(path, buffer);
};

for (let i = 0; i <= 9; i++) {
  const images = body[i].getAttribute('src');

  await downloadImage(
    'https://api.memegen.link/images/bad/your_meme_is_bad/and_you_should_feel_bad.jpg',
    './memes/02.jpg',
  );
}

// console.log(body[0].getAttribute('src'));
