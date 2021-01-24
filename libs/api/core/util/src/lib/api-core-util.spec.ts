import { isIp } from './api-core-util'

describe('apiCoreUtil', () => {
  it('should work', () => {
    expect(isIp('127.0.0.1')).toBeTruthy()
  })
})
