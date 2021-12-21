let url = "https://en.wikipedia.org/wiki/S";
const request = require("request");
const cheerio = require("cheerio");



request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else if (response.statusCode == 404) {
        console.log("page not found");
    }
    else {
          //console.log(html);
        getTopics(html);
    }
}
 function getTopics(html) {
     let $ = cheerio.load(html);
     let ElemArr = $("mw-parser-output  div[role=note],.mw-parser-output p,.mw-headline");
    for (let i = 2; i <= 18; i++) {
        let ele = $(ElemArr[i]).text();
       
        console.log(ele);
        
        }

 
 let ElemArr1 = $(".mw-parser-output  ul li,.mw-headline");
 for (let i = 30; i <= 59; i++) {
    let ele = $(ElemArr1[i]).text();
    console.log(ele);


 }
 }
