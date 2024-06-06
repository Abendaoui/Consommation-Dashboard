import React, { useState } from 'react'
import {
  AddButton,
  CustomDialog,
  DataTable,
  FormSearch,
  InputWrapper,
} from '../../../components/admin'
import { FormButton } from '../../../components/admin/subComponents'
import { consommationHeaders } from '../../../assets/data/data'
const consommationData = [
  {
    id: 1,
    annee: 2024,
    region: 'Rabat-Salé-Kenitra',
    credit: 1500.0,
    dota: 10.0,
    commission: 1.2,
    produit: 'Eau',
  },
  {
    id: 2,
    annee: 2024,
    region: 'Fés-Meknés',
    credit: 800.0,
    dota: 20.0,
    commission: 1.5,
    produit: 'Electricite',
  },
  {
    id: 3,
    annee: 2024,
    region: 'Casablanca-Settate',
    credit: 100.0,
    dota: 10.0,
    commission: 1.8,
    produit: 'Eau',
  },
]

const Consommations = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  const [consom, setConsom] = useState({
    year: '',
    region: '',
    product: '',
    credit: '',
    commission: '',
    dota: '',
  })
  const onDelete = () => {}
  const onEdit = () => {}
  const handleSave = (ev) => {
    ev.preventDefault()
    console.log(consom)
  }
  return (
    <section className='mx-auto max-w-7xl'>
      <AddButton title={'Ajouter Une Consommation'} handleOpen={handleOpen} />
      <article className='mt-10'>
        <div className='mb-8 flex justify-between items-center'>
          <FormSearch />
        </div>
        <div className='overflow-x-auto bg-white rounded-lg overflow-y-auto relative'>
          <DataTable
            headers={consommationHeaders}
            body={consommationData.map((row) => (
              <tr key={row.id} className='text-xs text-center'>
                <td className='border-dashed border-t border-gray-200'>
                  <span className='flex flex-col px-6 py-2 capitalize'>
                    {row.annee}
                  </span>
                </td>
                <td className='border-dashed border-t border-gray-200'>
                  <span className='flex flex-col px-6 py-2 capitalize'>
                    {row.region}
                  </span>
                </td>
                <td className='border-dashed border-t border-gray-200'>
                  <span className='flex flex-col px-6 py-2'>{row.credit}</span>
                </td>
                <td className='border-dashed border-t border-gray-200'>
                  <span className='flex flex-col px-6 py-2'>{row.dota}</span>
                </td>
                <td className='border-dashed border-t border-gray-200'>
                  <span className='flex flex-col px-6 py-2'>
                    {row.commission}
                  </span>
                </td>
                <td className='border-dashed border-t border-gray-200'>
                  <span className='flex flex-col px-6 py-2'>{row.produit}</span>
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
              <div className='flex items-center space-x-4 text-sm'>
                <InputWrapper
                  className='w-1/2'
                  select={true}
                  label='Année'
                  id='année'
                  name='année'
                  value={consom.year}
                  onChange={(e) =>
                    setConsom({ ...consom, year: e.target.value })
                  }
                  options={[
                    { value: 2021, label: 2021 },
                    { value: 2022, label: 2022 },
                    { value: 2023, label: 2023 },
                    { value: 2024, label: 2024 },
                  ]}
                />
                <InputWrapper
                  className='w-1/2'
                  select={true}
                  label='Région'
                  id='region'
                  name='region'
                  value={consom.region}
                  onChange={(e) =>
                    setConsom({ ...consom, region: e.target.value })
                  }
                  options={[
                    { value: 'm', label: 'Marketing' },
                    { value: 'h', label: 'HR' },
                    { value: 'a', label: 'Analyse' },
                    { value: 'd', label: 'Developer' },
                  ]}
                />
                <InputWrapper
                  className='w-1/2'
                  select={true}
                  label='Produit'
                  id='produit'
                  name='produit'
                  value={consom.product}
                  onChange={(e) =>
                    setConsom({ ...consom, product: e.target.value })
                  }
                  options={[
                    { value: 'eau', label: 'Eau' },
                    { value: 'electricite', label: 'Electricite' },
                  ]}
                />
              </div>
              <InputWrapper
                label='Département Crédit'
                type='text'
                id='Crédit'
                name='Crédit'
                placeHolder='1500.00'
                value={consom.credit}
                onChange={(e) =>
                  setConsom({ ...consom, credit: e.target.value })
                }
              />
              <div className='flex items-center space-x-4 text-sm'>
                <InputWrapper
                  className='w-1/2'
                  label='Commission'
                  type='text'
                  id='commission'
                  name='commission'
                  placeHolder='1.5'
                  value={consom.commission}
                  onChange={(e) =>
                    setConsom({ ...consom, commission: e.target.value })
                  }
                />

                <InputWrapper
                  className='w-1/2'
                  label='Dota Dévinitive'
                  type='text'
                  id='dota'
                  name='dota'
                  placeHolder='10.00'
                  value={consom.dota}
                  onChange={(e) =>
                    setConsom({ ...consom, dota: e.target.value })
                  }
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

export default Consommations
