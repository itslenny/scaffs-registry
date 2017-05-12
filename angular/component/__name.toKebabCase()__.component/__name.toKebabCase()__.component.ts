import { Component, OnInit } from '@angular/core';

@Component({
  selector: '<%= name.toKebabCase() %>',
  templateUrl: './<%= name.toKebabCase() %>.component.html',
  styleUrls: ['./<%= name.toKebabCase() %>.component.<%= styleext %>']
})
export class <%= name.toProperCase() %>Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
