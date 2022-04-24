const { it, expect, describe, done } = require('@jest/globals')
const NPromise = require('../../new_promise')

describe('Promise', () => {
  it('should create a new Promise with pending state', () => {
    const promise = new NPromise(() => { })
    expect(promise.state).toBe('pending')
    expect(promise.value).toBe(undefined)
  })

  describe('When fulfilled', () => {  // Fulfilled means successes
    it('should then a Promise', () => {
      return new NPromise(resolve => resolve({ data: 'fake' }))
        .then(response => {
          expect(response.data).toBe('fake')
        })
    })
  })
})