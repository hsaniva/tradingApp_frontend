
export interface BankAccount{
    accountNumber:number,
    balance:number,
}

export interface User{
    userId:string,
    name:string,
    bankAccount:BankAccount
}

export interface Holding{
    stockTickerLabel:string,
    stockPrice:number,
    stockVolume:number,
    userId:string,
    stockCurrentPrice:number
}
export interface Portfolio{
    userDTO:User,
    investedAmount:number,
    presentAmount:number,
    unrealizedProfitOrLoss:number,
    holdings:Holding[],
    tradeOrderDTOs:Order[],
    stocksQuantity:number
}

export interface StockInfo{
    buyValue:number,
    presentValue:number,
    quantity:number
}

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
    stockName: any;
  }