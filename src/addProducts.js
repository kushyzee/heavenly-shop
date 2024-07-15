import { supabase } from "./supabase";
import products from "./newProducts"

const addProductsToSupabase = async () => {
  for (let product of products) {
    const { data, error } = await supabase.from("products").insert([product]);

    if (error) {
      console.error("Error inserting product:", error);
    } else {
      console.log("Product added successfully:", data);
    }
  }
};

addProductsToSupabase();
export default addProductsToSupabase
