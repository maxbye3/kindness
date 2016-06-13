import {Injectable} from 'angular2/core';
import { KINDNESSLIST } from './mock-kindness';
import {Kindness} from './kindness';

@Injectable()
export class KindnessService {
  getKindness() {
       return Promise.resolve(KINDNESSLIST);
  }
  
  getKindnessById(id: number) {
  return Promise.resolve(KINDNESSLIST).then(
    kindnesses => kindnesses.filter(kindness => kindness.id === id)[0]
  );
}
}


