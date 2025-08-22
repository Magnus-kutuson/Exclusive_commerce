import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Mail, Phone } from 'lucide-angular';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule, ReactiveFormsModule, BreadcrumbModule, RouterLink, CommonModule, RouterLinkActive],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  contactIcons = {
    Phone,
    Mail,
  };

  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Message sent successfully ✅');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  home = { label: 'Home', routerLink: '/home' };

  items = [
    { label: 'Contact', routerLink: '/contact' },
  ]

  get f() {
    return this.contactForm.controls;
  }

  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required'])
        return `${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } is required`;
      if (field.errors['minlength'])
        return `${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } must be at least ${
          field.errors['minlength'].requiredLength
        } characters`;
      if (field.errors['email']) return 'Enter a valid email address';
      if (field.errors['pattern']) return 'Enter a valid phone number';
    }
    return '';
  }
}
