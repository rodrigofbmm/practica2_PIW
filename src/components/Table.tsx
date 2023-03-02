import React, { useState } from "react";


interface ITableRow {
  id: number;
  nombre: string;
  años: number;
}

const Table = () => {
  const [rows, setRows] = useState<ITableRow[]>([
    { id: 1, nombre: "alberto", años: 30 },
    { id: 2, nombre: "carlos", años: 25 },
  ]);

  const addRow = () => {
    const newRow: ITableRow = { id: rows.length + 1, nombre: "", años: 0 };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id: number) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };

  return (
    <>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>nombre</th>
            <th>años</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <input type="text" value={row.nombre} onChange={(e) =>
                    setRows(
                      rows.map((r) =>
                        r.id === row.id ? { ...r, nombre: e.target.value } : r
                      )
                    )
                  }
                />
              </td>
              <td>
                <input type="number" value={row.años} onChange={(e) =>
                    setRows(
                      rows.map((r) =>
                        r.id === row.id ? { ...r, años: Number(e.target.value) } : r
                      )
                    )
                  }
                />
              </td>
              <td>
                <button onClick={() => deleteRow(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <button onClick={addRow}>añadir </button>
    </>
  );
};

export default Table;
