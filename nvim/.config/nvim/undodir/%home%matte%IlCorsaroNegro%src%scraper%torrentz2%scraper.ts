Vim�UnDo� R�RP�Xk��id �ȣ36{��i��@/Fӝi   ;   )            const { data } = await fetch(                             ^���    _�                             ����                                                                                                                                                                                                                                                                                                                                                             ^���     �                 import axios from "axios";5�_�                       #    ����                                                                                                                                                                                                                                                                                                                                                             ^���     �         ?      -            const { data } = await axios.get(5�_�                       #    ����                                                                                                                                                                                                                                                                                                                                                             ^���     �         ?      (            const { data } = await .get(5�_�                       #    ����                                                                                                                                                                                                                                                                                                                                                             ^���     �         ?      '            const { data } = await get(5�_�                       #    ����                                                                                                                                                                                                                                                                                                                                                             ^���     �         ?      $            const { data } = await (5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^���     �      !   ?                  );5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^���     �         ?      )            const { data } = await fetch(5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             ^���     �         ?      +            const { data } = ()await fetch(5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             ^���     �         ?      *            const { data } = (await fetch(5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             ^���     �         ?      0            const { data } = await (await fetch(5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             ^���     �         ?      /            const  data } = await (await fetch(5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^���     �         ?      .            const data } = await (await fetch(5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^���     �         ?      -            const data} = await (await fetch(5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^���    �       ;   ?   >   1import { TorrentZ2Endpoints } from "./endpoints";   #import * as cheerio from "cheerio";   -import { strNullIfEmpty } from "../../utils";   ?import { TorrentZ2SearchResult } from "./models/search-result";       export async function* search(       searchQuery: string,       page = 1   ,): AsyncGenerator<TorrentZ2SearchResult[]> {       while (true) {           try {   ,            const data = await (await fetch(   ?                TorrentZ2Endpoints.search(searchQuery, page++),                   {                       headers: {                           Accept:   �                            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",   *                        "Accept-Language":   B                            "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7",   1                        Connection: "keep-alive",   .                        Host: "utorrentz2.in",   N                        Referer: `https://utorrentz2.in/it/?q=${searchQuery}`,   5                        "Sec-Fetch-Dest": "document",   5                        "Sec-Fetch-Mode": "navigate",   8                        "Sec-Fetch-Site": "same-origin",   /                        "Sec-Fetch-User": "?1",   9                        "Upgrade-Insecure-Requests": "1",   %                        "User-Agent":   �                            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36",                       },                   }               )).text();   )            const $ = cheerio.load(data);       @            const results: TorrentZ2SearchResult[] = Array.from(   (                $("#table > tbody > tr")               ).map((item) => {   "                const i = $(item);   G                const cols = Array.from(i.find("td")).map((x) => $(x));   L                const name = strNullIfEmpty(cols[0].text())?.trim() ?? null;   P                const seeders = parseInt(strNullIfEmpty(cols[1].text()) ?? "0");   *                const leechers = parseInt(   9                    strNullIfEmpty(cols[2].text()) ?? "0"                   );   <                const size = strNullIfEmpty(cols[3].text());   F                const magnet = cols[4].find("a").attr("href") ?? null;                       return {                       name,   :                    seeders: isNaN(seeders) ? 0 : seeders,   =                    leechers: isNaN(leechers) ? 0 : leechers,                       size,                       magnet,                   };               });       ,            if (results.length === 0) break;               yield results;           } catch {               break;   	        }       }5��