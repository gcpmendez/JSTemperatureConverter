var assert = chai.assert;

suite('temperature', function() {
	setup(function(){
	if (typeof __html__ != 'undefined') {
		document.body.innerHTML = __html__[tests/index.html];
original = document.getElementById('original');
converted = document.getElementById('converted');
}


});

    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
    test('1C = 33.8 Farenheit', function() {
        original.value = "1C";
        calculate();
        assert.deepEqual(converted.innerHTML, "33.8 Farenheit");
    });
    test('7 = error', function() {
        original.value = "7";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
});
