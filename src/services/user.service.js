import { storageService } from "./async-storage.service.js"
import { utilService } from "./util.service.js"

const STORAGE_KEY = 'userDB'
const LOGGEDIN_USER_KEY = 'loggedinUser'

// _createUsers()

export const userService = {
    getLoggedinUser,
    login,
    getEmptyUser,
    getEmptyTransaction,
    transferFunds,
    getTransactions,
    getUserBalance
}

async function login(user) {
    const users = await storageService.query(STORAGE_KEY)
    const loggedinUser = users.find(currUser => currUser.name === user.name)
    if (loggedinUser) return _saveLocalUser(user)
    user = await _save(user)
    _saveLocalUser(user)
}

async function transferFunds(transaction) {
    const user = getLoggedinUser()
    user.balance -= transaction.amount
    user.transactions.unshift(transaction)
    try {
        await _save(user)
        _saveLocalUser(user)
    } catch (err) {
        throw err
    }
}

function getTransactions() {
    const user = getLoggedinUser()
    return user.transactions
}

function getUserBalance() {
    const user = getLoggedinUser()
    return user.balance
}

function getEmptyUser() {
    return {
        name: '',
        balance: 100,
        transactions: [],
    }
}

function getEmptyTransaction() {
    return {
        toId: "",
        to: "",
        at: Date.now(),
        amount: 0
    }
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(LOGGEDIN_USER_KEY))
}


function _saveLocalUser(user) {
    sessionStorage.setItem(LOGGEDIN_USER_KEY, JSON.stringify(user))
    return user
}

function _save(user) {
    if (user._id) return storageService.put(STORAGE_KEY, user)
    return storageService.post(STORAGE_KEY, user)
}

function _createUsers() {
    let users = utilService.loadFromStorage(STORAGE_KEY)
    if (!users || !users.length) {
        users = [
            {
                _id: '1001',
                name: "ofek",
                balance: 100,
                transactions: [
                    {
                        toId: "d99e3u2ih329",
                        to: "Moshiko",
                        at: 2652712571,
                        amount: 2
                    },
                ]
            }
        ]
        utilService.saveToStorage(STORAGE_KEY, users)
    }
}