import { Component } from '@angular/core';

@Component({
  selector: 'app-cartpage',
  templateUrl: './cartpage.component.html',
  styleUrls: ['./cartpage.component.css']
})
export class CartpageComponent {
  cartItems = [
    { title: 'Product 1', price: 1650, quantity: 1 },
    { title: 'Product 2', price: 1850, quantity: 2 },
    { title: 'Product 3', price: 1250, quantity: 3 },
    { title: 'Product 4', price: 950, quantity: 1 },
    { title: 'Product 5', price: 1050, quantity: 2 },
    { title: 'Product 6', price: 2050, quantity: 1 }
  ];

  ngOnInit(): void { }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getTotalAmount() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  proceedToBuy() {
    // Here you can implement the logic to proceed to the payment or next step
    console.log('Proceeding to buy items');
  }

}
