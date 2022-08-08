import fetch from 'node-fetch'
import fs from "fs"
import puppeteer from 'puppeteer'
import request from 'request-promise-native'


const url = 'https://ofertasnosupermercado.com/encarte-supermercado-costa-azul/'

const main = async () => {
  const html = await fetch(url)
  const rawHtml = await html.text()

  const browser = await puppeteer.launch({
    headless: false,
    
  })
  const page = await browser.newPage()
  await page.goto(url)
  // const [button] = await page.$x(`//*[@id="react-select-2--value"]/div[2]`)
  debugger
  await page.click(`#__next > div.radio-container > div.radio-header.align-center > i`)
  // await page.waitForSelector(`#react-select-2--value > div.Select-placeholder`)
  // await page.waitForNavigation()
  const data = await page.click(`document.querySelector("#store-selector > div > div.store-selector__store-dropdown.col-12.col-md-6.col-lg > div > div.Select.is-clearable.Select--single > div")`)
  await page.waitForNavigation()
  // await page.click(`#react-select-2--value > div.Select-value`)

  // console.log(data)

  // const text = await page.evaluate(() => Array.from(document.querySelectorAll('div'), element => element.textContent));
  // const elementHandles = await page.$eval('div', (elements) => {
  //   return elements.map(e => e.value);
  // });

  // console.log(text);
  
  
  // const data = await request.get({
  //   uri: hrefs2[32],
  //   encoding: null
  // })
  
  // fs.writeFile('/home/daniel/projects/exercices-made/javascript/scrap/encarte.pdf', data, (err) => {
  //   if(err) throw err
  //   console.log('Error')
  // })
  // way 1
  // const hrefs = await page.evaluate(() => {
  //   () => Array.from(
  //     document.querySelectorAll('a[href]'),
  //     a => a.getAttribute('href')
  //   )
  // })
  // const streamPipeline = promisify(pipeline);
  // const download = await fetch(hrefs2[32], encode)
  // await streamPipeline(response.body, createWriteStream('./octocat.png'));
  // console.log(await download.text())
  // await page.click(`.a[target=_blank]`)
  // console.log(hrefs)
  // console.log(elementHandles)  
  // const $ = load(rawHtml)
  // const result = $('div', `.px-8 text-white text-2xl`)
  // bg-red-700 bg-[url('../img/button-lamina.jpg')] bg-cover bg-center px-10 py-5 my-6 flex items-center rounded-2xl
  // console.log(result.baseURI)
}
main()