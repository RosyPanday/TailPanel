function InvoiceDates({ register, errors }: { register: any; errors: any }) {
  return (
    <div className="flex flex-col lg:w-90  gap-4 bg-white rounded-lg p-4">
      <h3 className="font-bold text-xl">Invoice Details</h3>
      {/* issued date */}
      <div className="text-gray-800">Issue Date *</div>
      <input
        className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
        {...register("issuedDate")}
        type="date"
        placeholder="Item Description"
      />
      {errors.issuedDate && (
        <p className="text-red-600">{errors.issuedDate.message}</p>
      )}
      {/* due date */}
      <div className="text-gray-800">Due Date *</div>
      <input
        className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
        {...register("dueDate")}
        type="date"
        placeholder="Item Description"
      />
      {errors.dueDate && (
        <p className="text-red-600">{errors.dueDate.message}</p>
      )}
    </div>
  );
}

export default InvoiceDates;