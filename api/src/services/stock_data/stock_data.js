import { db } from 'src/lib/db'

export const stock_data = () => {
  return db.stock_data.findMany()
}
