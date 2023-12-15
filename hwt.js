const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard"
request(url,cb);

console.log("Before");
function cb(err,res,html){
    if(err){
        console.log(err);
    }else{
        //console.log(html);
        extractHTML(html);
    }
}
console.log("After");

function extractHTML(html){
    let $ = cheerio.load(html);
    let teams = $(".ds-flex .ds-text-compact-xxs .ds-flex.ds-flex-col .ci-team-score");
    let teamname;
    //let teams = $(" a > .ds-text-tight-l");
    for(let i = 0;i<teams.length;i++){
        // let htmldata = $(teams[i]).html();
        // console.log(htmldata);
        let hasclass = $(teams[i]).hasClass(".ds-opacity-50");
        if(hasclass==false){
            let ele = $(teams[i]).find(".ds-text-tight-l");
            teamname = ele.text();
        }

        

    }
    // console.log(teamname);
    let tables = $(".ds-rounded-lg.ds-mt-2");
    let htmlstr = "";
    for(let i = 0;i<tables.length;i++){
        // let htmldata = $(tables[i]).html();
        // console.log(htmldata);
        let teamnameele = $(tables[i]).find(".ds-text-title-xs.ds-font-bold.ds-capitalize");
        let teamnamehere = teamnameele.text();

        //console.log(teamnamehere);
        if(teamname==teamnamehere){
            console.log(teamname);
            let tableelem = $(tables[i]).find(".ds-rounded-xl .ds-p-0 table");
            tableelemf = tableelem[1];
            //console.log($(tableelemf).html());
            let ws = $(tableelemf).find("tbody tr .ds-w-0 strong");
            let wickets = $(ws).text()
            let warr = wickets.split("");
            var warrf = warr.map(Number);
            console.log((warrf.sort())[warrf.length - 1]); 
        }
    }

}   