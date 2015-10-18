casper.options.viewportSize = { width:960, height:600 }

casper.test.begin('Timings tests', 2, function (test) {

    casper.start('http://localhost:43504/timings');

    casper.then(function () {
        test.assertExists("button#btnModal", "Launch button is shown");
        this.click("button#btnModal");
    });

    casper.waitUntilVisible("#myModal", function () {
        this.capture("timings.jpg");
        test.assertVisible("#myModal");
    });

    casper.run(function () { test.done(); });
});