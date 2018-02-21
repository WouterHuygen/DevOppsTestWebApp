import { TestWebAppPage } from './app.po';

describe('test-web-app App', () => {
  let page: TestWebAppPage;

  beforeEach(() => {
    page = new TestWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
