import { db } from 'src/lib/db'

export const stock_data = () => {
  console.log('printing db', db)
  return db.stockData.findMany()
}
