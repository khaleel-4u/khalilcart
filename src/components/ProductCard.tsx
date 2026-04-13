"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart } from 'lucide-react';
import './ProductCard.css';
import { addToCart } from '@/app/actions/cart';
import { useTransition } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  rating: number;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isPending, startTransition] = useTransition();
  const imageSrc = product.images?.[0] || 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400';
  
  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent Navigation since this is inside a Link
    startTransition(() => {
      addToCart(product.id);
    });
  };

  return (
    <Link href={`/product/${product.id}`} className="card product-card">
      <div className="product-image-container">
        <Image src={imageSrc} alt={product.name} fill className="product-image" style={{objectFit: "cover"}} />
        <button 
          className="add-to-cart-quick btn-primary" 
          aria-label="Add to cart"
          onClick={handleQuickAdd}
          disabled={isPending}
        >
          <ShoppingCart size={18} />
        </button>
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-name">{product.name}</h3>
        <div className="product-footer">
          <div className="product-price">${product.price.toFixed(2)}</div>
          <div className="product-rating">
            <Star size={14} fill="currentColor" color="var(--primary)" />
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
