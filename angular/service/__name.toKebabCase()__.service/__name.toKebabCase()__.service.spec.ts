import { TestBed, inject } from '@angular/core/testing';

import { <%= name.toProperCase() %>Service } from './<%= name.toKebabCase() %>.service';

describe('<%= name.toProperCase() %>Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [<%= name.toProperCase() %>Service]
    });
  });

  it('should ...', inject([<%= name.toProperCase() %>Service], (service: <%= name.toProperCase() %>Service) => {
    expect(service).toBeTruthy();
  }));
});
