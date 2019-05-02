
# Create project [mocha-test] in github
> git clone https://github.com/navibator/mocha-test.git

> yarn init 
> npm install mocha -g
> npm install mocha --save-dev
> npm install should --save-dev

# Create directory tree below
.
├── index.js
├── package.json
├── lib
│   ├── average.js
│   ├── max.js
│   └── min.js
├── test
│   ├── average.js
│   ├── max.js
│   └── min.js
└── node_modules

```
// lib/average.js 
module.exports = function average(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum / array.length
}

// test/average.js
const should = require('should')
const average = require('../lib/average')
describe('#average', () => {
  //
  it('should return the average of array', done => {
    var avg = average([1, 2, 3, 4])
    avg.should.equal(2.5)
    done()
  })
  //
  it('should return NaN when array is empty', done => {
    var avg = average([])
    isNaN(avg).should.be.true
    done()
  })
})
```
# Integrate CI @ https://travis-ci.com/

# Create .travis.yml for CI
language: node_js
node_js:
    - "8"
    - "7"
    - "6"
    
# Add test script for CI
...
    "scripts": {
        "test": "mocha "
    },
...
