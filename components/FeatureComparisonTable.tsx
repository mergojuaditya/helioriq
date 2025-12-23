interface FeatureComparisonTableProps {
  headers: string[];
  rows: { feature: string; values: string[] }[];
}

export function FeatureComparisonTable({ headers, rows }: FeatureComparisonTableProps) {
  return (
    <div className="overflow-x-auto border border-gray-100 rounded-lg shadow-soft bg-white">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-50 text-gray-900 font-semibold">
          <tr>
            <th className="px-4 py-3">Feature</th>
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-center">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-gray-100">
              <td className="px-4 py-3">{row.feature}</td>
              {row.values.map((val, j) => (
                <td key={j} className="px-4 py-3 text-center">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
