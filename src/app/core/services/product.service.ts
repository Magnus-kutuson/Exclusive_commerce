import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  inStock: boolean;
  discount?: number;
  category?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly products: Product[] = [
    {
      id: '1',
      name: 'Winter Jacket',
      price: 260,
      originalPrice: 320,
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop',
      rating: 4.8,
      inStock: true,
      discount: 19,
      category: 'clothing'
    },
    {
      id: '2',
      name: 'Leather Handbag',
      price: 960,
      originalPrice: 1200,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop',
      rating: 4.6,
      inStock: true,
      discount: 20,
      category: 'accessories'
    },
    {
      id: '3',
      name: 'RGB AIO Cooler',
      price: 160,
      image: 'https://images.unsplash.com/photo-1595432541891-a461100d3054?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BlYWtlcnN8ZW58MHx8MHx8fDA%3D',
      rating: 4.3,
      inStock: true,
      category: 'electronics'
    },
    {
      id: '4',
      name: 'Wooden Nightstand',
      price: 360,
      originalPrice: 450,
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
      rating: 4.7,
      inStock: true,
      discount: 20,
      category: 'furniture'
    },
    {
      id: '5',
      name: 'Wireless Bluetooth Headphones',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      rating: 4.5,
      inStock: true,
      discount: 20,
      category: 'electronics'
    },
    {
      id: '6',
      name: 'Smart Fitness Watch',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
      rating: 4.8,
      inStock: true,
      discount: 20,
      category: 'electronics'
    },
    {
      id: '7',
      name: 'Premium Coffee Maker',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
      rating: 4.2,
      inStock: false,
      category: 'appliances'
    },
    {
      id: '8',
      name: 'Ergonomic Office Chair',
      price: 299.99,
      originalPrice: 399.99,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      rating: 4.6,
      inStock: true,
      discount: 25,
      category: 'furniture'
    }
  ];

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }

  getBestSellingProducts(): Product[] {
    return this.products
      .filter(product => product.rating >= 4.5)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);
  }

  getDiscountedProducts(): Product[] {
    return this.products.filter(product => product.discount && product.discount > 0);
  }
}
