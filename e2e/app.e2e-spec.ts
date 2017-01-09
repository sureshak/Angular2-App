import { AngualrFrondEndPage } from './app.po';

describe('angualr-frond-end App', function() {
  let page: AngualrFrondEndPage;

  beforeEach(() => {
    page = new AngualrFrondEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
