casper.options.viewportSize = { width:768, height:600 }

casper.test.begin('Navigation test', 4, function (test) {

    casper.start("http://localhost:43504", function () {
        test.assertTitle("Home - CasperJS Mvc");
        test.assertTextExists("Casper MVC", "Casper MVC is present on page");
    });

    casper.thenClick("ul > li:nth-child(2) > a", function () {
        test.assertUrlMatch("/home/about", "URL ends with Home/About");
        test.assertTitle("About - CasperJS Mvc");
    });

    casper.run(function () {
        test.done();
    });
});