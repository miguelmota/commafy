# commafy

Add commas to a number.

# Install

```bash
npm install commafy
```

# Usage

```javascript
var commafy = require('commafy');

console.log(commafy(1000000)); // '1,000,000'
console.log(commafy(1000)); // '1,000'
console.log(commafy(1000.123)); // '1,000.123'
console.log(commafy(100)); // '100'
console.log(commafy(1e4)); // '10,000'
```

# License

MIT
