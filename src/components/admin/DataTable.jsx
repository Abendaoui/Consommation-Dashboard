import React from 'react'

const DataTable = ({ headers, body}) => {
  return (
    <table className='border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative'>
      <thead className='bg-gray-900'>
        <tr className='text-center'>
          {headers.map((header) => (
            <th key={header.id} className='py-2 px-3 sticky top-0'>
              <label className='sticky top-0 px-6 py-2 text-white font-bold tracking-wider uppercase text-xs text-nowrap'>
                {header.title}
              </label>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  )
}

export default DataTable
