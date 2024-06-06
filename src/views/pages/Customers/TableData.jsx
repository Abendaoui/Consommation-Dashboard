import React, { useState } from 'react'
import { DataTable, InputWrapper } from '../../../components/admin'
import { tableDataHeaders, tableDataBody } from '../../../assets/data/data'
import { convertDate } from '../../../utils/dateConverter'

const TableData = () => {
  // State for filters
  const [filters, setFilters] = useState({
    department: '',
    product: '',
    year: '',
  })

  // Update filter state on change
  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }))
  }

  // Filter data based on filters
  const filteredData = tableDataBody.filter((row) => {
    return (
      (!filters.department || row.department === filters.department) &&
      (!filters.product || row.product === filters.product) &&
      (!filters.year || row.year.toString() === filters.year)
    )
  })
  return (
    <section className='mx-auto max-w-7xl'>
      <form className='max-w-md mx-auto'>
        <div className='divide-y divide-gray-200'>
          <div className='py-8 text-sm leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
            <div className='flex items-center space-x-4 text-sm'>
              <InputWrapper
                className='w-1/2'
                select={true}
                label='Produit'
                id='product'
                name='product'
                value={filters.product}
                onChange={handleFilterChange}
                options={[
                  { value: '', label: 'All' },
                  { value: 'eau', label: 'Eau' },
                  { value: 'électricité', label: 'électricité' },
                ]}
              />
              <InputWrapper
                className='w-1/2'
                select={true}
                label='Année'
                id='year'
                name='year'
                value={filters.year}
                onChange={handleFilterChange}
                options={[
                  { value: '', label: 'All' },
                  { value: '2018', label: 2018 },
                  { value: '2019', label: 2019 },
                  { value: '2020', label: 2020 },
                  { value: '2021', label: 2021 },
                  { value: '2022', label: 2022 },
                  { value: '2023', label: 2023 },
                  { value: '2024', label: 2024 },
                ]}
              />
            </div>
          </div>
        </div>
      </form>
      <article className='mt-10 max-w-7xl mx-auto px-3 md:px-0'>
        <div className='overflow-x-auto bg-white rounded-lg overflow-y-auto relative'>
          <DataTable
            headers={tableDataHeaders}
            body={
              filteredData.length > 0 ? (
                filteredData.map((row) => (
                  <tr key={row.id} className='text-xs text-center'>
                    <td className='border-dashed border-t border-gray-200'>
                      <span className='flex flex-col px-6 py-2 capitalize'>
                        {row.month}
                      </span>
                    </td>
                    <td className='border-dashed border-t border-gray-200'>
                      <span className='flex flex-col px-6 py-2 capitalize'>
                        {row.montant}
                      </span>
                    </td>
                    <td className='border-dashed border-t border-gray-200'>
                      <span className='flex flex-col px-6 py-2'>
                        {row.year}
                      </span>
                    </td>
                    <td className='border-dashed border-t border-gray-200'>
                      <span className='flex flex-col px-6 py-2 capitalize'>
                        {row.product}
                      </span>
                    </td>
                    <td className='border-dashed border-t border-gray-200'>
                      <span className='flex flex-col px-6 py-2 capitalize'>
                        {convertDate(row.start)}
                      </span>
                    </td>
                    <td className='border-dashed border-t border-gray-200'>
                      <span className='flex flex-col px-6 py-2'>
                        {convertDate(row.fin)}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className='text-lg text-center'>
                  <td
                    colSpan={8}
                    className='border-dashed border-t border-gray-200'
                  >
                    <span className='flex flex-col px-6 py-2'>
                      Aucune Donnée Disponible
                    </span>
                  </td>
                </tr>
              )
            }
          />
        </div>
      </article>
    </section>
  )
}

export default TableData
