const NPromise = require('../new_promise.js')

describe('Promise', () => {
  it('Should create a new promise with pending stat', () => {
    const promise = new NPromise(() => { })
    expect(promise.state).toBe('pending')
    expect(promise.value).toBe(undefined)
  })

  describe('When fulfilled', () => {

    it('Should then a Promise', () => {
      return new NPromise(resolve => resolve({ data: 'fake' }))
        .then(response => {
          expect(response.data).toBe('fake')
        })
    })
  })
})