import './Footer.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>Khalil<span>Cart</span></h3>
          <p>The best place to buy your modern apparel.</p>
        </div>
        <div className="footer-links">
          <h4>Shop</h4>
          <Link href="/men">Men's Collection</Link>
          <Link href="/women">Women's Collection</Link>
        </div>
        <div className="footer-links">
          <h4>Account</h4>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} KhalilCart. All rights reserved.</p>
      </div>
    </footer>
  );
}
