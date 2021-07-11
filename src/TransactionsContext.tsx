import { createContext, useEffect, useState } from 'react';
import { api } from './services/api';
import {
  Transaction,
  TransactionInput,
  TransactionsContextData,
  TransactionsProviderProps,
} from './types';

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData //np with that, 'cause we replace this on value={} below in the return
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    await api.post('/transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
