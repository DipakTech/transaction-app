import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FAKE_TRANSACTIONS } from '../data/fake-transactions';

export interface Transaction {
  id: number;
  createdDate: string;
  lastModifiedDate: string;
  description: string;
  amount: number;
  remarks: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transactions: Transaction[] = FAKE_TRANSACTIONS;

  // BehaviorSubject to hold and broadcast the state of transactions
  private transactionsSubject = new BehaviorSubject<Transaction[]>([
    ...this.transactions,
  ]);

  // Observable for components to subscribe to
  transactions$ = this.transactionsSubject.asObservable();

  constructor() {}

  /**
   * Get all transactions as an observable.
   * Allows consumers to subscribe and receive live updates.
   */
  getTransactions() {
    return this.transactions$;
  }

  /**
   * Add a new transaction to the list.
   * @param transaction - The transaction to be added.
   */
  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
    this.transactionsSubject.next([...this.transactions]); // Emit a new state
  }
}
