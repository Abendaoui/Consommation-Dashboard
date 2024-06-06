import React, { useState, useEffect } from 'react'
import Chart from 'chart.js/auto' // Importing chart.js library
import { InputWrapper } from '../../../components/admin'
import { tableDataBody } from '../../../assets/data/data'

const GraphData = () => {
   const [filters, setFilters] = useState({
     department: '',
     product: '',
     year: '',
   })

   const handleFilterChange = (e) => {
     const { name, value } = e.target
     setFilters((prevFilters) => ({
       ...prevFilters,
       [name]: value,
     }))
   }

   const filteredData = tableDataBody.filter((row) => {
     return (
       (!filters.department ||
         row.department.toLowerCase() === filters.department.toLowerCase()) &&
       (!filters.product ||
         row.product.toLowerCase() === filters.product.toLowerCase()) &&
       (!filters.year || row.year.toString() === filters.year)
     )
   })

   const chartData = {
     labels: filteredData.map((row) => row.month),
     datasets: [
       {
         label: 'Montant',
         data: filteredData.map((row) => row.montant),
         fill: false,
         backgroundColor: 'rgba(75, 192, 192, 0.2)',
         borderColor: '#1f2937',
         tension: 0.1,
         pointBackgroundColor: '#4A5568',
         borderWidth: 3,
         pointBorderWidth: 4,
         pointHoverRadius: 6,
         pointHoverBorderWidth: 8,
         pointHoverBorderColor: 'rgba(74, 85, 104, 0.2)',
       },
     ],
   }

   const chartOptions = {
     plugins: {
       legend: {
         display: false,
       },
     },
     scales: {
       y: {
         grid: {
           display: false,
         },
         display: false,
       },
     },
   }

   useEffect(() => {
     const ctx = document.getElementById('chart').getContext('2d')
     const newChartInstance = new Chart(ctx, {
       type: 'line',
       data: chartData,
       options: chartOptions,
     })

     return () => {
       newChartInstance.destroy()
     }
   }, [chartData])
  return (
    <section className='mx-auto max-w-7xl'>
      <div className='w-11/12 lg:w-2/3 mx-auto'>
        <div className='flex flex-col justify-between'>
          <form className='flex items-center space-x-4 mt-4 mx-auto w-3/4'>
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
                { value: 'électricité', label: 'Électricité' },
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
                { value: '2022', label: '2022' },
                { value: '2023', label: '2023' },
                { value: '2024', label: '2024' },
              ]}
            />
          </form>
          <div className='mt-6'>
            <canvas id='chart' width='400' height='200'></canvas>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GraphData
