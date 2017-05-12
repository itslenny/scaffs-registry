import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= name.toProperCase() %>Component } from './<%= name.toKebabCase() %>.component';

describe('<%= name.toProperCase() %>Component', () => {
  let component: <%= name.toProperCase() %>Component;
  let fixture: ComponentFixture<<%= name.toProperCase() %>Component >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [<%= name.toProperCase() %>Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(<%= name.toProperCase() %>Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
