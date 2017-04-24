import { <%= name.toProperCase() %>Pipe } from './<%= name.toKebabCase() %>.pipe';

describe('<%= name.toProperCase() %>Pipe', () => {
  it('create an instance', () => {
    const pipe = new <%= name.toProperCase() %>Pipe();
    expect(pipe).toBeTruthy();
  });
});
