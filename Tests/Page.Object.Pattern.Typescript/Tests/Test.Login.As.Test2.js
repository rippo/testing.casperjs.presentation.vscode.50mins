phantom.page.injectJs('../Pages/Page.Login.js');
phantom.page.injectJs('../Pages/Page.Account.js');
casper.test.begin('Scenario: When I login as user test2@test.com and perform an account search', function (test) {
    var loginPage = new LoginPage();
    var searchPage = new SearchPage();
    loginPage.fullLogin('test2@test.com', '12345');
    searchPage.checkWeAreOnTheSearchPage();
    searchPage.fillInTheSearchBox("a");
    searchPage.submitForm();
    searchPage.checkNumberResultsShown(4);
    casper.run(function () {
        test.done();
    });
});
