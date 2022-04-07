export class Stock {
  public ticker : string;
  public price: number;

  constructor (props: { ticker: string, price: number}) {
    Object.assign(this, props)
  }
}
