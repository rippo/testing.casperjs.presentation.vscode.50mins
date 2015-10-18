var SearchPage = (function () {
    function SearchPage() {
        var _this = this;
        this.queryControlLocator = "#Query";
        this.submitButtonLocator = "form input[type='submit']";
        this.tableLocator = "table#results";
        this.checkWeAreOnTheSearchPage = function () {
            casper.waitForSelector(_this.queryControlLocator, function () {
                casper.test.assertUrlMatch('account/search', 'then check we are on the search page');
                casper.test.assertTextExists('Search', 'then check the search page has been found');
            });
        };
        this.fillInTheSearchBox = function (query) {
            casper.then(function () {
                var params = {};
                params[_this.queryControlLocator] = query;
                casper.fillSelectors('form', params, false);
                casper.test.assertExists(_this.queryControlLocator, "then fill in the search box with '" + query + "'");
            });
        };
        this.submitForm = function () {
            casper.then(function () {
                casper.test.assertExists(_this.submitButtonLocator, "then submit the search form");
                casper.click(_this.submitButtonLocator);
            });
        };
        this.checkValidationMesaageIsShown = function () {
            casper.waitForSelector(_this.queryControlLocator, function () {
                casper.test.assertTextExists('Enter a search term', 'then check the search term required message is shown');
            });
        };
        this.checkNumberResultsShown = function (expectedCount) {
            casper.waitForSelector(_this.tableLocator, function () {
                casper.test.assertTextExists('Results', 'then check that the results table is displayed');
                casper.test.assertElementCount(_this.tableLocator + ' > tbody > tr', expectedCount, "then check that " + expectedCount + ' name(s) have been found');
            });
        };
    }
    return SearchPage;
})();
