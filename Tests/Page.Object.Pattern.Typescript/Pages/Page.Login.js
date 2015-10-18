//Remember the term Page.Object does not necesssary need to represent an entire page
//It could be a page object for a significant panel on your page!  
var LoginPage = (function () {
    function LoginPage() {
        var _this = this;
        //The locators for each page element should only be defined once.
        this.usernameLocator = "#Username";
        this.passwordLocator = "#Password";
        this.submitButtonLocator = "form input[type='submit']";
        this.startOnLoginPage = function () {
            //casper.echo("base url is : " + casper.cli.options.baseUrl);
            casper.start(casper.cli.options.baseUrl + '/account');
        };
        //There are differences of opinion on whether page objects should include assertions
        //  themselves, or just provide data for test scripts to do the assertions.
        //I prefer this way as it seems to be easier to maintain and easier to read 
        //  what the test pages are doing.
        this.checkWeAreOnTheLoginPage = function () {
            casper.waitForSelector(_this.usernameLocator, function () {
                casper.test.assertUrlMatch('account', 'then check we are currently on the login page');
                casper.test.assertExists('form', 'then check that the login page form has been found');
            });
        };
        this.fillInThePassword = function (password) {
            casper.waitForSelector(_this.passwordLocator, function () {
                var params = {};
                params[_this.passwordLocator] = password;
                casper.fillSelectors('form', params, false);
                casper.test.assertExists(_this.passwordLocator, "then fill in the password with " + password);
            });
        };
        this.fillInTheUsername = function (username) {
            casper.waitForSelector(_this.usernameLocator, function () {
                var params = {};
                params[_this.usernameLocator] = username;
                casper.fillSelectors('form', params, false);
                casper.test.assertExists(_this.usernameLocator, "then fill in the username with " + username);
            });
        };
        this.submitForm = function () {
            casper.then(function () {
                casper.test.assertExists(_this.submitButtonLocator, "then submit the login form");
                casper.click(_this.submitButtonLocator);
            });
        };
        this.checkUsernameValidationIsShown = function () {
            casper.waitForSelector(_this.usernameLocator, function () {
                casper.test.assertTextExists("The Username field is required", "then check the username required message is shown");
            });
        };
        this.checkPasswordValidationIsShown = function () {
            casper.waitForSelector(_this.usernameLocator, function () {
                casper.test.assertTextExists("The Password field is required", "then check the password required message is shown");
            });
        };
        this.fullLogin = function (username, password) {
            _this.startOnLoginPage();
            _this.checkWeAreOnTheLoginPage();
            _this.fillInTheUsername(username);
            _this.fillInThePassword(password);
            _this.submitForm();
        };
    }
    return LoginPage;
})();
