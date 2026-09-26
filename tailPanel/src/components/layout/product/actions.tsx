function Action() {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg p-4">
      <div className="font-semibold text-3xl">Actions</div>
      <button type="submit" className="bg-blue-600 p-4 text-white">Save Product</button>
      <button type="button" className="border text-blue-600 p-4"> Cancel</button>
    </div>
  );
}

export default Action;