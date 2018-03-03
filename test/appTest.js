const { assert } = require('chai')
const { hello } = require('../app')

let result = hello()

describe('App', () => {
  it('hello should return hello', () => {
    assert.equal(result, 'hello')
  })
  
  it('hello should return type string', () => {
    assert.typeOf(result, 'string')
  })
})
