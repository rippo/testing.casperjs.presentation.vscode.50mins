casper.test.begin('Events - Listeners', function (test) {

    casper.start(casper.cli.options.baseUrl, function () {
        test.assertTitle("Home - CasperJS Mvc", "Page title is correct");
        test.assertTextExists("Ariya Hidayat", "Ariya Hidayat is present on page");
    });

    casper.run(function () {
        test.done();
        
        //require('utils').dump(successes);
        
        successes.forEach(function(item){
            casper.echo(item.standard);
        });
    });

    var successes = [];

    casper.test.on("success", function(success) {
        successes.push(success);
    });
    
});