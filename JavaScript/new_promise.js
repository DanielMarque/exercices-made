const STATE = {
  PENDING: 'pending',
  FULFILED: 'fulfilled',
  REJECTED: 'rejected'
}

class NPromise {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new Error('Executor must be a function')
    }

    this.state = 'pending'
    this.value = undefined
    this.onFulfillChain = []
    this.onRejectCallChain = []

    executor(this.resolve.bind(this))
  }

  then(onFulfill) {
    return new NPromise(resolve => {
      resolve(onFulfill(this.value))
    })
  }

  resolve(res) {
    if (this.state !== STATE.PENDING) {
      return
    }

    this.state = STATE.FULFILED
    this.value = res
  }

}

module.exports = NPromise