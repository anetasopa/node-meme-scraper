import { promises as fs } from 'node:fs';
import fetch from 'node-fetch';
import parser from 'node-html-parser';

const response = await fetch(
  'https://memegen-link-examples-upleveled.netlify.app/',
);
const data = await response.text();
const body = await parser.parse(data).querySelectorAll('img');
console.log(body);

const downloadImage = async (url, path) => {
  const response = await fetch(url);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.writeFile(path, buffer);
};

for (let i = 0; i <= 9; i++) {
  const images = body[i].getAttribute('src');

  const number = 0;

  await downloadImage(images, `./memes/0${number + i}.jpg`);
}
