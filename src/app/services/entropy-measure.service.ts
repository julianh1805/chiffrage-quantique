import { Injectable } from '@angular/core';
import { EntropyLevel } from './EntropyLevels';
import * as R from 'ramda';

@Injectable({
  providedIn: 'root'
})
export class EntropyMeasureService {

  constructor() { }

  entropy(str: string): number {
    const len = str.length;

    const frequencies = Array.from(str)
      .reduce((freq, c) => (freq[c] = (freq[c] || 0) + 1) && freq, {});
   
    return Object.values(frequencies)
      .reduce((sum: number, f: number) => sum - f/len * Math.log2(f/len), 0) as number;
  }

  evaluate(str: string): EntropyLevel {
    return R.cond([
      [x => x >= 3.5, R.always('veryGood')],
      [x => x >= 3,   R.always('good')],
      [x => x >= 2.5, R.always('acceptable')],
      [R.T,           R.always('bad')]
    ], this.entropy(str));
  }

}
