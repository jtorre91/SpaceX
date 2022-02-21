import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  port: 3000,
  apiTrello: {
    url: 'https://api.trello.com/1',
    timeout: 7000,
    maxRedirects: 3,
    key: '6bf4d17200908d127201779dd73e9aad',
    token: '5fb2f3670202bd8873c49c16632664cdfb876fe32db4ae47d2234e184122c74f',
    idList: '62101d9051c84b1d89319761',
    idBoard: '62101c96a9bb7d34db53d278',
    cardTypes: ['BUG', 'ISSUE', 'TASK'],
    shuffleMembers: true,
  },
}));
