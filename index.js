

import { input } from '@inquirer/prompts';
import fs from 'fs';
import qr from 'qr-image'; 
const answer = await input({ message: 'Enter your name' });



fs.writeFile('URL.txt', answer, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File created and text saved successfully!');
  }
});


var qr_svg = qr.image(answer);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));

