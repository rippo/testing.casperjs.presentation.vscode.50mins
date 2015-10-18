//Looping
casper.test.begin('Wizard', 51, function (test) {

    //initial 25 loops
    var loop = [];
    for (var i = 1; i <= 25; i++) { loop.push(i); }

    casper.start("http://localhost:43504/wizard/index/1");

    //notice loop forEach is inside a casper function...
    casper.waitForSelector("input[name='Answer']", function () {

        loop.forEach(function (item) {

            //All tests must be inside a casper function
            casper.waitForSelector("input[name='Answer']", function () {
                test.assertTitle("Wizard Step: " + item + " - CasperJS Mvc");
                this.fillSelectors('form', {}, true);
            });

            casper.waitForSelector("input[name='Answer']", function () {
                test.assertTextExists("The Answer field is required", "Required validation message shown");
                this.fillSelectors('form', {
                    "input[name='Answer']": 'An answer'
                }, true);
            });

        });

    });

    casper.waitForUrl("wizard/finished", function () {
        test.assertTitle("Finished - CasperJS Mvc");
    });

    casper.run(function () {
        test.done();
    });

});