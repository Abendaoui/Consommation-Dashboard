import React, { useState } from 'react'
import { DataTable, DownloadButton } from '../../../components/admin'
import { excelHeaders } from '../../../assets/data/data'
import ExcelJS from 'exceljs'
const excelBody = [
  {
    id: 1,
    eau: 'Casa',
    DElEGAT_CREDIT: '//',
    DOTAION_DEFINITIVE: '//',
    CONSOMAT: '66951',
    '1 TRI': '15411,00',
    '2 TRI': '15455,00',
    '3 TRI': '14947,00',
    '4 TRI': '//',
    TOTAL_DPCI: '45813,00',
    CAISE_REGION: '//',
    OBSERVATION: 'lorem lorem ipsum lorem ipsum',
  },
]
const Excels = () => {
  const handleDownload = () => {
    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('Sheet 1')

    // Add headers
    worksheet.addRow(Object.keys(excelBody[0]))

    // Add data
    excelBody.forEach((row) => {
      worksheet.addRow(Object.values(row))
    })

    // Generate blob
    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      })
      const url = URL.createObjectURL(blob)

      // Create download link
      const a = document.createElement('a')
      a.href = url
      a.download = 'download.xlsx'
      a.click()

      URL.revokeObjectURL(url)
    })
  }
  return (
    <section className='mx-auto max-w-7xl'>
      <DownloadButton title={"TELECHARGER L'EXCEL"} onClick={handleDownload} />
      <article className='mt-10'>
        <div className='overflow-x-auto bg-white rounded-lg overflow-y-auto relative'>
          <DataTable
            headers={excelHeaders}
            body={excelBody.map((row) => {
              return (
                <tr key={row.id} className='text-xs text-center'>
                  <td className='border-dashed border-t border-gray-200'>
                    <span className='flex flex-col px-6 py-2 capitalize'>
                      {row.eau}
                    </span>
                  </td>
                  <td className='border-dashed border-t border-gray-200'>
                    <span className='flex flex-col px-6 py-2 capitalize'>
                      {row.DElEGAT_CREDIT}
                    </span>
                  </td>
                  <td className='border-dashed border-t border-gray-200'>
                    <span className='flex flex-col px-6 py-2 capitalize'>
                      {row.DOTAION_DEFINITIVE}
                    </span>
                  </td>
                  <td className='border-dashed border-t border-gray-200'>
                    <span className='flex flex-col px-6 py-2 capitalize'>
                      {row.CONSOMAT}
                    </span>
                  </td>
                  <td className='border-dashed border-t border-gray-200'>
                    <span className='flex flex-col px-6 py-2 capitalize'>
                      {row['1 TRI']}
                    </span>
                  </td>
                  <td className='border-dashed border-t border-gray-200'>
                    <span className='flex flex-col px-6 py-2 capitalize'>
                      {row['2 TRI']}
                    </span>
                  </td>
                  <td className='border-dashed border-t border-gray-200'>
                    <span className='flex flex-col px-6 py-2 capitalize'>
                      {row['3 TRI']}
                    </span>
                  </td>
                  <td className='border-dashed border-t border-gray-200'>
                    <span className='flex flex-col px-6 py-2 capitalize'>
                      {row['4 TRI']}
                    </span>
                  </td>
                  <td className='border-dashed border-t border-gray-200'>
                    <span className='flex flex-col px-6 py-2 capitalize'>
                      {row.TOTAL_DPCI}
                    </span>
                  </td>
                  <td className='border-dashed border-t border-gray-200'>
                    <span className='flex flex-col px-6 py-2 capitalize'>
                      {row.CAISE_REGION}
                    </span>
                  </td>
                  <td className='border-dashed border-t border-gray-200'>
                    <span className='flex flex-col px-6 py-2 capitalize'>
                      {row.OBSERVATION}
                    </span>
                  </td>
                </tr>
              )
            })}
          />
        </div>
      </article>
    </section>
  )
}

export default Excels
