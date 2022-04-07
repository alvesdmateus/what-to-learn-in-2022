import { Stock } from '../entities/Stock'

export interface IStockRepository {
  findByTicker(ticker: string): Promise<Stock>;
  save(stock: Stock): Promise<void>;
}
