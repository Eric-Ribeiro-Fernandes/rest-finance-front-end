export interface Informacoes 
    {
        address1?: string,
        address2?: string,
        city?: string,
        state?: string,
        country?: string,
        phone?: string,
        website?: string,
        industry?: string,
        industryDisp?: string,
        sector?: string,
        longBusinessSummary?: string,
        fullTimeEmployees?: number,
        companyOfficers?: [
            {
                maxAge?: number,
                name?: string,
                title?: string,
                exercisedValue?: number,
                unexercisedValue?: number
            }
        ],
        auditRisk?: number,
        boardRisk?: number,
        compensationRisk?: number,
        shareHolderRightsRisk?: number,
        overallRisk?: number,
        governanceEpochDate?: number,
        maxAge?: number,
        priceHint?: number,
        previousClose?: number,
        open?: number,
        dayLow?: number,
        dayHigh?: number,
        regularMarketPreviousClose?: number,
        regularMarketOpen?: number,
        regularMarketDayLow?: number,
        regularMarketDayHigh?: number,
        dividendRate?: number,
        dividendYield?: number,
        exDividendDate?: number,
        payoutRatio?: number,
        fiveYearAvgDividendYield?: number,
        beta?: number,
        trailingPE?: number,
        forwardPE?: number,
        volume?: number,
        regularMarketVolume?: number,
        averageVolume?: number,
        averageVolume10days?: number,
        averageDailyVolume10Day?: number,
        bid?: number,
        ask?: number,
        bidSize?: number,
        askSize?: number,
        marketCap?: number,
        fiftyTwoWeekLow?: number,
        fiftyTwoWeekHigh?: number,
        priceToSalesTrailing12Months?: number,
        fiftyDayAverage?: number,
        twoHundredDayAverage?: number,
        trailingAnnualDividendRate?: number,
        trailingAnnualDividendYield?: number,
        currency?: string,
        enterpriseValue?: number,
        profitMargins?: number,
        floatShares?: number,
        sharesOutstanding?: number,
        heldPercentInsiders?: number,
        heldPercentInstitutions?: number,
        impliedSharesOutstanding?: number,
        bookValue?: number,
        priceToBook?: number,
        lastFiscalYearEnd?: number,
        nextFiscalYearEnd?: number,
        mostRecentQuarter?: number,
        earningsQuarterlyGrowth?: number,
        netIncomeToCommon?: number,
        trailingEps?: number,
        forwardEps?: number,
        pegRatio?: number,
        lastSplitFactor?: string,
        lastSplitDate?: number,
        enterpriseToRevenue?: number,
        WeekChange52?: number,
        SandP52WeekChange?: number,
        lastDividendValue?: number,
        lastDividendDate?: number,
        exchange?: string,
        quoteType?: string,
        symbol?: string,
        underlyingSymbol?: string,
        shortName?: string,
        longName?: string,
        firstTradeDateEpochUtc?: number,
        timeZoneFullName?: string,
        timeZoneShortName?: string,
        uuid?: string,
        messageBoardId?: string,
        gmtOffSetMilliseconds?: number,
        currentPrice?: number,
        targetHighPrice?: number,
        targetLowPrice?: number,
        targetMeanPrice?: number,
        targetMedianPrice?: number,
        recommendationMean?: number,
        recommendationKey?: string,
        numberOfAnalystOpinions?: number,
        totalCash?: number,
        totalCashPerShare?:number,
        totalDebt?:number,
        totalRevenue?: number,
        revenuePerShare?: number,
        returnOnAssets?: number,
        returnOnEquity?: number,
        grossProfits?: number,
        operatingCashflow?: number,
        earningsGrowth?: number,
        revenueGrowth?: number,
        grossMargins?: number,
        ebitdaMargins?: number,
        operatingMargins?: number,
        financialCurrency?: string,
        trailingPegRatio?: number
    }