import { <%= name.toProperCase() %>Module } from './<%= name.toKebabCase() %>.module';

describe('<%= name.toProperCase() %>Module', () => {
  let <%= name.toCamelCase() %>Module: <%= name.toProperCase() %>Module;

  beforeEach(() => {
    <%= name.toCamelCase() %>Module = new <%= name.toProperCase() %>Module();
  });

  it('should create an instance', () => {
    expect(<%= name.toCamelCase() %>Module).toBeTruthy();
  });
});
