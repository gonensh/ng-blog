import { Pipe, PipeTransform } from '@angular/core';
import { isArray } from 'util';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {
  transform(input: any, character: any = ' '): any {
    if (!isArray(input)) {
      return input;
    }

    return input.join(character);
  }
}
