import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (input) {
      input = input.toLowerCase()
      return value.filter(function (el: any) {
          return el.toLowerCase().includes(input);
      })
  }
  return value;
}

}
