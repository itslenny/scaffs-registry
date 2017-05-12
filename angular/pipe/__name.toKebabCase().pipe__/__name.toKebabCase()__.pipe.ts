import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: '<%= name.toCamelCase() %>'
})
export class <%= name.toProperCase() %>Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
