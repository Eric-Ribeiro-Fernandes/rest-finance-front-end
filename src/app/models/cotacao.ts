export interface Cotacao {

schema?: {
    fields?:[{
        name?:string,
        type?:string,
        tz?:string
    }
    ],
    primaryKey?:string,
    pandas_version?:string
},
data?: [
    {
        Date?: string,
        Open?: number,
        High?: number,
        Low?:number,
        Close?: number,
        Volume?: number,
        Dividends?: number,
        StocksSplits?:number

    }
]
    
}
