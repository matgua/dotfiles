Vim�UnDo� `$�th��V	�G7���+��������      ?            item['url'] = question.xpath('/@href').extract()[0]      *      /       /   /   /    ^���    _�                             ����                                                                                                                                                                                                                                                                                                                                                             ^��>     �                 �              5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��C     �                from scrapy import Spider5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^��C     �                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^��E     �                5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��I     �               class StackSpider(Spider)5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��J     �               class StackSpider(Spider):5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��N     �                   �             5�_�      	                 *    ����                                                                                                                                                                                                                                                                                                                                                             ^��W     �                   �             5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             ^��]     �      	   
                  �      	   	    �      	             start_urls = []5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             ^��i     �      	   
                  ""�      	   
    5�_�   
                    F    ����                                                                                                                                                                                                                                                                                                                                                             ^��j    �                 H            "http://stackoverflow.com/questions?pagesize=50&sort=newest"               ]    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��v    �      	   	      D        "http://stackoverflow.com/questions?pagesize=50&sort=newest"5�_�                    	       ����                                                                                                                                                                                                                                                                                                                                      	          V       ^���     �   	            5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                      	          V       ^���     �   	                  5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                      	          V       ^���     �   
              	    def )5�_�                           ����                                                                                                                                                                                                                                                                                                                                      	          V       ^���     �   
                  def parse(self, resp)5�_�                           ����                                                                                                                                                                                                                                                                                                                                      	          V       ^���     �   
                  def parse(self, resp):5�_�                           ����                                                                                                                                                                                                                                                                                                                                      	          V       ^���     �                �             5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                      
          V       ^���     �                 &        questions = Selector(response)5�_�                       &    ����                                                                                                                                                                                                                                                                                                                                      
          V       ^���     �                 &        questions = Selector(response)5�_�                       -    ����                                                                                                                                                                                                                                                                                                                                      
          V       ^���     �                 .        questions = Selector(response).xpath()5�_�                       .    ����                                                                                                                                                                                                                                                                                                                                      
          V       ^���    �                 0        questions = Selector(response).xpath('')�               5�_�                           ����                                                                                                                                                                                                                                                                                                                                      
          V       ^��)    �                 ?        questions = Selector(response).xpath('//*/div[2]/h3/a')5�_�                       9    ����                                                                                                                                                                                                                                                                                                                                      
          V       ^��0     �                 ;        questions = Selector(resp).xpath('//*/div[2]/h3/a')5�_�                       )    ����                                                                                                                                                                                                                                                                                                                                      
          V       ^��1    �                 ,        questions = Selector(resp).xpath('')�               5�_�                       E    ����                                                                                                                                                                                                                                                                                                                                      
          V       ^��f     �               5�_�                           ����                                                                                                                                                                                                                                                                                                                                      
          V       ^��f     �                         5�_�                       "    ����                                                                                                                                                                                                                                                                                                                                      
          V       ^��i     �                 "        for question in questions:5�_�                           ����                                                                                                                                                                                                                                                                                                                                      
          V       ^��o     �                �             5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       ^��u     �               !from stack.items import StackIetm5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       ^��u     �                from stack.items import StackItm�             5�_�      !                      ����                                                                                                                                                                                                                                                                                                                                                V       ^��w     �                             item = 5�_�       "           !          ����                                                                                                                                                                                                                                                                                                                                                V       ^��z     �                             �               5�_�   !   #           "          ����                                                                                                                                                                                                                                                                                                                                                V       ^��|     �                             ']5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                                                V       ^���     �                             item['title']5�_�   #   %           $      ,    ����                                                                                                                                                                                                                                                                                                                                                V       ^���     �                 .            item['title'] = question.xpath('')5�_�   $   &           %      .    ����                                                                                                                                                                                                                                                                                                                                                V       ^���     �                 0            item['title'] = question.xpath('a/')5�_�   %   '           &      5    ����                                                                                                                                                                                                                                                                                                                                                V       ^���     �                 5            item['title'] = question.xpath('/text()')5�_�   &   (           '      @    ����                                                                                                                                                                                                                                                                                                                                                V       ^���     �                 C            item['title'] = question.xpath('/text()').extract()[90]5�_�   '   )           (      A    ����                                                                                                                                                                                                                                                                                                                                                V       ^���     �               �               5�_�   (   *           )          ����                                                                                                                                                                                                                                                                                                                                                V       ^���     �                 B            item['title'] = question.xpath('/text()').extract()[0]5�_�   )   +           *      +    ����                                                                                                                                                                                                                                                                                                                                                V       ^���     �                 @            item['url'] = question.xpath('/text()').extract()[0]5�_�   *   ,           +      0    ����                                                                                                                                                                                                                                                                                                                                                V       ^���     �                 A            item['url'] = question.xpath('/@href()').extract()[0]5�_�   +   -           ,      0    ����                                                                                                                                                                                                                                                                                                                                                V       ^���     �                 @            item['url'] = question.xpath('/@href)').extract()[0]5�_�   ,   .           -      3    ����                                                                                                                                                                                                                                                                                                                                                V       ^���    �                             �               5�_�   -   /           .      ,    ����                                                                                                                                                                                                                                                                                                                                                             ^���     �               B            item['title'] = question.xpath('/text()').extract()[0]5�_�   .               /      *    ����                                                                                                                                                                                                                                                                                                                                                             ^���    �               ?            item['url'] = question.xpath('/@href').extract()[0]5��