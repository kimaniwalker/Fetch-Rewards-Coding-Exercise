import { createContext, useContext, useState, useEffect } from 'react';

const TransactionContext = createContext();
TransactionContext.displayName = 'TransactionsContext'

export function TransactionsWrapper({ children }) {

    const [transactions, setTransactions] = useState(() => getStorageValue('transactions', []))

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(transactions))
    }, ['transactions', transactions]);

    function getStorageValue(key, defaultValue) {
        // getting stored value
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem(key);
            const initial = saved !== null ? JSON.parse(saved) : defaultValue;
            return initial;
        }
    }

    function AddTransaction(transaction) {

        setTransactions((prev) => {
        const existing = transactions.find((item) => item.payer === transaction.payer);

        return existing
            ? [...transactions.map((item) => item.payer === transaction.payer
                ? { ...item, points: item.points + transaction.points }
                : item,
            ),
            ]
            : [...prev, { ...transaction }]

    })

    }
    


    



    return (
        <TransactionContext.Provider value={{ transactions, AddTransaction, setTransactions  }} >
            {children}
        </TransactionContext.Provider>
    );
}

export function useTransactionsContext() {
    return useContext(TransactionContext);
}