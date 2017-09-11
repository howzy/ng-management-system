import { NgManagementSystemPage } from './app.po';

describe('ng-management-system App', () => {
  let page: NgManagementSystemPage;

  beforeEach(() => {
    page = new NgManagementSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
