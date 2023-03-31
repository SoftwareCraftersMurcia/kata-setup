import { Example } from '../src/Example'

describe('kata-setup', () => {
  it('example test', () => {
    const example = new Example()

    expect(example.method()).toBe(true)
  })
})
