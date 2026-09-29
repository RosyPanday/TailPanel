import { useMemo } from "react";
import { useTable } from "@tanstack/react-table";
import type { GetInvoicesResponse } from "../../../types/invoice.js";
import { invoiceColumns } from "../../../constants/columns/userColumns.js";
import { features } from "../../../../configs/table-config.js";

function InvoiceTable({ data }: { data: GetInvoicesResponse }) {
  const memoizedData = useMemo(() => data.invoices, [data.invoices]);

  const table = useTable({
    features,
    data: memoizedData,
    columns: invoiceColumns,
  });
  return (
    <div className="w-full rounded-lg bg-white">
      <table className="w-full text-left text-sm">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-3">
                  {header.isPlaceholder ? null : (
                    <table.FlexRender header={header} />
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getAllCells().map((cell:any) => (
                <td key={cell.id} className="px-4 py-3">
                  <table.FlexRender cell={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default InvoiceTable;