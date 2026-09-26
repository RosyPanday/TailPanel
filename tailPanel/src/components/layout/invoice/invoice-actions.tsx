function InvoiceActions(){
    return(
          <div className="bg-white rounded-lg lg:w-90 p-4 flex flex-col gap-4">
             <h3 className="font-semibold text-xl">Actions</h3>
             <button type="submit" className="bg-blue-600 text-white p-3">Create Invoice</button>
             <button type="button" className="text-blue-600 border bordere-blue-600 p-3">Cancel</button>
          </div>
    )
}
export default InvoiceActions;