import { supabase } from "../supabase";

export const postOrders = async (payload) => {
  const {data, error} = await supabase.from('orders').insert([payload]);

  if (error) {
    return error
  } else {
    return "success"
  }

}