import {z} from "zod";
import { insertProductSchema, insertCartSchema, cartItemSchema, shippingAddressSchema } from "@/lib/validators";

//These are things that are created automatically

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
}

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;