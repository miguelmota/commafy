var test = require('tape');
var commafy = require('../commafy');

test('commafy', function (t) {
  t.plan(8);

  t.equal(commafy(1000000), '1,000,000');
  t.equal(commafy(1000), '1,000');
  t.equal(commafy(100), '100');
  t.equal(commafy(85), '85');
  t.equal(commafy(10200.50), '10,200.5');
  t.equal(commafy((10200.50).toFixed(3)), '10,200.500');
  t.equal(commafy(1000.5023), '1,000.5023');
  t.equal(commafy(14734534.53), '14,734,534.53');
});
