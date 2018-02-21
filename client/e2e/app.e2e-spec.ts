import { MobilityOfTheFuturePage } from './app.po';

describe('mobility-of-the-future App', () => {
  let page: MobilityOfTheFuturePage;

  beforeEach(() => {
    page = new MobilityOfTheFuturePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
