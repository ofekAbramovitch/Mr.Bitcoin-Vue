import axios from "axios"
import { storageService } from "./storage.service.js"

export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
    getAvgBlockSize,
}

async function getRate() {
    let rate = storageService.load('rate')
    if (rate) return rate
    try {
        rate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
        storageService.save('rate', rate.data)
        return rate.data
    } catch (err) {
        throw new Error('Err', err)
    }
}

async function getMarketPriceHistory() {
    let priceHistory = storageService.load('price-history')
    if (priceHistory) return priceHistory
    try {
        priceHistory = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
        storageService.save('price-history', priceHistory.data)
        return priceHistory.data
    } catch (err) {
        throw new Error('Err', err)
    }
}

async function getAvgBlockSize() {
    let blockSize = storageService.load('block-size')
    if (blockSize) return blockSize
    try {
        blockSize = await axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true`)
        storageService.save('block-size', blockSize.data)
        return blockSize.data
    } catch (err) {
        throw new Error('Err', err)
    }
}
