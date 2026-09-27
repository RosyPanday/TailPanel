import { useWatch } from "react-hook-form";

function InvoiceSummary({control}:{control:any}){
  const quantity = useWatch({ control, name: "quantity" });
  const rate = useWatch({ control, name: "rate" });

  const numQuantity = Number(quantity) || 0;
  const numRate = Number(rate) || 0;
  
  const subtotal = numQuantity * numRate;
  const tax = subtotal * 0.1; 
  const total = subtotal + tax;
  return(
     <div className="bg-white rounded-lg p-4 flex flex-col gap-4">
       <h3 className="font-semibold text-xl"> Summary</h3>
       <div className="flex justify-between">
          <div className="text-gray-600"> Subtotal</div>
          <div>${subtotal.toFixed(2)}</div>
       </div>
       <div className="flex justify-between">
          <div className="text-gray-600"> Tax(10%)</div>
          <div>${tax.toFixed(2)}</div>
       </div>
       <div className="flex justify-between mt-3">
          <div className="text-xl font-semibold"> Total</div>
          <div className="text-blue-600 text-2xl">${total.toFixed(2)}</div>
       </div>
     </div>
  )
}
export default InvoiceSummary;