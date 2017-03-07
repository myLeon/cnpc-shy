import { CnpcShyPage } from './app.po';

describe('cnpc-shy App', () => {
  let page: CnpcShyPage;

  beforeEach(() => {
    page = new CnpcShyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
