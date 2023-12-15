const request = require("request");
const cheerio = require("cheerio");
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary"
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
    let arr = $(".ds-text-typo-mid1 .ci-html-content");
    let text = $(arr[0]).text();
    let htmldata = $(arr[0]).html();

    console.log("text data ",text);
    console.log("HTML data ",htmldata);
}

{/* <div class="lg:hover:ds-bg-ui-fill-translucent ds-hover-parent ds-relative">
<div class="ds-text-tight-m ds-font-regular ds-flex ds-px-3 ds-py-2 lg:ds-px-4 lg:ds-py-[10px] ds-items-start ds-select-none lg:ds-select-auto">
<div class="lg:ds-flex lg:ds-items-center lg:ds-px-2">
<span class="ds-text-tight-s ds-font-regular ds-mb-1 lg:ds-mb-0 lg:ds-mr-3 ds-block ds-text-center ds-text-typo-mid1">18.5</span>
<div class="ds-flex ds-items-center ds-justify-center ds-rounded ds-overflow-hidden ds-bg-ui-fill-default-translucent ds-text-typo">
<div class="ds-text-tight-m ds-font-bold ds-flex ds-items-center ds-justify-center ds-text-center ds-w-10 ds-h-10 ds-text-typo"><span>1</span>
</div>
</div>
</div>
<div class="xl:ds-w-[730px]">
<div>
<div class="ds-ml-4 lg:ds-ml-3 ds-text-typo-mid1">
<div class="ds-leading-none ds-mb-0.5">
<span>Gayle to Rayudu<!-- -->, <span> 1 run</span></span>
</div>
<div itemprop="articleBody" class="first-letter:ds-capitalize"><p class="ci-html-content"><b>misfield at cover</b> and that is it for both teams this season. Full and just outside off, driven hurredly into the covers and it's past the dive</p></div></div></div></div><div class="ds-hover-child ds-ml-auto ds-mr-1"><div class="ds-flex ds-flex-row ds-space-x-2"><div class="ds-popper-wrapper"><button class="ds-flex ds-items-center ds-justify-center ds-bg-transparent ds-border-0 ds-text-typo ds-rounded-full ds-h-8 ds-w-8 ds-bg-transparent ds-border-0 ds-text-typo ds-cursor-pointer" aria-expanded="false"><i class="icon-share-outlined ds-text-icon" style="font-size: 16px;"></i><span class="ds-text-tight-s ds-font-bold"></span></button></div></div></div></div></div> */}