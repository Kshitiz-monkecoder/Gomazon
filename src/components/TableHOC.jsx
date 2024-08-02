import React from 'react';
import { useTable, usePagination } from 'react-table';
import { FaArrowLeftLong, FaArrowRight } from 'react-icons/fa6';

const TableHOC = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Use page instead of rows for pagination
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  const getColumnClassNames = (column) => {
    if (column.Header === 'Name' || column.Header === 'Email address') {
      return 'text-left';
    }
    if (column.Header === 'Actions') {
      return 'text-center';
    }
    return 'text-center';
  };

  const getStatusClassNames = (status) => {
    if (status === 'Active') {
      return 'bg-green-100 text-green-500';
    } else if (status === 'Inactive') {
      return 'bg-red-100 text-red-500';
    }
    return '';
  };

  return (
    <div>
      <table {...getTableProps()} className="table-auto text-gray-600 w-full border-collapse">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className={`p-2 text-gray-400 ${getColumnClassNames(column)}`}
                >
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
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    className={`py-6 px-2 ${getColumnClassNames(cell.column)}`}
                  >
                    {cell.column.Header === 'Status' ? (
                      <div className={`py-1 text-sm font-semibold rounded-3xl ${getStatusClassNames(cell.value)}`}>
                        
                      {cell.render('Cell')}
                    </div>
                    ) : (
                      cell.render('Cell')
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pagination mt-4 flex justify-between items-center">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="bg-white text-gray-600 flex items-center cursor-pointer border-2 rounded-xl px-4 py-2 border-gray-300"
        >
          <FaArrowLeftLong className='mr-3' />
          Previous
        </button>
        <div className="flex items-center space-x-2">
          {pageOptions.map((pageIndexOption, i) => (
            <button
              key={i}
              onClick={() => gotoPage(pageIndexOption)}
              className={`px-2 ${pageIndex === pageIndexOption ? 'text-blue-500' : 'text-black'}`}
            >
              {pageIndexOption + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="bg-white text-gray-600  flex items-center border-2 rounded-xl cursor-pointer px-4 py-2 border-gray-300"
        >
          Next
          <FaArrowRight className='ml-3'  />
        </button>
      </div>
    </div>
  );
};

export default TableHOC;
