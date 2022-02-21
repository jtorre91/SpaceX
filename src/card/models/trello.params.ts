export class TrelloParams {
  readonly key: string;
  readonly token: string;
  readonly idList: string;
  readonly name: string;
  readonly desc?: string;
  readonly idLabels?: string;

  constructor(key: string, token: string, idList: string, otherParams: any) {
    this.key = key;
    this.token = token;
    this.idList = idList;
    if (otherParams.name) this.name = otherParams.name;
    else throw Error('The field title is missing');
    this.desc = otherParams.desc ? otherParams.desc : null;
    this.idLabels = otherParams.idLabels ? otherParams.idLabels : null;
  }

  toQuery() {
    let query = `key=${this.key}&token=${this.token}&idList=${this.idList}&name=${this.name}`;
    if (this.desc) query = query.concat(`&desc=${this.desc}`);
    if (this.idLabels) query = query.concat(`&idLabels=${this.idLabels}`);
    return query;
  }
}
