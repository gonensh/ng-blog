import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display a title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('MY WORKS');
  });

  it('should display nav buttons in the header', () => {
    page.navigateTo();
    expect(page.getHeaderNavItem().getText()).toEqual('HOME');
    expect(page.getHeaderNavItem().getAttribute('class')).toContain(
      'nav-item--button'
    );
  });

  it('should display nav links in the footer', () => {
    page.navigateTo();
    expect(page.getFooterNavItem().getText()).toEqual('ABOUT');
    expect(page.getFooterNavItem().getAttribute('class')).toContain(
      'nav-item--link'
    );
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      })
    );
  });
});
