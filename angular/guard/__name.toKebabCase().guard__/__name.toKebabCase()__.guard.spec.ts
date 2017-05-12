import { TestBed, async, inject } from '@angular/core/testing';

import { <%= name.toProperCase() %>Guard } from './<%= name.toKebabCase() %>.guard';

describe('<%= name.toProperCase() %>Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [<%= name.toProperCase() %>Guard]
    });
  });

  it('should ...', inject([<%= name.toProperCase() %>Guard], (guard: <%= name.toProperCase() %>Guard) => {
    expect(guard).toBeTruthy();
  }));
});
