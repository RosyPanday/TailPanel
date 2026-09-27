function ProductAction({ isPending }: { isPending: boolean }) {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg p-4">
      <div className="font-semibold text-3xl">Actions</div>
      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 p-4 text-white cursor-pointer"
      >
        {isPending ? (
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            <span>Saving</span>
          </div>
        ) : (
          "Save Product"
        )}
      </button>
      <button type="button" className="border text-blue-600 p-4 cursor-pointer">
        {" "}
        Cancel
      </button>
    </div>
  );
}

export default ProductAction;