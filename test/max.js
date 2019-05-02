
const should = require('should')
const max = require('../lib/max')
describe('#max', () => {
  //
  it('should return the maximum in array', done => {
    var maximum = max([1, 10, 100, 1000])
    maximum.should.equal(1000)
    done()
  })
  //
  it('should return undefined when array is empty', done => {
    const maximum = max([])
    ;(maximum === undefined).should.be.true
    done()
  })
})