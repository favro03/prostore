'use client'

import { createOrder } from "@/lib/actions/order.actions";
import {Check, Loader} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useTransition } from "react";

const PlaceOrderForm = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        startTransition(async () => {
            const res = await createOrder();
            
            if (!res.success) {
                toast.error(res.message as string || 'Failed to create order');
                return;
            }
            
            toast.success('Order created successfully');
            if(res.redirectTo){
                router.push(res.redirectTo);
            }
        });
    }
    
    const PlaceOrderButton = () => {
        return(
            <Button disabled={isPending} className="w-full">
                {isPending ? (
                    <Loader className="w-4 h-4 animate-spin" />
                ) : (
                    <Check className="w-4 h-4"/> 
                )}{' ' }Place Order
            </Button>        
        )
    }

    return ( 
        <form onSubmit={handleSubmit} className="w-full">
        <PlaceOrderButton />
        </form>
     );
}
 
export default PlaceOrderForm;