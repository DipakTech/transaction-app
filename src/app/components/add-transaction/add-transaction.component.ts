import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TransactionService } from '../../services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class AddTransactionComponent {
  transactionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private transactionService: TransactionService,
    private router: Router
  ) {
    this.transactionForm = this.fb.group({
      createdDate: ['', Validators.required],
      lastModifiedDate: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      remarks: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  generateRandomId(): number {
    return Math.floor(Math.random() * 1000000);
  }

  submitForm() {
    if (this.transactionForm.valid) {
      const newTransaction = this.transactionForm.value;
      this.transactionService.addTransaction({
        ...newTransaction,
        id: this.generateRandomId(),
      });
      this.transactionForm.reset();
      this.router.navigate(['/transactions']);
    }
  }
}
