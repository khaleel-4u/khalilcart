"use client";

import Image from 'next/image';
import { Minus, Plus, Trash2 } from 'lucide-react';
import './CartItem.css';
import { Product } from './ProductCard';
import { updateCartQuantity, removeFromCart } from '@/app/actions/cart';
import { useTransition } from 'react';

export interface CartItemType {
  product: Product;
  quantity: number;
}

interface CartItemProps {
  cartId: string;
  item: CartItemType;
}

export default function CartItem({ cartId, item }: CartItemProps) {
  const { product, quantity } = item;
  const [isPending, startTransition] = useTransition();
  const imageSrc = product.images?.[0] || 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=400';

  const handleUpdate = (newQuantity: number) => {
    startTransition(() => {
      updateCartQuantity(cartId, newQuantity);
    });
  }

  const handleRemove = () => {
    startTransition(() => {
      removeFromCart(cartId);
    });
  }

  return (
    <div className={`cart-item ${isPending ? 'opacity-50' : ''}`}>
      <div className="cart-item-image">
        <Image src={imageSrc} alt={product.name} fill style={{objectFit: "cover"}} />
      </div>
      <div className="cart-item-details">
        <div className="cart-item-header">
          <h4 className="cart-item-title">{product.name}</h4>
          <button className="cart-item-remove" onClick={handleRemove} disabled={isPending} aria-label="Remove item">
            <Trash2 size={18} />
          </button>
        </div>
        <div className="cart-item-category">{product.category}</div>
        <div className="cart-item-footer">
          <div className="cart-item-price">${(product.price * quantity).toFixed(2)}</div>
          <div className="cart-item-quantity">
            <button 
              className="quantity-btn" 
              onClick={() => handleUpdate(quantity - 1)}
              disabled={quantity <= 1 || isPending}
            >
              <Minus size={14} />
            </button>
            <span className="quantity-value">{quantity}</span>
            <button 
              className="quantity-btn" 
              onClick={() => handleUpdate(quantity + 1)}
              disabled={isPending}
            >
              <Plus size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
