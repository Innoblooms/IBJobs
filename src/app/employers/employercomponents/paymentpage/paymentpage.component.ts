import { Component } from '@angular/core';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent {
  subtotal: number = 1500;  // Example value
  tax: number = 150;        // Example value
  total: number = this.subtotal + this.tax;

  constructor() { }

  ngOnInit(): void {
  }
  selectedOption: string = 'creditCard';

  showPaymentDetails(selectElement: HTMLSelectElement) {
    this.selectedOption = selectElement.value;
  }
  onCreditCardSubmit(): void {
    // Logic for Credit Card Payment
}

onUPISubmit(): void {
    // Logic for UPI Payment
}

onNetBankingSubmit(): void {
    // Logic for Net Banking Payment
}

onWalletSubmit(): void {
    // Logic for Wallet Payment
}

onChequeSubmit(): void {
    // Logic for Cheque/DD Submission
}
}
