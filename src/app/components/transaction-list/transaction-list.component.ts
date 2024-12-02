import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  TransactionService,
  Transaction,
} from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
  imports: [CommonModule],
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];
  displayedTransactions: Transaction[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  constructor(
    private transactionService: TransactionService,
    private router: Router
  ) {}

  navigateToAddTransaction() {
    this.router.navigate(['/add-transaction']);
  }

  ngOnInit(): void {
    this.transactionService.transactions$.subscribe((data) => {
      this.transactions = data;
      this.totalPages = Math.ceil(this.transactions.length / this.itemsPerPage);
      this.updateDisplayedTransactions();
    });
  }

  updateDisplayedTransactions() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedTransactions = this.transactions.slice(startIndex, endIndex);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedTransactions();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedTransactions();
    }
  }
}
