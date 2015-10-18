casper.test.begin('Calculator test', 2, function suite(test) {

    var calc = new calculator();

    test.assertEquals(4, calc.add(1, 3), "1 + 3 equals 4");
    test.assertEquals(7, calc.add(6, 1), "6 + 1 equals 7");
    
    test.done();
});
