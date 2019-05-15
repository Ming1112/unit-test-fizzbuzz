var should = chai.should()

describe('test function fizzBuzz', function () {
  it('print fizz if input number is divisible by 3, but is not divisible by 5', function () {
    let result = fizzBuzz(9)
    result.should.be.deep.equal('Fizz')
  })
  it('print buzz if input number is divisible by 5, but is not divisible by 3', function () {
    let result = fizzBuzz(25)
    result.should.be.deep.equal('Buzz')
  })
  it('print fizzbuzz if input number is divisible by both 3 and 5', function () {
    let result = fizzBuzz(15)
    result.should.be.deep.equal('FizzBuzz')
  })
  it('print the input number if input number is not divisible by 3 and 5', function () {
    let result = fizzBuzz(14)
    result.should.be.deep.equal(14)
  })
})