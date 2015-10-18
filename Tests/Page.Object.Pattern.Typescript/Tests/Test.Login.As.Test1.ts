phantom.page.injectJs('../Pages/Page.Login.js');
phantom.page.injectJs('../Pages/Page.Account.js');

casper.test.begin('Scenario: When I login as user test1@test.com and perform an account search', function (test: Tester) {

    var loginPage : LoginPage = new LoginPage();
    var searchPage : SearchPage= new SearchPage();

    loginPage.fullLogin('test1@test.com', '12345');

    searchPage.checkWeAreOnTheSearchPage();
    searchPage.submitForm();
    searchPage.checkValidationMesaageIsShown();

    searchPage.fillInTheSearchBox("a");
    searchPage.submitForm();
    searchPage.checkNumberResultsShown(3);

    searchPage.fillInTheSearchBox("b");
    searchPage.submitForm();
    searchPage.checkNumberResultsShown(1);

    casper.run(function () {
        test.done();
    });
});
