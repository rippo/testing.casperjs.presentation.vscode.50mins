var casper = require('casper').create();

casper.start('http://www.google.co.uk', function () {
    this.echo(this.getTitle());
});

casper.thenOpen('http://localhost:43504', function () {
    this.echo(this.getTitle());
    this.capture("screen.jpg");
});

casper.run();