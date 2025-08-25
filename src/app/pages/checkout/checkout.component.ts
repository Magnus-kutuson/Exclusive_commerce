import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  private readonly fb = inject(FormBuilder);
  private readonly cartService = inject(CartService);

  cartItems = this.cartService.getCartItems();
  cartSubtotal = this.cartService.getCartSubtotal;
  cartTotal = this.cartService.getCartTotal;

  couponCode = signal('');
  couponApplied = signal(false);
  couponDiscount = signal(0);
  paymentMethod = signal('cash');

  billingForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    companyName: [''],
    streetAddress: ['', [Validators.required, Validators.minLength(5)]],
    apartment: [''],
    townCity: ['', [Validators.required, Validators.minLength(2)]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\+?[\d\s\-\(\)]{10,}$/)]],
    emailAddress: ['', [Validators.required, Validators.email]],
    saveInfo: [false]
  });

  applyCoupon() {
    const code = this.couponCode().trim().toLowerCase();
    if (code === 'save10') {
      this.couponDiscount.set(10);
      this.couponApplied.set(true);
    } else if (code === 'welcome20') {
      this.couponDiscount.set(20);
      this.couponApplied.set(true);
    } else {
      this.couponDiscount.set(0);
      this.couponApplied.set(false);
      alert('Invalid coupon code');
    }
  }

  setPaymentMethod(method: string) {
    this.paymentMethod.set(method);
  }

  getFinalTotal(): number {
    const subtotal = this.cartSubtotal();
    const discount = (subtotal * this.couponDiscount()) / 100;
    return +(subtotal - discount).toFixed(2);
  }

  onSubmit() {
    if (this.billingForm.valid) {
      const orderData = {
        billingDetails: this.billingForm.value,
        items: this.cartItems(),
        paymentMethod: this.paymentMethod(),
        subtotal: this.cartSubtotal(),
        discount: this.couponDiscount(),
        total: this.getFinalTotal(),
        couponCode: this.couponApplied() ? this.couponCode() : null
      };

      console.log('Order submitted:', orderData);
      
      this.cartService.clearCart();
    } else {
      Object.keys(this.billingForm.controls).forEach(key => {
        this.billingForm.get(key)?.markAsTouched();
      });
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.billingForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email address';
      if (field.errors['minlength']) return `${fieldName} is too short`;
      if (field.errors['pattern']) return 'Please enter a valid phone number';
    }
    return '';
  }
}
