import fetch from 'node-fetch'
import fs from "fs"
import puppeteer from 'puppeteer'
import { encode } from 'punycode'
import request from 'request-promise-native'
// import {createWriteStream} from 'node:fs';
// import {pipeline} from 'node:stream';


const url = 'https://www.redeconomia.com.br/encartes/'

const main = async () => {
  const html = await fetch(url)
  const rawHtml = await html.text()

  const browser = await puppeteer.launch({
    headless: true 
  })
  const page = await browser.newPage()
  await page.goto(url)

  // way 1
  // const hrefs = await page.evaluate(() => {
  //   () => Array.from(
  //     document.querySelectorAll('a[href]'),
  //     a => a.getAttribute('href')
  //   )
  // })
  // const streamPipeline = promisify(pipeline);
  const elementHandles = await page.$$('a');
  const propertyJsHandles = await Promise.all(
    elementHandles.map(handle => handle.getProperty('href'))
  );
  const hrefs2 = await Promise.all(
    propertyJsHandles.map(handle => handle.jsonValue())
  ); 
  console.log(hrefs2[32]);
  
  const download = await fetch(hrefs2[32], encode)

  const data = await request.get({
    uri: hrefs2[32],
    encoding: null
  })
  
  // await streamPipeline(response.body, createWriteStream('./octocat.png'));
  // console.log(await download.text())

  fs.writeFileSync('/home/daniel/projects/exercices-made/javascript/scrap/encarte.pdf',data)

  // await page.click(`.a[target=_blank]`)

  // console.log(hrefs)
  // console.log(elementHandles)
  
  // const $ = load(rawHtml)

  // const result = $('div', `.px-8 text-white text-2xl`)


  // bg-red-700 bg-[url('../img/button-lamina.jpg')] bg-cover bg-center px-10 py-5 my-6 flex items-center rounded-2xl
  // console.log(result.baseURI)
}
main()