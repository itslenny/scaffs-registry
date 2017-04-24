import { <%= name.toProperCase() %>Directive } from './<%= name.toKebabCase() %>.directive';

describe('<%= name.toProperCase() %>Directive', () => {
  it('should create an instance', () => {
    const directive = new <%= name.toProperCase() %>Directive();
    expect(directive).toBeTruthy();
  });
});
