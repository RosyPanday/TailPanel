function InvoiceActions({ isPending }: { isPending: boolean }) {
  return (
    <div className="bg-white rounded-lg  p-4 flex flex-col gap-4">
      <h3 className="font-semibold text-xl">Actions</h3>
      <button
        disabled={isPending}
        type="submit"
        className="bg-blue-600 text-white p-3"
      >
        {isPending ? (
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            <span>Saving</span>
          </div>
        ) : (
          "Create Invoice"
        )}
      </button>
      <button
        disabled={isPending}
        type="button"
        className="text-blue-600 border bordere-blue-600 p-3"
      >
        Cancel
      </button>
    </div>
  );
}
export default InvoiceActions;