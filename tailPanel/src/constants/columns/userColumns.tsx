import { createColumnHelper } from "@tanstack/react-table";
import type { InvoiceInterface } from "../../types/invoice.js";
import type { features } from "../../../configs/table-config.js";

const columnHelper =
  createColumnHelper<typeof features, InvoiceInterface>();

export const invoiceColumns = columnHelper.columns([
  // id
  columnHelper.accessor("id", {
    header: "INVOICE",
    cell: (info) => {
      const id = info.getValue();
      const formattedId = `INV-${String(id).padStart(3, "0")}`;
      return (
        <span className="font-semibold text-blue-600 cursor-pointer">{formattedId}</span>
      );
    },
  }),
  //  customer
  columnHelper.accessor("customerName", {
    header: "CUSTOMER",
    cell: (info) => {
      const row = info.row.original;
      return (
        <div className="flex flex-col">
          <span className="font-semibold text-slate-900">
            {row.customerName}
          </span>
          <span className="text-sm text-slate-500">{row.email}</span>
        </div>
      );
    },
  }),

  // amount
  columnHelper.accessor("total", {
    header: "AMOUNT",
    cell: (info) => {
      const amount = info.getValue();
      return <span className="font-bold text-slate-900">${amount}</span>;
    },
  }),
  // issued date
  columnHelper.accessor("issuedDate", {
    header: "DATE",
    cell: (info) => {
      const dateVal = info.getValue();
      const formattedDate = new Date(dateVal).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      return <span className="text-slate-600">{formattedDate}</span>;
    },
  }),
  // due date
  columnHelper.accessor("dueDate", {
    header: "DUE DATE",
    cell: (info) => {
      const dateVal = info.getValue();
      const formattedDate = new Date(dateVal).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      return <span className="text-slate-600">{formattedDate}</span>;
    },
  }),
]);