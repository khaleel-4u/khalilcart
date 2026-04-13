'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function processCheckout() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) throw new Error("User not authenticated.");

  // Fetch cart
  const { data: cartItems, error } = await supabase
    .from('cart')
    .select('*, product:products(*)')
    .eq('user_id', user.id);

  if (error || !cartItems || cartItems.length === 0) {
    throw new Error("Cart is empty");
  }

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 150 ? 0 : 15;
  const taxes = subtotal * 0.08;
  const total = subtotal + shipping + taxes;

  // 1. Insert Order
  const { data: orderData, error: orderError } = await supabase
    .from('orders')
    .insert({
      user_id: user.id,
      total_amount: total,
      status: 'pending' // Would typically wait for payment
    })
    .select('id')
    .single();

  if (orderError) throw new Error("Failed to create order");

  // 2. Insert Order Items
  const orderItemsData = cartItems.map((item) => ({
    order_id: orderData.id,
    product_id: item.product_id,
    quantity: item.quantity,
    price_at_time: item.product.price
  }));

  const { error: itemsError } = await supabase
    .from('order_items')
    .insert(orderItemsData);

  if (itemsError) throw new Error("Failed to process order items");

  // 3. Clear Cart
  await supabase.from('cart').delete().eq('user_id', user.id);

  revalidatePath('/cart');
  revalidatePath('/profile');
  
  redirect('/profile?checkout=success');
}
