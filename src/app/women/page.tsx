import ProductCard, { Product } from '@/components/ProductCard';
import { createClient } from '@/utils/supabase/server';
import '../men/category.css';

export default async function WomenCategoryPage() {
  const supabase = await createClient();
  const { data: womenProducts } = await supabase.from('products').select('*').eq('category', 'Women');

  return (
    <div className="container category-page animate-fade-in">
      <div className="category-header">
        <h1>Women's Collection</h1>
        <p>Discover elegance and comfort with our premium women's pieces.</p>
      </div>
      
      <div className="category-layout">
        <aside className="filters-sidebar glass">
          <h3>Filters</h3>
          <div className="filter-group">
            <label>Size</label>
            <select className="filter-input">
              <option value="">All Sizes</option>
              <option value="s">Small</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Price Range</label>
            <input type="range" min="0" max="500" className="filter-input-range" />
            <div className="price-labels">
              <span>$0</span>
              <span>$500+</span>
            </div>
          </div>
        </aside>

        <main className="category-content">
          <div className="content-tools">
            <span className="results-count">{womenProducts?.length || 0} Results</span>
            <div className="sort-by">
              <label>Sort by:</label>
              <select className="filter-input">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-3 product-grid">
            {womenProducts && womenProducts.map(product => (
              <ProductCard key={product.id} product={product as Product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
