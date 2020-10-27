import { stock_data } from './stock_data'
import dotenv from 'dotenv'

dotenv.config()

describe('stock data', () => {
  it('returns stock data', async () => {
    const data = await stock_data()
    expect(data.length).toBeGreaterThan(1)
  })
})
