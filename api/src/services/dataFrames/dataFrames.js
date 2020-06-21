import { db } from 'src/lib/db'

export const dataFrames = () => {
  return db.dataFrame.findMany()
}
