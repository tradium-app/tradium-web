import { db } from 'src/lib/db'

export const stock_data = () => {
  return db.stock_data.findMany({ take: 1000, orderBy: { datetime: 'desc' } })
}
