export interface StockSymbol{
    symbol: String;
    description: String;
    displaySymbol: String|null;
}

export interface StockPrice{
    c: number;
    d: number;
    dp: number;
    h: number;
    l: number;
    o: number;
    pc: number;
    t: number;
}

export interface StockSymbolPrice{
    stockSymbol: StockSymbol;
    stockPrice: StockPrice;
}