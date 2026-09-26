function InvoiceCustomerInformation({
  register,
  errors,
}: {
  register: any;
  errors: any;
}) {
  return (
    <div className="flex flex-col gap-3 p-5 bg-white rounded-2xl">
      <h3 className="font-semibold text-xl">Customer Information</h3>
      {/* customer name and email address */}
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          {/* customer name */}
          <div className="text-gray-800">Customer Name *</div>
          <input
            className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
            {...register("customerName")}
            type="text"
            placeholder="Enter Customer Name"
          />
          {errors.customerName && (
            <p className="text-red-600">{errors.customerName.message}</p>
          )}
        </div>
        {/* email address  */}
        <div className="flex flex-col gap-4">
          <div className="text-gray-800">Email Address *</div>
          <input
            className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
            {...register("email")}
            type="text"
            placeholder="customer@email.com"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>
      </div>
      {/* address  */}
      <div className="flex flex-col gap-4">
        {/* customer name */}
        <div className="text-gray-800">Address </div>
        <input
          className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
          {...register("address")}
          type="text"
          placeholder="Street address"
        />
        {errors.address && (
          <p className="text-red-600">{errors.address.message}</p>
        )}
      </div>
      {/* city state zip*/}
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <div className="text-gray-800">City, State, ZIP </div>
          <input
            className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
            {...register("location")}
            type="text"
            placeholder="City, State, ZIP"
          />
          {errors.location && (
            <p className="text-red-600">{errors.location.message}</p>
          )}
        </div>
        {/* phone Number */}
        <div className="flex flex-col gap-4">
          <div className="text-gray-800">Phone Number *</div>
          <input
            className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
            {...register("phoneNumber")}
            type="text"
            placeholder="9834692837"
          />
          {errors.phoneNumber && (
            <p className="text-red-600">{errors.phoneNumber.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default InvoiceCustomerInformation;
