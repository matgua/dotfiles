VimUnDoĺ p6>cÂ)¤˘ÁĎ¸öíŽľDő%WÇĆhůu<j0          const body = (await fetch(   k                          ^    _Đ                             ˙˙˙˙                                                                                                                                                                                                                                                                                                                                                             ^)     ő                 import axios from "axios";5_Đ                            ˙˙˙˙                                                                                                                                                                                                                                                                                                                                                             ^)    ő          Ą       #import * as cheerio from "cheerio";   8import { IlCorsaroNeroTorrent } from "./models/torrent";   Cimport { IlCorsaroNeroSearchResult } from "./models/search-result";   5import { IlCorsaroNeroEndpoints } from "./endpoints";   7import { strNullIfEmpty, hardTrim } from "../../utils";       // TODO: Aggiungere ordinamento       Kexport async function torrent(url: string): Promise<IlCorsaroNeroTorrent> {   +    const { data: body } = await axios.get(   ,        IlCorsaroNeroEndpoints.generic(url),   	        {               headers: {                   accept:                       "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",   I                "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",   -                "sec-fetch-dest": "document",   -                "sec-fetch-mode": "navigate",   0                "sec-fetch-site": "same-origin",   '                "sec-fetch-user": "?1",   1                "upgrade-insecure-requests": "1",                   "user-agent":                       "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36",               },   	        }       );   !    const $ = cheerio.load(body);       H    const leftCol = $('td[valign="top"] td[valign="top"]:nth-child(1)');   I    const rightCol = $('td[valign="top"] td[valign="top"]:nth-child(2)');       6    const magnet = $("a.magnet").attr("href") ?? null;       const magnetId =   F        magnet?.split("btih:")[1].split("&")[0].toUpperCase() ?? null;           const rightColRows =           rightCol === null               ? null               : Array.from(   H                  rightCol.find("table:nth-child(1) tr:nth-child(-n+6)")                 );       ?    const uploaderThumbnail = $(rightColRows?.[4]).find("img");        const uploaderThumbnailSrc =   =        $(rightColRows?.[4]).find("img").attr("src") ?? null;       L    const uploaderUrl = $(rightColRows?.[4]).find("a").attr("href") ?? null;           return {   M        title: strNullIfEmpty($("b > font").text())?.split(" - ")[1] ?? null,           magnet,           magnetId,           torrage:               magnetId === null                   ? null   B                : `https://t.torrage.info/download?h=${magnetId}`,           hash: strNullIfEmpty(               leftCol   I                .find("tr.odd2:nth-last-child(1) > td:nth-last-child(1)")                   .text()   
        ),   $        announceUrl: strNullIfEmpty(   @            leftCol.find("tr.odd > td:nth-last-child(1)").text()   
        ),   !        category: strNullIfEmpty(   5            $(Array.from(leftCol.find("tr.odd2"))[0])   -                .find("td:nth-last-child(1)")                   .text()   
        ),   -        descriptionHtml: $("div > i").html(),           seeders: parseInt(               strNullIfEmpty(   E                $(rightColRows?.[0]).find("font:nth-child(1)").text()               ) ?? "0"   
        ),           leechers: parseInt(               strNullIfEmpty(   E                $(rightColRows?.[0]).find("font:nth-child(2)").text()               ) ?? "0"   
        ),           weight:               strNullIfEmpty(   C                $(rightColRows?.[1]).find("td:nth-child(2)").text()               )?.trim() ?? null,   "        completed: strNullIfEmpty(   ?            $(rightColRows?.[2]).find("td:nth-child(2)").text()   
        ),           dateAdded: hardTrim(   O            strNullIfEmpty($(rightColRows?.[3]).find("td:nth-child(2)").text())   
        ),           uploader: {               url:   $                uploaderUrl === null                       ? null   M                    : IlCorsaroNeroEndpoints.endpoint.endpoint + uploaderUrl,   H            name: strNullIfEmpty($(rightColRows?.[4]).find("a").text()),   =            thumbnail: uploaderThumbnailSrc?.startsWith("//")   1                ? "https:" + uploaderThumbnailSrc   '                : uploaderThumbnailSrc,   @            userStatus: uploaderThumbnail.attr("title") ?? null,   
        },           ranking:               strNullIfEmpty(   C                $(rightColRows?.[5]).find("td:nth-child(2)").text()               )?.trim() ?? null,       };   }       export async function* search(       searchQuery: string,       page = 0   0): AsyncGenerator<IlCorsaroNeroSearchResult[]> {       while (true) {   /        const { data: body } = await axios.get(   ?            IlCorsaroNeroEndpoints.search(searchQuery, page++),               {                   headers: {                       accept:                           "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",   M                    "accept-language": "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",   c                    referer: `${IlCorsaroNeroEndpoints.endpoint.endpointS}adv/${searchQuery}.html`,   1                    "sec-fetch-dest": "document",   1                    "sec-fetch-mode": "navigate",   4                    "sec-fetch-site": "same-origin",   +                    "sec-fetch-user": "?1",   5                    "upgrade-insecure-requests": "1",   !                    "user-agent":                           "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36",                   },               }   
        );   %        const $ = cheerio.load(body);       @        const results: IlCorsaroNeroSearchResult[] = Array.from(               $("tr.odd,tr.odd2")           ).map((torrent) => {   !            const t = $(torrent);   C            const cols = Array.from(t.find("td")).map((x) => $(x));   /            const category = cols[0].find("a");   ,            const title = cols[1].find("a");   L            const seeders = parseInt(strNullIfEmpty(cols[5].text()) ?? "0");   M            const leechers = parseInt(strNullIfEmpty(cols[6].text()) ?? "0");                   return {                   category: {   7                    url: category.attr("href") ?? null,   :                    name: strNullIfEmpty(category.text()),                   },   4                title: strNullIfEmpty(title.text()),   0                url: title.attr("href") ?? null,   7                weight: strNullIfEmpty(cols[2].text()),   5                date: strNullIfEmpty(cols[4].text()),   6                seeders: isNaN(seeders) ? 0 : seeders,   9                leechers: isNaN(leechers) ? 0 : leechers,               };           });       (        if (results.length === 0) break;           yield results;       }5_Đ                    
       ˙˙˙˙                                                                                                                                                                                                                                                                                                                                                             ^/     ő   	            M  const {data: body} = await axios.get(IlCorsaroNeroEndpoints.generic(url), {5_Đ                    
   "    ˙˙˙˙                                                                                                                                                                                                                                                                                                                                                             ^9     ő   	            M  const {data: body} = await fetch.get(IlCorsaroNeroEndpoints.generic(url), {5_Đ                    
   "    ˙˙˙˙                                                                                                                                                                                                                                                                                                                                                             ^:     ő   	            L  const {data: body} = await fetchget(IlCorsaroNeroEndpoints.generic(url), {5_Đ                    
       ˙˙˙˙                                                                                                                                                                                                                                                                                                                                                             ^]     ő   	            I  const {data: body} = await fetch(IlCorsaroNeroEndpoints.generic(url), {5_Đ                    
       ˙˙˙˙                                                                                                                                                                                                                                                                                                                                                             ^^     ő   	            K  const {data: body} = ()await fetch(IlCorsaroNeroEndpoints.generic(url), {5_Đ      	                     ˙˙˙˙                                                                                                                                                                                                                                                                                                                                                             ^b     ő                 });5_Đ      
           	   
       ˙˙˙˙                                                                                                                                                                                                                                                                                                                                                             ^f     ő   	            J  const {data: body} = (await fetch(IlCorsaroNeroEndpoints.generic(url), {5_Đ   	              
   
       ˙˙˙˙                                                                                                                                                                                                                                                                                                                            
          
          v       ^k     ő   	            P  const {data: body} = await (await fetch(IlCorsaroNeroEndpoints.generic(url), {5_Đ   
                
       ˙˙˙˙                                                                                                                                                                                                                                                                                                                            
          
          v       ^l    ő   	            I  const body} = await (await fetch(IlCorsaroNeroEndpoints.generic(url), {5_Đ                           ˙˙˙˙                                                                                                                                                                                                                                                                                                                            
          
          v       ^q     ő                 })).text());5_Đ                           ˙˙˙˙                                                                                                                                                                                                                                                                                                                            
          
          v       ^s    ő   	            H  const body = await (await fetch(IlCorsaroNeroEndpoints.generic(url), {       headers: {         accept:           'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',   ?      'accept-language': 'it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7',   #      'sec-fetch-dest': 'document',   #      'sec-fetch-mode': 'navigate',   &      'sec-fetch-site': 'same-origin',         'sec-fetch-user': '?1',   '      'upgrade-insecure-requests': '1',         'user-agent':   s        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36',       },     })).text();5_Đ                    k       ˙˙˙˙                                                                                                                                                                                                                                                                                                                            
          
          v       ^x     ő   j   l         )    const {data: body} = await axios.get(5_Đ                    k   $    ˙˙˙˙                                                                                                                                                                                                                                                                                                                            
          
          v       ^y     ő   j   l         )    const {data: body} = await fetch.get(5_Đ                    k   $    ˙˙˙˙                                                                                                                                                                                                                                                                                                                            
          
          v       ^y     ő   j   l         (    const {data: body} = await fetchget(5_Đ                    k   $    ˙˙˙˙                                                                                                                                                                                                                                                                                                                            
          
          v       ^y     ő   j   l         '    const {data: body} = await fetchet(5_Đ                    k   $    ˙˙˙˙                                                                                                                                                                                                                                                                                                                            
          
          v       ^z     ő   j   l         &    const {data: body} = await fetcht(5_Đ                    k   
    ˙˙˙˙                                                                                                                                                                                                                                                                                                                            k   
       k          v       ^     ő   j   l         %    const {data: body} = await fetch(5_Đ                    k       ˙˙˙˙                                                                                                                                                                                                                                                                                                                            k   
       k          v       ^     ő   j   l             const body = await fetch(5_Đ                    k       ˙˙˙˙                                                                                                                                                                                                                                                                                                                            k   
       k          v       ^     ő   j   l             const body = ()await fetch(5_Đ                    |       ˙˙˙˙                                                                                                                                                                                                                                                                                                                            k   
       k          v       ^     ő   {   }             );5_Đ                    k       ˙˙˙˙                                                                                                                                                                                                                                                                                                                            k   
       k          v       ^     ő   j   l             const body = (await fetch(5_Đ                     m       ˙˙˙˙                                                                                                                                                                                                                                                                                                                            k   
       k          v       ^    ő   j   |         $    const body = await (await fetch(   9      IlCorsaroNeroEndpoints.search(searchQuery, page++),         {           headers: {             accept:               'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',   C          'accept-language': 'it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7',   Y          referer: `${IlCorsaroNeroEndpoints.endpoint.endpointS}adv/${searchQuery}.html`,   '          'sec-fetch-dest': 'document',   '          'sec-fetch-mode': 'navigate',   *          'sec-fetch-site': 'same-origin',   !          'sec-fetch-user': '?1',   +          'upgrade-insecure-requests': '1',             'user-agent':   w            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36',   
        },         },       )).text();5_Đ   
                 
       ˙˙˙˙                                                                                                                                                                                                                                                                                                                            
          
          v       ^l     ő   	            H  const body}= await (await fetch(IlCorsaroNeroEndpoints.generic(url), {5çŞ