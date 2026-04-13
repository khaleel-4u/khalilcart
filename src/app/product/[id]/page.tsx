import Image from 'next/image';
import { Star, ShoppingCart, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/server';
import { addToCart } from '@/app/actions/cart';
import './product.css';

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  
  const supabase = await createClient();
  const { data: product } = await supabase.from('products').select('*').eq('id', id).single();

  if (!product) {
    return <div className="container" style={{paddingTop: '5rem'}}>Product Not Found.</div>
  }

  // Create bound action for the server form
  const handleAddToCart = addToCart.bind(null, product.id);

  return (
    <div className="container product-page animate-fade-in">
      <Link href={`/${product.category.toLowerCase()}`} className="back-link">
        <ArrowLeft size={16} /> Back to {product.category}
      </Link>
      
      <div className="product-layout">
        <div className="product-gallery">
          <div className="main-image">
            <Image src={product.images[0]} alt={product.name} fill style={{objectFit: "cover"}} />
          </div>
          <div className="thumbnail-list">
            {product.images.map((img: string, idx: number) => (
              <div key={idx} className={`thumbnail ${idx === 0 ? 'active' : ''}`}>
                <Image src={img} alt={`${product.name} view ${idx + 1}`} fill style={{objectFit: "cover"}} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-details">
          <div className="detail-category">{product.category}</div>
          <h1 className="detail-title">{product.name}</h1>
          <div className="detail-meta">
            <div className="detail-rating">
              <Star size={18} fill="currentColor" color="var(--primary)" />
              <Star size={18} fill="currentColor" color="var(--primary)" />
              <Star size={18} fill="currentColor" color="var(--primary)" />
              <Star size={18} fill="currentColor" color="var(--primary)" />
              <Star size={18} fill="currentColor" color="var(--border)" />
              <span>{product.rating} (128 reviews)</span>
            </div>
          </div>
          
          <div className="detail-price">${product.price.toFixed(2)}</div>
          
          <p className="detail-description">{product.description}</p>
          
          <div className="size-selector">
            <div className="size-header">
              <span className="size-label">Select Size</span>
              <button className="size-guide">Size Guide</button>
            </div>
            <div className="size-grid">
              {['S', 'M', 'L', 'XL'].map(size => (
                <button key={size} className="size-btn">{size}</button>
              ))}
            </div>
          </div>
          
          <form action={handleAddToCart} className="add-to-cart-section">
            <button type="submit" className="btn btn-primary add-to-cart-btn">
              <ShoppingCart size={20} /> Add to Cart
            </button>
          </form>
          
          <div className="product-features">
            <div className="feature-item">
              <Truck size={24} className="feature-icon" />
              <div>
                <h5>Free Shipping</h5>
                <p>On orders over $150</p>
              </div>
            </div>
            <div className="feature-item">
              <ShieldCheck size={24} className="feature-icon" />
              <div>
                <h5>2-Year Warranty</h5>
                <p>Covering manufacturer defects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
