const { assert } = require('chai')
const { hello, add } = require('../app')

let helloResult = hello()
let addResult = add(5,5)

describe('hello', () => {
  it('hello should return hello', () => {
    assert.equal(helloResult, 'hello')
  })
  
  it('hello should return type string', () => {
    assert.typeOf(helloResult, 'string')
  })
})

describe('add', () => { 
  it('add should be above 5', () => {
    assert.isAbove(addResult, 5)
  })

  it('add should return type number', () => {
    assert.typeOf(addResult, 'number')
  })
})
