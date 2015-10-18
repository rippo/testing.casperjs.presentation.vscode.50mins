class SearchPage implements ISearchPage {

    private queryControlLocator = "#Query";
    private submitButtonLocator = "form input[type='submit']";
    private tableLocator = "table#results";


    checkWeAreOnTheSearchPage = () => {
        casper.waitForSelector(this.queryControlLocator, () => {
            casper.test.assertUrlMatch('account/search', 'then check we are on the search page');
            casper.test.assertTextExists('Search', 'then check the search page has been found');
        });
    };

    fillInTheSearchBox = (query : string) => {
        casper.then(() => {
            var params = { };
            params[this.queryControlLocator] = query;
            
            casper.fillSelectors('form', params, false);
            casper.test.assertExists(this.queryControlLocator, "then fill in the search box with '" + query + "'");
        });
    };

    submitForm = () => {
        casper.then(() => {
            casper.test.assertExists(this.submitButtonLocator, "then submit the search form");
            casper.click(this.submitButtonLocator);
        });
    };

    checkValidationMesaageIsShown = () => {
        casper.waitForSelector(this.queryControlLocator, () => {
            casper.test.assertTextExists('Enter a search term', 'then check the search term required message is shown');
        });
    };

    checkNumberResultsShown = (expectedCount : number) => {
        casper.waitForSelector(this.tableLocator, () => {
            casper.test.assertTextExists('Results', 'then check that the results table is displayed');
            casper.test.assertElementCount(this.tableLocator + ' > tbody > tr', expectedCount, "then check that " + expectedCount + ' name(s) have been found');
        });
    };

}

interface ISearchPage {
    checkWeAreOnTheSearchPage : Function;
    fillInTheSearchBox : Function;
    submitForm : Function;
    checkValidationMesaageIsShown : Function;
    checkNumberResultsShown : Function;
}
