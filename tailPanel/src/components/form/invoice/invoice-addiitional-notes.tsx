function InvoiceAdditionalNotes({
  register,
  errors,
}: {
  register: any;
  errors: any;
}) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-lg">
      <h3 className="font-bold text-xl">Additional Notes</h3>
      <div className="text-gray-800">Additional Notes</div>
      <input
        className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
        {...register("notes")}
        type="text"
        placeholder="Enter any additional notes or payment terms"
      />
      {errors.notes && <p className="text-red-600">{errors.notes.message}</p>}
    </div>
  );
}

export default InvoiceAdditionalNotes;