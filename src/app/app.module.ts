import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AddTransactionComponent],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [AddTransactionComponent],
})
export class AddTransactionModule {}
