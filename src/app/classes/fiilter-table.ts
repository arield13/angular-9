import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filter'
})
@Injectable()
export class FiilterTable implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }

    return items.filter(singleItem =>
      singleItem[field].toLowerCase().includes(value.toLowerCase())
    );
  }
}

class Stuff {
    constructor(public name: string, public things: Thing[] = []) { }
}

class Thing {
    constructor(public active: boolean) {

    };
}

var blopp: Stuff[] = [
    new Stuff("aa", [new Thing(true), new Thing(false)]),
    new Stuff("bb", null)
];
