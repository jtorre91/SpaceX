import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  port: 3000,
  apiTrello: {
    url: 'https://api.trello.com/1',
    timeout: 7000,
    maxRedirects: 3,
    key: 'f084b29610f75f55de91cc11fba919df',
    token: '7d894d7070991f692f587290e9a4b92e844ec79853794048687d76e90135ed0e',
    idList: '62101d9051c84b1d89319761',
    idBoard: '62101c96a9bb7d34db53d278',
    shuffleMembers: true,
  },
}));
