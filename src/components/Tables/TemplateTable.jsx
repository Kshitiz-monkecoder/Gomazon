import React, { useState } from 'react';
import { useTable, usePagination } from 'react-table';

const TemplateTable = ({ columns, data }) => {
  const [modalVariables, setModalVariables] = useState(null);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const handleShowMore = (variables) => {
    setModalVariables(variables);
  };

  const handleCloseModal = () => {
    setModalVariables(null);
  };

  return (
    <div className="overflow-x-auto relative">
      <table {...getTableProps()} className="table-auto w-full border-collapse" style={{ borderSpacing: '0 10px' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()} className="p-4 text-sm font-medium text-gray-500 text-left">
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="bg-white">
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()} className="p-4 text-left border-gray-200">
                    {cell.column.Header === 'Variables Used' ? (
                      <>
                        {cell.value.slice(0, 3).map((variable, index) => (
                          <span key={index} className="inline-block text-sm text-white bg-blue-600 px-3 py-1.5 mr-5 rounded">
                            {variable}
                          </span>
                        ))}
                        {cell.value.length > 3 && (
                          <span
                            className="inline-block text-black px-2 py-1 mr-2 rounded cursor-pointer"
                            onClick={() => handleShowMore(cell.value)}
                          >
                            +{cell.value.length - 3}
                          </span>
                        )}
                      </>
                    ) : (
                      <>
                        {cell.column.Header === 'Title' && (
                          <>
                            <div className="text-base">{cell.row.original.title}</div>
                            <div className="text-sm text-gray-500">{cell.row.original.titleSubheading}</div>
                          </>
                        )}
                        {cell.column.Header === 'Body' && (
                          <>
                            <div className="text-base">{cell.row.original.body}</div>
                            <div className="text-sm text-gray-500">{cell.row.original.bodySubheading}</div>
                          </>
                        )}
                      </>
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {modalVariables && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <h3 className="text-lg font-medium mb-4">All Variables</h3>
            <ul className="space-y-2">
              {modalVariables.map((variable, index) => (
                <li key={index} className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  {variable}
                </li>
              ))}
            </ul>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateTable;
