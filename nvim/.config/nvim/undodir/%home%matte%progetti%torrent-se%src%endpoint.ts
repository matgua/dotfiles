Vim�UnDo� >�'����1Z���$>!��h����9����   )                                   ^��    _�                             ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                   �               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^��     �                  5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ^��    �      (   &   $     constructor({       protocol = 'https',       thirdLevelDomain,       secondLevelDomain,       firstLevelDomain,       validityRegex     }: {   (    readonly protocol?: 'http' | 'https'   &    readonly thirdLevelDomain?: string   &    readonly secondLevelDomain: string   %    readonly firstLevelDomain: string   #    readonly validityRegex?: RegExp     }) {       this.protocol = protocol   ,    this.thirdLevelDomain = thirdLevelDomain   .    this.secondLevelDomain = secondLevelDomain   ,    this.firstLevelDomain = firstLevelDomain   &    this.validityRegex = validityRegex     }         readonly protocol: string   /  readonly thirdLevelDomain: string | undefined   $  readonly secondLevelDomain: string   #  readonly firstLevelDomain: string   ,  readonly validityRegex: RegExp | undefined         get endpoint() {   !    return `${this.protocol}://${   L      this.thirdLevelDomain === undefined ? '' : `${this.thirdLevelDomain}.`   8    }${this.secondLevelDomain}.${this.firstLevelDomain}`     }         // endpointS = endpointSlash     get endpointS() {       return `${this.endpoint}/`     }5�_�                    (        ����                                                                                                                                                                                                                                                                                                                                                             ^��     �   (            5�_�                    (        ����                                                                                                                                                                                                                                                                                                                                                             ^��    �   )            5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             ^��    �   )            5��