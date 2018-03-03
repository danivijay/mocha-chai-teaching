const { assert } = require('chai')
const app = require('../app')

describe('App', () => {
  it('App should return hello', () => {
    assert.equal(app(), 'hello')
  })
})
