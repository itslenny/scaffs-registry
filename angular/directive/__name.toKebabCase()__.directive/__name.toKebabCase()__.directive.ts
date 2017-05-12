import { Directive } from '@angular/core';

@Directive({
  selector: '[<%= name.toKebabCase() %>]'
})
export class <%= name.toProperCase() %>Directive {

  constructor() { }

}
