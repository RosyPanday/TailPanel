function ProductInformation({
  register,
  errors,
}: {
  register: any;
  errors: any;
}) {
  return (
    <div className="flex flex-1 flex-col gap-3 bg-white p-6 rounded-lg">
      <div className="text-2xl font-semibold">Product Information</div>
      {/* product name */}
      <div className="text-gray-800">Product Name *</div>
      <input
        className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
        {...register("name")}
        type="text"
        placeholder="Enter Product Name"
      />
      {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      <div className="flex flex-col md:flex-row gap-4">
        {/* SKU */}
        <div className="flex flex-col gap-3">
          <div className="text-gray-800">SKU *</div>
          <input
            className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
            {...register("sku")}
            type="text"
            placeholder="e.g., PRD-2024-001"
          />
          {errors.sku && <p className="text-red-600">{errors.sku.message}</p>}
        </div>

        {/* category */}
        <div className="flex flex-col gap-3">
          <div className="text-gray-800">Category *</div>
          <select
            {...register("category")}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800"
          >
            <option value="ELECTRONICS">Electronics</option>
            <option value="CLOTHING">Clothing</option>
            <option value="ACCESORIES">Accessories</option>
            <option value="HOME_AND_GARDEN">Home & Garden</option>
            <option value="SPORTS">Sports</option>
          </select>
          {errors.category && (
            <p className="text-red-600">{errors.category.message}</p>
          )}
        </div>
      </div>
      {/* description */}
      <div className="text-gray-800">Description *</div>
      <textarea
        className="px-4 py-2 h-30 rounded-lg bg-gray-100 xs:w-30"
        {...register("description")}
        type="text"
        placeholder="Enter Product Description"
      />
      {errors.description && (
        <p className="text-red-600">{errors.description.message}</p>
      )}
    </div>
  );
}

export default ProductInformation;