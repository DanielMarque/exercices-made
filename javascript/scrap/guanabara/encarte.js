import fetch from 'node-fetch'
import fs from "fs"
import puppeteer from 'puppeteer'
import request from 'request-promise-native'


const url = 'https://www.supermercadosguanabara.com.br/encarte'

// Lista todos os links de download e faz download dos links com pdf

const getLinkForDownload = (links) => {
  for(let link of links) {
    const part_link = link.split('/')    
    if((part_link[part_link.length - 1]) === 'baixe') {
      return link
    }
  }
}

const main = async () => {
  const html = await fetch(url)
  const rawHtml = await html.text()

  const browser = await puppeteer.launch({
    headless: true 
  })
  const page = await browser.newPage()
  await page.goto(url)

  const elementHandles = await page.$$('a');
  const propertyJsHandles = await Promise.all(
    elementHandles.map(handle => handle.getProperty('href'))
    );
    const hrefs2 = await Promise.all(
      propertyJsHandles.map(handle => handle.jsonValue())
  )

  // console.log(hrefs2)

  const link = getLinkForDownload(hrefs2)
    
  const data = await request.get({
    uri: link,
    encoding: null
  })
  
  fs.writeFile('/home/daniel/projects/exercices-made/javascript/scrap/guanabara/encarte.pdf', data, (err) => {
    if(err) throw err
    console.log('Error')
  })
}
main()