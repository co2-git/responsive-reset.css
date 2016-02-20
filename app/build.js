'use strict';

import fs from 'fs';
import path from 'path';
import typo from './responsive-reset';


const stream = fs.createWriteStream('responsive-reset.css');

stream
  .on('error', error => { throw error })
  .on('finish', () => {
    const stream2 = fs.createWriteStream('responsive-reset.css', { flags : 'a+' });
    stream2
      .on('error', error => { throw error })
      .on('finish', () => {
        console.log('OK');
      });

    stream2.write(typo.toString());

    stream2.end();
  });

fs.createReadStream('html5-reset.css')
  .pipe(stream);
