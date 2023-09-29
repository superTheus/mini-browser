#!/usr/bin/env node

const args = process.argv.slice(2);

let value;

if (args.length > 0) {
  const frame = args[0];
  const parts = frame.split('=');
  const command = parts[0];

  if (command === '--angular') {
    value = {
      url: 'http://localhost:4200',
    };
  } else if (command === '--vue' || command === '--next') {
    value = {
      url: 'http://localhost:3000',
    };
  } else if (command === '--url') {
    console.log('URL Selected:', parts[1]);
    value = {
      url: parts[1],
    };
  } else {
    value = {
      url: 'https://www.npmjs.com/package/mini-browser',
    };
  }
} else {
  value = {
    url: 'https://www.npmjs.com/package/mini-browser',
  };
}

const json = JSON.stringify(value);
process.env.browser = json;

setTimeout(() => {
  const { execFileSync } = require('child_process');
  try {
    execFileSync('./dist/mini-browser-win32-x64/mini-browser.exe', { stdio: 'inherit' });
  } catch (error) {
    console.error('Error:', error.message);
  }
}, 2000);