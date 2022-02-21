/* eslint-disable prettier/prettier */
export class Category {
  mapper(labels: Array<any>): Map<string, any> {
    const map = new Map<string, any>();
    labels.forEach( label => 
      map.set(label.name.toUpperCase(), label.id)
    );
    return map;
  }
}
