import fetch from 'node-fetch'
import fs from "fs"
import puppeteer from 'puppeteer'
import request from 'request-promise-native'
import axios from 'axios'

const url = 'https://www.prezunic.com.br/ofertas/encartes/#'

// Lista todos os links de download e faz download dos links com pdf

const returnImgsWithPngs = (links) => {
  return links.filter((link) => {
    let splited_link = link.split('.')
    if(splited_link[splited_link.length - 1] === 'jpg') {
      return link
    }
  })
}

const main = async () => {
  // const html = await fetch(url)
  // const html = await axios.get(url)
  // const rawHtml = await html.text()

  const browser = await puppeteer.launch({
    headless: true 
  })
  const page = await browser.newPage()
  await page.goto(url)

  const elementHandles = await page.$$('img');
  const propertyJsHandles = await Promise.all(
    elementHandles.map(handle => handle.getProperty('src'))
    );
    const hrefs2 = await Promise.all(
      propertyJsHandles.map(handle => handle.jsonValue())
  );

  const formated_links = returnImgsWithPngs(hrefs2)
  console.log(formated_links);
    
  for(let link of formated_links) {
    // Download do arquivo
    const data = await request.get({
      uri: link,
      encoding: null,
    })
  
    fs.writeFile(`/home/daniel/projects/exercices-made/javascript/scrap/prezunic/pages/page${formated_links.indexOf(link)}.jpg`, data, (err) => {
      if(err) throw err
      console.log('Ok')
    })
  }
}

main()