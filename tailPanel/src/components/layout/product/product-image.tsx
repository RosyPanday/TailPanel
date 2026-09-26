function ProductImage({ register, errors }: {
  register: any;
  errors: any;
}) {

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm w-full max-w-md">
      <h3 className="text-lg font-semibold text-slate-800 mb-4">
        Product Image
      </h3>

      <div className="relative border-2 border-dashed border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-blue-400 transition-colors bg-slate-50/50">
        {/* Hidden File Input */}
        <input
          id="file-upload"
          type="file"
          accept="image/jpeg,image/png,image/gif,image/webp"
          className="sr-only"
          {...register("image")}
        />

        {/* Upload Icon */}
        <div className="mb-3 text-slate-400">
          <svg
            className="w-12 h-12 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
        </div>

        <label
          htmlFor="file-upload"
          className="cursor-pointer text-slate-600 font-medium text-sm hover:text-slate-800"
        >
          Drop your image here, or{" "}
          <span className="text-blue-600 hover:underline font-semibold">
            browse
          </span>
        </label>

      </div>

      {errors.image && (
        <p className="mt-2 text-xs text-red-500 font-medium">
          {errors.image.message as string}
        </p>
      )}
    </div>
  );
}

export default ProductImage;