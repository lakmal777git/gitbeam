var loginPage = function () {
    var enterSearchFields = element(by.name("q"));
    var searchglobalClick = element(by.xpath("//span[@class='js-jump-to-badge-search-text-global']"));
    var verifySearchResults = element(by.xpath("//a[.='teamon/tesla']"));
    this.get = function () {
        browser.get(browser.baseUrl);
    };
    this.checksearchresults = function () {
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(enterSearchFields),5000);
        enterSearchFields.sendKeys('tesla');
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(searchglobalClick),5000);
        searchglobalClick.click('tesla');
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(verifySearchResults));
        verifySearchResults.click();
    };
};
module.exports = new loginPage();