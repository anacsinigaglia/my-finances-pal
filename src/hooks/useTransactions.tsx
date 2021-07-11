import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import {
  Transaction,
  TransactionInput,
  TransactionsContextData,
  TransactionsProviderProps,
} from '../types';

const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData //np with that, 'cause we replace this on value={} below in the return
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const res = await api.post('/transactions', transactionInput);
    const { transaction } = res.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  return useContext(TransactionsContext);
}
