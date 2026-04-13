import Link from 'next/link';
import { ArrowLeft, ShieldCheck, ArrowRight } from 'lucide-react';
import CartItemComponent from '@/components/CartItem'; // Note renamed import to avoid conflict
import { createClient } from '@/utils/supabase/server';
import { processCheckout } from '@/app/actions/checkout';
import './cart.css';

export default async function CartPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="container cart-empty animate-fade-in">
        <h2>Please Sign In</h2>
        <p>You must be logged in to view your cart.</p>
        <Link href="/login" className="btn btn-primary">Sign In</Link>
      </div>
    );
  }

  // Fetch Cart Items from Supabase mapped natively to products
  const { data: cartItems } = await supabase
    .from('cart')
    .select('*, product:products(*)')
    .eq('user_id', user.id);

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="container cart-empty animate-fade-in">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link href="/" className="btn btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 150 ? 0 : 15;
  const taxes = subtotal * 0.08;
  const total = subtotal + shipping + taxes;

  return (
    <div className="container cart-page animate-fade-in">
      <h1 className="cart-title">Your Cart ({cartItems.length} items)</h1>
      
      <div className="cart-layout">
        <div className="cart-items-section">
          <div className="cart-list">
            {cartItems.map(item => (
              <CartItemComponent 
                key={item.id} 
                cartId={item.id}
                item={{ product: item.product, quantity: item.quantity }}
              />
            ))}
          </div>
          <Link href="/" className="continue-shopping">
            <ArrowLeft size={16} /> Continue Shopping
          </Link>
        </div>

        <aside className="cart-summary glass">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="summary-row">
            <span>Estimated Tax</span>
            <span>${taxes.toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <form action={processCheckout}>
            <button type="submit" className="btn btn-primary checkout-btn">
              Proceed to Checkout <ArrowRight size={18} />
            </button>
          </form>
          
          <div className="secure-checkout">
            <ShieldCheck size={16} /> Secure Checkout
          </div>
        </aside>
      </div>
    </div>
  );
}
