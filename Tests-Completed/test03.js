casper.test.begin("Contact Page", 5, function (test) {

    casper.start("http://localhost:43504/home/contact", function () {
        test.assertTitle("Contact - CasperJS Mvc", "Page title matches 'Contact - CasperJS Mvc'");
        test.assertExists('form[action="/home/contact"]', "Contact form found");

        //FILL FORM
        this.fillSelectors('form', {
            "input[name='ContactName']": 'Richard Wilde'
        }, true);

    });

    //FILL FORM WITH INVALID EMAIL
    casper.waitForSelector("#EmailAddress", function() {
        test.assertTextExists("The Email Address field is required", "Email required is shown");
        this.fillSelectors("form", {
           "input[name='EmailAddress']": 'INVALID@EMAIL'
        }, true);
    });

    //FILL FORM WITH VALID EMAIL
    casper.waitForSelector("#EmailAddress", function() {
        test.assertTextExists("The Email Address field is not a valid e-mail address", "Email validation message shown");
        this.fillSelectors("form", {
           "input[name='EmailAddress']": 'richard@wildesoft.net'
        }, true);
    });

    casper.waitForUrl("/home/thanks", function () {
        test.assertTextExists("Thanks", "Thanks H1 header is shown");
    }, null, 1000);

    casper.run(function () {
        test.done();
    });
});