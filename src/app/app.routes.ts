import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
      },
            {
              path: 'wishlist',
              loadComponent: () =>
                import('./pages/wishlist/wishlist.component').then((m) => m.WishlistComponent),
            },
            {
              path: 'cart',
              loadComponent: () =>
                import('./pages/cart/cart.component').then((m) => m.CartComponent),
            },
    ],
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./pages/auth/signup/signup.component').then(
        (m) => m.SignupComponent
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/bot-found/bot-found.component').then(
        (m) => m.BotFoundComponent
      ),
  },
];
