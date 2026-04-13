import Link from 'next/link';
import { ShoppingCart, Search, User, LogIn } from 'lucide-react';
import { createClient } from '@/utils/supabase/server';
import './Navbar.css';

export default async function Navbar() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <Link href="/" className="logo">
          Khalil<span>Cart</span>
        </Link>
        <div className="nav-links">
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
        </div>
        <div className="nav-actions">
          <div className="search-bar">
            <Search size={20} />
            <input type="text" placeholder="Search..." />
          </div>
          {user ? (
            <Link href="/profile" className="icon-btn" title="My Profile">
              <User size={24} />
            </Link>
          ) : (
            <Link href="/login" className="icon-btn" title="Sign In">
              <LogIn size={24} />
            </Link>
          )}
          <Link href="/cart" className="icon-btn cart-btn">
            <ShoppingCart size={24} />
            <span className="cart-badge">3</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
