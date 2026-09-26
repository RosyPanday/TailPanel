import { ArrowLeft, ChevronRight, Home } from "lucide-react";
import { useAddInvoices } from "../../../hooks/use-add-invoice.js";
import InvoiceCustomerInformation from "../../form/invoice/invoice-customer-information.js";
import InvoiceItems from "../../form/invoice/invoice-items.js";
import InvoiceAdditionalNotes from "../../form/invoice/invoice-addiitional-notes.js";
import InvoiceDates from "../../form/invoice/invoice-dates.js";
import InvoiceSummary from "./invoice-summary.js";
import InvoiceActions from "./invoice-actions.js";

function AddInvoiceContent() {
  const { register, handleSubmit, onSubmitEvent, errors, control } =
    useAddInvoices();
  return (
    <div className="flex flex-col gap-4 m-4">
      {/* top */}
      <div className="flex gap-3 items-center">
        <div>
          {" "}
          <Home className="size-5 text-gray-600"> </Home>
        </div>
        <div>
          <ChevronRight className="size-5 text-gray-600"></ChevronRight>
        </div>
        <div className="text-gray-600">E-Commerce</div>
        <div>
          <ChevronRight className="size-5 text-gray-600"></ChevronRight>
        </div>
        <div className="text-gray-600">Invoices</div>
        <div>
          <ChevronRight className="size-5 text-gray-600"></ChevronRight>
        </div>
        <div className="font-semibold">Create Invoice</div>
      </div>
      {/* heading */}
      <div className="flex gap-3 items-center">
        <button type="button">
          <ArrowLeft className="text-gray-600 "></ArrowLeft>{" "}
        </button>
        <div className="flex flex-col gap-3">
          <div className="font-bold text-3xl">Create New Invoice</div>
          <div className="text-gray-600">
            Fill in the details to create a new invoice.
          </div>
        </div>
      </div>
      {/* form */}
      <form onSubmit={handleSubmit(onSubmitEvent)}>
        <div className="flex flex-wrap w-full gap-3">
          {/* first holder */}
          <div className="flex flex-1 flex-col gap-3">
            <InvoiceCustomerInformation register={register} errors={errors} />
            <InvoiceItems
              register={register}
              errors={errors}
              control={control}
            />
            <InvoiceAdditionalNotes register={register} errors={errors} />
          </div>
          {/* left side holder */}
          <div className="flex flex-col gap-4 ">
             <InvoiceDates register={register} errors={errors}  />
             <InvoiceSummary control={control}/>
             <InvoiceActions />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddInvoiceContent;