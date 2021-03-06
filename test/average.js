
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