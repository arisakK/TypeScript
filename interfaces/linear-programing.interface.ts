export interface ProductDetailInterface {
    profitPerPiece: number
    useResourceA: number
    useResourceB: number
    useResourceC: number
    useResourceD: number
    useResourceE: number
}

export interface ResourceAmountInterface {
    resourceA: number
    resourceB: number
    resourceC: number
    resourceD: number
    resourceE: number
}

export interface ProductInterface {
    productX: ProductDetailInterface,
    productY: ProductDetailInterface
}

export interface LinearProgrammingResponseInterface {
    maximumProfit: number
    productX: number
    productY: number
    useResourceA: number
    useResourceB: number
    useResourceC: number
    useResourceD: number
    useResourceE: number
}
