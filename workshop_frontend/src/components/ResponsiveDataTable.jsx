import React from 'react';

const ResponsiveDataTable = ({ columns, data, keyExtractor }) => {
  if (!data || data.length === 0) {
    return (
      <div className="p-8 text-center text-slate-500 bg-white rounded-xl border border-slate-100">
        No records found.
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Mobile grid view (cards) */}
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {data.map((row) => (
          <div key={keyExtractor(row)} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 space-y-3">
            {columns.map((col, idx) => (
              <div key={`${keyExtractor(row)}-${col.accessor}`} className="flex justify-between items-start">
                <span className="text-sm font-medium text-slate-500 w-1/3 shrink-0">{col.header}</span>
                <span className="text-base text-slate-900 font-medium text-right break-words">{row[col.accessor]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Desktop table view */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-100">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              {columns.map((col) => (
                <th key={col.accessor} className="py-4 px-6 text-sm font-semibold text-slate-600 uppercase tracking-wider">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row) => (
              <tr key={keyExtractor(row)} className="hover:bg-slate-50 transition-colors">
                {columns.map((col) => (
                  <td key={`${keyExtractor(row)}-${col.accessor}`} className="py-4 px-6 text-base text-slate-800">
                    {col.accessor === 'status' ? (
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800`}>
                        {row[col.accessor]}
                      </span>
                    ) : (
                      row[col.accessor]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponsiveDataTable;
