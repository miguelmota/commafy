var test = require('tape');
var commafy = require('../commafy');

test('commafy', function (t) {
  t.plan(22);

  t.equal(commafy(), undefined);
  t.equal(commafy(null), null);
  t.deepEqual(commafy([]), []);
  t.deepEqual(commafy({}), {});
  t.deepEqual(commafy(Infinity), Infinity);
  t.deepEqual(commafy(-Infinity), -Infinity);
  t.equal(commafy('10'), '10');
  t.equal(commafy('10000'), '10,000');
  t.equal(commafy('10000.500'), '10,000.500');
  t.equal(commafy('$58303'), '$58303');
  t.equal(commafy('1024px'), '1024px');
  t.equal(commafy('amount $1000.20'), 'amount $1000.20');

  t.equal(commafy(0), '0');
  t.equal(commafy(1000000), '1,000,000');
  t.equal(commafy(1000), '1,000');
  t.equal(commafy(100), '100');
  t.equal(commafy(85), '85');
  t.equal(commafy(10200.50), '10,200.5');
  t.equal(commafy(1000.5023), '1,000.5023');
  t.equal(commafy(14734534.53), '14,734,534.53');
  t.equal(commafy((10200.50).toFixed(3)), '10,200.500');
  t.equal(commafy(1e4), '10,000');
});
