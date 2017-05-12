import { <%= name.toProperCase() %> } from './<%= name.toKebabCase() %>';

describe('<%= name.toProperCase() %>', () => {
  it('should create an instance', () => {
    expect(new <%= name.toProperCase() %>()).toBeTruthy();
  });
});
