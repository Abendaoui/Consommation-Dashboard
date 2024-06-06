import React, { useState } from 'react'
import {
  AddButton,
  CustomDialog,
  DataTable,
  FormSearch,
  InputWrapper,
} from '../../../components/admin'
import { FormButton } from '../../../components/admin/subComponents'
import { depHeaders } from '../../../assets/data/data'
const depBody = [
  { id: 1, department: 'Tangier', region: 'Oriental' },
  { id: 2, department: 'Al Hoceima', region: 'Oriental' },
  { id: 3, department: 'Oujda', region: 'Fés-Mekéns' },
  { id: 4, department: 'Fés', region: 'Fés-Mekéns' },
  { id: 5, department: 'Rabat', region: 'Rabat-Salé-Kénitra' },
  { id: 6, department: 'Salé', region: 'Rabat-Salé-Kénitra' },
  { id: 7, department: 'Kénitra', region: 'Rabat-Salé-Kénitra' },
  { id: 8, department: 'Casa', region: 'Casablanca-State' },
]
const Departments = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  const [dep, setDep] = useState({
    department: '',
    region: '',
  })
  const onDelete = () => {}
  const onEdit = () => {}
  const handleSave = (ev) => {
    ev.preventDefault()
    console.log(dep)
  }
  return (
    <section className='mx-auto max-w-7xl'>
      <AddButton title={'Ajouter Un Département'} handleOpen={handleOpen} />
      <article className='mt-10'>
        <div className='mb-8 flex justify-between items-center'>
          <FormSearch />
        </div>
        <div className='overflow-x-auto bg-white rounded-lg overflow-y-auto relative'>
          <DataTable
            headers={depHeaders}
            body={depBody.map((row) => (
              <tr key={row.id} className='text-xs text-center'>
                <td className='border-dashed border-t border-gray-200'>
                  <span className='flex flex-col px-6 py-2 capitalize'>
                    {row.department}
                  </span>
                </td>
                <td className='border-dashed border-t border-gray-200'>
                  <span className='flex flex-col px-6 py-2 capitalize'>
                    {row.region}
                  </span>
                </td>
                <td className='border-dashed border-t border-gray-200'>
                  <div className='flex items-center justify-center gap-3'>
                    <button onClick={() => onEdit(row.id)}>
                      <i className='material-icons-outlined text-lg text-yellow-300'>
                        edit
                      </i>
                    </button>
                    <button onClick={() => onDelete(row.id)}>
                      <i className='material-icons-round text-lg text-red-500'>
                        delete_outline
                      </i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </div>
      </article>
      <CustomDialog open={open} handleOpen={handleOpen}>
        <form className='max-w-md mx-auto'>
          <div className='divide-y divide-gray-200'>
            {/* Data */}
            <div className='py-8 text-sm leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
              {/* FullName */}
              <InputWrapper
                label='Département'
                type='text'
                id='Département'
                name='Département'
                placeHolder='Tangier'
                value={dep.department}
                onChange={(e) => setDep({ ...dep, department: e.target.value })}
              />
              <div className='flex items-center space-x-4 text-sm'>
                {/* Departement */}
                <InputWrapper
                  className='w-full'
                  select={true}
                  label='Departement'
                  id='Departement'
                  name='Departement'
                  value={dep.region}
                  onChange={(e) => setDep({ ...dep, region: e.target.value })}
                  options={[
                    { value: 'o', label: 'Oriental' },
                    { value: 'f', label: 'Fés-Mekéns' },
                    { value: 'r', label: 'Rabat-Salé-Kénitra' },
                    { value: 'c', label: 'Casablanca-State' },
                  ]}
                />
              </div>
            </div>
            {/* Buttons */}
            <div className='pt-4 flex items-center space-x-4'>
              <FormButton
                type={'button'}
                onClick={handleOpen}
                icon={
                  <svg
                    className='w-6 h-6 mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                }
                title={'Annuler'}
                className='bg-gray-700'
              />
              <FormButton
                type='submit'
                title='Ajouter'
                className='bg-gray-800'
                onClick={handleSave}
              />
            </div>
          </div>
        </form>
      </CustomDialog>
    </section>
  )
}

export default Departments
