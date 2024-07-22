import { supabase } from './supabase';

async function getProductPrice(productId) {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('price')
      .eq('id', productId)
      .single();

    if (error) {
      console.error('Error fetching product price:', error);
      return null;
    }

    if (data) {
      return data.price;
    } else {
      console.log('Product not found');
      return null;
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return null;
  }
}

// Usage example:
// const price = await getProductPrice('your-product-id');
// if (price !== null) {
//   console.log('Product price:', price);
// }