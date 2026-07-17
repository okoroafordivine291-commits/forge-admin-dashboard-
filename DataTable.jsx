import React from "react";

/**
 * Generic table. `columns` = [{ key, header, render? }]
 * `render(row)` is optional per-column custom cell renderer.
 */
export default function DataTable({ columns, rows, emptyMessage = "No results." }) {
  return (
    <table className="w-full text-[13px]">
      <thead>
        <tr className="border-b border-[#1C222B] text-left text-slate-500 text-[11px] uppercase tracking-wide font-mono">
          {columns.map((col) => (
            <th key={col.key} className="px-5 py-3 font-medium">{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-[#1C222B]">
        {rows.map((row, i) => (
          <tr key={row.id ?? i} className="hover:bg-[#1A2029]">
            {columns.map((col) => (
              <td key={col.key} className="px-5 py-3 align-top">
                {col.render ? col.render(row) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
        {rows.length === 0 && (
          <tr>
            <td colSpan={columns.length} className="px-5 py-10 text-center text-slate-500">
              {emptyMessage}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
