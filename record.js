const puppeteer = require('puppeteer');
const { PuppeteerScreenRecorder } = require('puppeteer-screen-recorder');
const server = require('http-server')

server.createServer()

const recConfig = {
  followNewTab: false,
  fps: 60,
  videoFrame: {
    width: 1920,
    height: 1080,
  },
  recordDurationLimit: 10,
};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const recorder = new PuppeteerScreenRecorder(page, recConfig);
  await page.goto('http://localhost:3000');
  await recorder.start('./bookspin.mp4'); // supports extension - mp4, avi, webm and mov
})();
