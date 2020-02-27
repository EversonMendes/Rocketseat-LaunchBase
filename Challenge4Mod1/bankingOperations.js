const user = {
    name: 'Everson',
    transactions: [],
    balance: 0
}

function createTransaction(transaction) {
    if (transaction.type === 'credit') {
        user.balance += transaction.value
        user.transactions.push(transaction)
    } else if (transaction.type == 'debit') {
        user.balance -= transaction.value
        user.transactions.push(transaction)
    } else {
        console.log(`${transaction.type} => Transaction type invalid `)
    }
}

function getHigherTransactionByType(type) {
    let higherTransaction
    let higherValeu = 0

    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValeu) {
            higherValeu = transaction.value
            higherTransaction = transaction
        }
    }
    return higherTransaction
}

function getAvarageTransactionValue() {
    let sum = 0

    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            sum += transaction.value
        } else {
            sum -= transaction.value
        }

    }
    return sum / user.transactions.length
}

function getTransactionCount() {
    let countTransaction = { credit: 0, debit: 0 }
    for (let transaction of user.transactions) {
        if (transaction.type == 'credit') {
            countTransaction.credit++
        } else {
            countTransaction.debit++
        }

    }
    return countTransaction
}





createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })
createTransaction({ type: 'credit', value: 130 })

console.table(user.transactions)
console.table(getHigherTransactionByType('credit'))
console.log(getAvarageTransactionValue())
console.log(getTransactionCount())