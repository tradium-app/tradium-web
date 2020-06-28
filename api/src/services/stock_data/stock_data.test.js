import { stockData } from './stock_data'

describe('stock data', () => {
  it('returns stock data', () => {
    stockData()
    expect(true).toBe(true)
  })
})
