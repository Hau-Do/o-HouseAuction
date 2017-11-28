import { HouseAuctionPage } from './app.po';

describe('house-auction App', () => {
  let page: HouseAuctionPage;

  beforeEach(() => {
    page = new HouseAuctionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
