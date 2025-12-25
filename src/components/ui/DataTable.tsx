interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
}

function DataTable<T extends Record<string, unknown>>({ columns, data, emptyMessage = "No data available" }: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="glass-card rounded-2xl p-12 text-center">
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-primary/5 border-b border-border">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left text-sm font-semibold text-foreground"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {data.map((item, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-muted/30 transition-colors">
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 text-sm text-foreground">
                    {column.render
                      ? column.render(item)
                      : String(item[column.key as keyof T] ?? '-')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
