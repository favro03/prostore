import {z} from "zod";
import { insertProductSchema } from "@/lib/validators";

//These are things that are created automatically

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: string;
  createdAt: Date;
}