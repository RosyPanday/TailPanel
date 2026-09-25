function PricingAndInventory({
  register,
  errors,
}: {
  register: any;
  errors: any;
}) {
  return (
    <div className="flex flex-1 flex-col gap-4 bg-white rounded-lg p-4">
      <div className="font-semibold text-3xl">Pricing & Inventory </div>
      <div className=" flex gap-3">
        {/* price */}
        <div className="flex flex-col gap-4">
          <div className="text-gray-800">Price *</div>
          <input
            className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
            {...register("price")}
            type="text"
            placeholder="$ 0.00"
          />
          {errors.price && (
            <p className="text-red-600">{errors.price.message}</p>
          )}
        </div>
        {/* stock */}
        <div className="flex flex-col gap-4">
          <div className="text-gray-800">Stock Quantity *</div>
          <input
            className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
            {...register("quantity")}
            type="text"
            placeholder="0"
          />
          {errors.quantity && (
            <p className="text-red-600">{errors.quantity.message}</p>
          )}
        </div>
      </div>
      {/* stock status and supplier */}
      <div className=" flex gap-3">
        {/* price */}
        <div className="flex flex-col gap-4">
          <div className="text-gray-800">Stock Status *</div>
          <select
            {...register("status")}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800"
          >
            <option value="IN_STOCK">In Stock</option>
            <option value="LOW_STOCK">Low Stock</option>
            <option value="OUT_OF_STOCK">Out of Stock</option>
          </select>
          {errors.status && (
            <p className="text-red-600">{errors.status.message}</p>
          )}
        </div>
        {/* stock */}
        <div className="flex flex-col gap-4">
          <div className="text-gray-800">Supplier *</div>
          <input
            className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
            {...register("supplier")}
            type="text"
            placeholder="0"
          />
          {errors.supplier && (
            <p className="text-red-600">{errors.supplier.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default PricingAndInventory;
