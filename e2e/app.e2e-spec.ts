import { MathappPage } from './app.po';

describe('mathapp App', () => {
  let page: MathappPage;

  beforeEach(() => {
    page = new MathappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
