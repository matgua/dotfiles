Vim�UnDo� ��@,��箮 ��VK���6�Mr:Z���      2    search: (searchQuery: string, page: number) =>      .                       ^�);    _�                             ����                                                                                                                                                                                                                                                                                                                                                             ^�}     �                 2import { CorsBypasser } from '../../cors-bypasser'5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��     �               x    `${CorsBypasser.endpoint}${endpoint.endpointS}advsearch.php?search=${searchQuery}&&order=data&by=DESC&page=${page}`,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��     �               <  generic: (url: string) => `${CorsBypasser.endpoint}${url}`5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��    �                  )import { Endpoint } from '../../endpoint'       const endpoint = new Endpoint({     protocol: 'https',   %  secondLevelDomain: 'ilcorsaronero',     firstLevelDomain: 'pizza'   })       'export const IlCorsaroNeroEndpoints = {     endpoint,   0  search: (searchQuery: string, page: number) =>   `    `${endpoint.endpointS}advsearch.php?search=${searchQuery}&&order=data&by=DESC&page=${page}`,     generic: (url: string) => url   }5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ^��    �                   firstLevelDomain: "pizza",5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^��     �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^��    �               5�_�      	                 .    ����                                                                                                                                                                                                                                                                                                                                                             ^�)8     �   
            2    search: (searchQuery: string, page: number) =>5�_�      
           	      (    ����                                                                                                                                                                                                                                                                                                                                                             ^�)9     �   
            6    search: (searchQuery: string, page: number = 0) =>5�_�   	              
      '    ����                                                                                                                                                                                                                                                                                                                                                             ^�):     �   
            0    search: (searchQuery: string, page:  = 0) =>5�_�   
                    &    ����                                                                                                                                                                                                                                                                                                                                                             ^�):     �   
            /    search: (searchQuery: string, page: = 0) =>5�_�                        &    ����                                                                                                                                                                                                                                                                                                                                                             ^�):    �               5��