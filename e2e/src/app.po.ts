import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('.home-title')).getText();
  }

  getHeaderNavItem() {
    return element(by.css('app-header .menu-wrapper a.nav-item'));
  }

  getFooterNavItem() {
    return element(by.css('app-footer .menu-wrapper a.nav-item'));
  }
}
