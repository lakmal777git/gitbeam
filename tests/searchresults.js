describe('Check Github URL by name and search results', function () {
    var loginPage;
    beforeEach(function () {
        loginPage = require('../tests/pages/loginpage.js');
        browser.waitForAngularEnabled(false);
    });
    afterEach(function () {
        browser.executeScript('window.sessionStorage.clear();');
        browser.executeScript('window.localStorage.clear();');
        loginPage = require('../tests/pages/loginpage.js');
    });
    it('Check Github URL by name and search results', function () {
        loginPage.get();
        loginPage.checksearchresults();
    });
});