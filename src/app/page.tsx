import ProductCard, { Product } from '@/components/ProductCard';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import './home.css';

export default async function Home() {
  const supabase = await createClient();
  const { data: featuredProducts } = await supabase.from('products').select('*').limit(4);

  return (
    <div className="home-page animate-fade-in">
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Elevate Your Everyday Style.</h1>
            <p className="hero-subtitle">Discover the latest trends with our curated collection of modern apparel and accessories.</p>
            <div className="hero-actions">
              <Link href="/men" className="btn btn-primary">Shop Men</Link>
              <Link href="/women" className="btn btn-outline hero-btn-outline">Shop Women</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container featured-section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <Link href="/men" className="view-all-link">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-4">
          {featuredProducts && featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product as Product} />
          ))}
        </div>
      </section>

      <section className="container categories-section">
        <div className="grid grid-cols-2">
          <Link href="/men" className="category-banner men-banner">
            <div className="banner-content">
              <h3>Men's Collection</h3>
              <span className="shop-now">Shop Now <ArrowRight size={16} /></span>
            </div>
          </Link>
          <Link href="/women" className="category-banner women-banner">
            <div className="banner-content">
              <h3>Women's Collection</h3>
              <span className="shop-now">Shop Now <ArrowRight size={16} /></span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
