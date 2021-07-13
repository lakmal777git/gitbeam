exports.config = {
    directConnect: true,
    baseUrl: 'https://github.com/',
    specs: [
        './tests/searchresults.js',
    ],
    multiCapabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {
                args: [
                    // "--headless", "--no-sandbox", "--window-size=1920,1080", "--start-maximized", "--disable-browser-side-navigation"
                ],
            },
        }
    ],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 180000
    },
    allScriptsTimeout: 200000,
    onPrepare: function () {
        browser.manage().timeouts().implicitlyWait(20000);
    }
};