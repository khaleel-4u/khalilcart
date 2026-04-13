'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function addToCart(productId: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('Must be logged in to add items to cart.');
  }

  // Check if item already exists in cart for this user
  const { data: existingCartItem } = await supabase
    .from('cart')
    .select('id, quantity')
    .eq('user_id', user.id)
    .eq('product_id', productId)
    .single();

  if (existingCartItem) {
    // Increase quantity
    await supabase
      .from('cart')
      .update({ quantity: existingCartItem.quantity + 1 })
      .eq('id', existingCartItem.id);
  } else {
    // Insert new item
    await supabase
      .from('cart')
      .insert({
        user_id: user.id,
        product_id: productId,
        quantity: 1
      });
  }

  revalidatePath('/cart');
}

export async function updateCartQuantity(cartId: string, newQuantity: number) {
  const supabase = await createClient();
  if (newQuantity < 1) {
    await supabase.from('cart').delete().eq('id', cartId);
  } else {
    await supabase.from('cart').update({ quantity: newQuantity }).eq('id', cartId);
  }
  revalidatePath('/cart');
}

export async function removeFromCart(cartId: string) {
  const supabase = await createClient();
  await supabase.from('cart').delete().eq('id', cartId);
  revalidatePath('/cart');
}
