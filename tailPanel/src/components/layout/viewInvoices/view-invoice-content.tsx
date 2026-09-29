import { ChevronRight, Home, Plus } from "lucide-react";
import { useGetInvoicesQuery } from "../../../hooks/invoice/use-get-invoice-query.js";
import InvoiceTable from "./Invoice-table.js";

function ViewInvoiceContent() {
  const { data, isPending, error } = useGetInvoicesQuery();
  return (
    <div className="flex flex-col gap-3 p-5">
      {/* top */}
      <div className="flex items-center gap-3 ">
        <button>
          <Home className="size-4 text-gray-600 cursor-pointer"></Home>
        </button>
        <ChevronRight className="size-4 text-gray-600"></ChevronRight>
        <button className=" text-gray-600 cursor-pointer">ECommerce</button>
        <ChevronRight className="size-4 text-gray-600"></ChevronRight>
        <button className="font-semibold ">Invoices</button>
      </div>
      {/* heading */}
      <div className="flex justify-between ">
        <div className="font-bold text-2xl">Invoices</div>
        <button className="flex gap-4 px-2 items-center bg-blue-600">
          <Plus className="text-white size-5"></Plus>
          <span className="text-white">Create Invoice</span>
        </button>
      </div>
      <div className="text-gray-600 text-md">
        Manage and track all your invoices.
      </div>
      {/* invoices */}
      { data && 
      <InvoiceTable data={data} />
      }
    </div>
  );
}

export default ViewInvoiceContent;