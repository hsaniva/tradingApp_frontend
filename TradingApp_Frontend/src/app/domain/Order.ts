
export interface Order {
    tradeOrderId: string,
    stockTickerLabel: string,
    stockPrice: number,
    stockVolume: number,
    buyOrSell: string,
    stockStatusCode: String
    createdOn: Date;
    updatedOn: Date;
    userId: string;

  }