import fetch from 'node-fetch'
import fs from "fs"
import puppeteer from 'puppeteer'
import request from 'request-promise-native'

// Função que busca imagens do site statico, através do seletor

const selectors = [
  '#post-3620 > div.td-post-content.tagdiv-type > p:nth-child(9) > img',
  '#post-3620 > div.td-post-content.tagdiv-type > p:nth-child(10) > img',
  '#post-3620 > div.td-post-content.tagdiv-type > p:nth-child(11) > img',
  '#post-3620 > div.td-post-content.tagdiv-type > p:nth-child(12) > img'
]

const incrementSelectors = (selectors) => {
  const incrementedSelectors = selectors.map((sele) => {
    const matched = sele.match(/([0-9])\w+/g)
    const matched_int = parseInt(matched) + 1 
    const gege = matched_int.toString()    
    return sele.replace(matched[0], gege)
  })
  // console.log(incrementedSelectors)
  return incrementedSelectors
}

async function run(image_selector, pageNumber) {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1200 });
  await page.goto('https://ofertasnosupermercado.com/encarte-supermercado-costa-azul/', {waitUntil: 'load', timeout: 60000});
  
  let imageHref = await page.evaluate((sel) => {
    return document.querySelector(sel).getAttribute('src').replace('/', '');
  }, image_selector);

  console.log(imageHref);
  var viewSource = await page.goto(imageHref, {waitUntil: 'load', timeout: 60000});
  fs.writeFile(`encarte/pagina${pageNumber}.jpg`, await viewSource.buffer(), function (err) {
  if (err) {
    return console.log(err);
  }
  console.log("The file was saved!");
});
  browser.close();
}

const main = async () => {
  let pageNumber = 1
  // console.log(selectors.match('([0-9])\w+'))
  for(let i = 0; i < selectors.length; i++) {
    try {
      // console.log(selectors[i])
      throw new Error()
      await run(selectors[i], pageNumber)
      pageNumber ++  
    } catch (e) {

      // Adicionar try catch com um laço while e chamada do incrementador
      const new_selectors = incrementSelectors(selectors)
      // console.log(new_selectors[i])
      await run(new_selectors[i], pageNumber)
      pageNumber ++  
    }    
  }
}

// const result = incrementSelectors(selectors)
// console.log(result)

main()