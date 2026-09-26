import { Plus } from "lucide-react";
import { useWatch } from "react-hook-form";

function InvoiceItems({ register, errors ,control}: { register: any; errors: any ,control:any}) {
  const quantity = useWatch({ control, name: "quantity" });
  const rate = useWatch({ control, name: "rate" });

  const numQuantity = Number(quantity) || 0;
  const numRate = Number(rate) || 0;
  const computedAmount = (numQuantity * numRate).toFixed(2);
  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg p-4">
      {/* heading */}
      <div className="flex justify-between">
        <h3 className="font-semibold text-xl">Invoice Items</h3>
        <div className="border border-blue-600 p-2 flex gap-3">
          <Plus className="text-blue-600"></Plus>
          <span className="text-blue-600"> Add Item</span>
        </div>
      </div>
      {/* box */}
      <div className="border border-gray-400 rounded-lg flex-col gap-4 p-4">
        <div className="flex flex-col gap-3">
          <div className="text-gray-800">Description *</div>
          <input
            className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
            {...register("description")}
            type="text"
            placeholder="Item Description"
          />
          {errors.description && (
            <p className="text-red-600">{errors.description.message}</p>
          )}
          <div className="flex gap -3">
            <div className="flex flex-col gap-3">
              <div className="text-gray-800">Quantity *</div>
              <input
                className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
                {...register("quantity")}
                type="text"
                placeholder="1"
              />
              {errors.quantity && (
                <p className="text-red-600">{errors.quantity.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-gray-800">Rate *</div>
              <input
                className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
                {...register("rate")}
                type="text"
                placeholder="1"
              />
              {errors.rate && (
                <p className="text-red-600">{errors.rate.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-gray-800">Amount </div>
              <div className="bg-gray-50 text-black text-xl">$ {computedAmount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceItems;
