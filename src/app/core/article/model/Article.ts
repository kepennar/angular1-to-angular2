
export interface Article {
  id?: string,
  createdAt: Date,
  name: string,
  text: string,
  userRate: number,
  numRates: number,
  comments?: Comment[];
}
