-- SEED SCRIPT FOR PRODUCTS (Expanded to 20 items)

INSERT INTO public.products (id, name, description, price, category, images, stock, rating)
VALUES
  -- Men (10 Items)
  ('a1b2c3d4-0000-0000-0000-000000000001', 'Classic White Sneakers', 'Elevate your everyday style with these classic white sneakers.', 89.99, 'Men', ARRAY['https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600'], 50, 4.8),
  ('a1b2c3d4-0000-0000-0000-000000000002', 'Vintage Leather Jacket', 'Premium vintage leather jacket perfect for any season.', 199.99, 'Men', ARRAY['https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=600'], 20, 4.9),
  ('a1b2c3d4-0000-0000-0000-000000000003', 'Slim Fit Chinos', 'Comfortable stretch chinos tailored for a slim fit.', 54.50, 'Men', ARRAY['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600'], 100, 4.5),
  ('a1b2c3d4-0000-0000-0000-000000000004', 'Minimalist Leather Watch', 'Elegant analog watch with a genuine leather strap.', 129.50, 'Men', ARRAY['https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=600'], 35, 4.9),
  ('a1b2c3d4-0000-0000-0000-000000000005', 'Casual Graphic Tee', 'Soft cotton tee with a modern graphic design.', 29.99, 'Men', ARRAY['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=600'], 120, 4.3),
  ('a1b2c3d4-0000-0000-0000-000000000006', 'Formal Oxford Shirt', 'Crisp white oxford shirt ideal for the office.', 45.00, 'Men', ARRAY['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600'], 80, 4.6),
  ('a1b2c3d4-0000-0000-0000-000000000007', 'Athletic Running Shorts', 'Breathable performance shorts for intense workouts.', 35.00, 'Men', ARRAY['https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=600'], 60, 4.4),
  ('a1b2c3d4-0000-0000-0000-000000000008', 'Premium Wool Overcoat', 'Stay warm and stylish with this crafted wool coat.', 245.00, 'Men', ARRAY['https://plus.unsplash.com/premium_photo-1673356302067-aac3b545a362?auto=format&fit=crop&q=80&w=600'], 15, 5.0),
  ('a1b2c3d4-0000-0000-0000-000000000009', 'Classic Denim Jeans', 'Rugged, durable, and timeless straight fit jeans.', 69.99, 'Men', ARRAY['https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&q=80&w=600'], 90, 4.2),
  ('a1b2c3d4-0000-0000-0000-00000000000a', 'Canvas Backpack', 'Everyday carry canvas backpack with laptop sleeve.', 55.00, 'Men', ARRAY['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600'], 45, 4.7),

  -- Women (10 Items)
  ('a1b2c3d4-0000-0000-0000-000000000011', 'Everyday Denim Jacket', 'A staple denim piece offering both comfort and modern edge.', 110.00, 'Women', ARRAY['https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=600'], 40, 4.7),
  ('a1b2c3d4-0000-0000-0000-000000000012', 'Comfort Knit Sweater', 'Oversized ultra-soft knit sweater for relaxed days.', 65.00, 'Women', ARRAY['https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=600'], 75, 4.5),
  ('a1b2c3d4-0000-0000-0000-000000000013', 'Floral Summer Dress', 'Lightweight floral pattern dress perfect for warm days.', 79.99, 'Women', ARRAY['https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80&w=600'], 60, 4.8),
  ('a1b2c3d4-0000-0000-0000-000000000014', 'Elegant Crossbody Bag', 'Compact and versatile luxury faux-leather bag.', 145.00, 'Women', ARRAY['https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=600'], 25, 4.9),
  ('a1b2c3d4-0000-0000-0000-000000000015', 'High-Waisted Yoga Leggings', 'Premium stretch leggings with maximum support and comfort.', 45.00, 'Women', ARRAY['https://plus.unsplash.com/premium_photo-1661608674404-33230a11e549?auto=format&fit=crop&q=80&w=600'], 150, 4.6),
  ('a1b2c3d4-0000-0000-0000-000000000016', 'Linen Button-Up Blouse', 'Breezy and light linen blouse for effortless styling.', 55.00, 'Women', ARRAY['https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&q=80&w=600'], 85, 4.3),
  ('a1b2c3d4-0000-0000-0000-000000000017', 'Chunky Platform Boots', 'Make a statement with these bold faux-leather platform boots.', 120.00, 'Women', ARRAY['https://images.unsplash.com/photo-1606821210214-741e57c83f6f?auto=format&fit=crop&q=80&w=600'], 30, 4.8),
  ('a1b2c3d4-0000-0000-0000-000000000018', 'Cashmere Blend Scarf', 'Ultra-soft scarf to keep you cozy during winter strolls.', 35.00, 'Women', ARRAY['https://images.unsplash.com/photo-1520903073614-279fdfe1c7f1?auto=format&fit=crop&q=80&w=600'], 100, 4.9),
  ('a1b2c3d4-0000-0000-0000-000000000019', 'Pleated Midi Skirt', 'Classic pleated skirt mapping elegance to your everyday look.', 68.00, 'Women', ARRAY['https://images.unsplash.com/photo-1583496661160-c588c443c982?auto=format&fit=crop&q=80&w=600'], 50, 4.4),
  ('a1b2c3d4-0000-0000-0000-00000000001a', 'Tortoiseshell Sunglasses', 'Chic cat-eye frames providing complete UV protection.', 25.00, 'Women', ARRAY['https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600'], 80, 4.7)
ON CONFLICT (id) DO NOTHING;
