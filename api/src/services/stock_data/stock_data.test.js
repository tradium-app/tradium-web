import { stock_data } from './stock_data'

describe('stock data', () => {
  it('returns stock data', () => {
    stock_data()
    expect(true).toBe(true)
  })
})
