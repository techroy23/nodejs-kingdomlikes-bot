import consoleMessage from '../../utils/consoleMessage.mjs';

export default async function navigatingYtviews(page) {
    consoleMessage('header', 'NAVIGATING YOUTUBE VIEWS', true)
    await page.goto('https://kingdomlikes.com/free_points/youtube-views');
    consoleMessage('info', 'Entered kingdomlikes youtubeviews page')
    // await page.waitForNavigation({ waitUntil: ["networkidle0", "domcontentloaded"] });
    // consoleMessage('info', 'Waiting for DOM Loading finished')
  }