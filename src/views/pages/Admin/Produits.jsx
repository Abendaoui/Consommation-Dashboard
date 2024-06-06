import React, { useState } from 'react'
import {
  AddButton,
  CustomDialog,
  DataTable,
  FormSearch,
  InputWrapper,
} from '../../../components/admin'
import { FormButton } from '../../../components/admin/subComponents'
import { produitHeaders } from '../../../assets/data/data'
const produitsBody = [
  { id: 1, label: 'Eau' },
  { id: 2, label: 'électricité' },
]
const Produits = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  const [produit, setProduit] = useState('')
  const onDelete = () => {}
  const onEdit = () => {}
  const handleSave = (ev) => {
    ev.preventDefault()
    console.log(produit)
  }
  return (
    <section className='mx-auto max-w-7xl'>
      <AddButton title={'Ajouter Un Produits'} handleOpen={handleOpen} />
      <article className='mt-10'>
        <div className='mb-8 flex justify-between items-center'>
          <FormSearch />
        </div>
        <div className='overflow-x-auto bg-white rounded-lg overflow-y-auto relative'>
          <DataTable
            headers={produitHeaders}
            body={produitsBody.map((row) => (
              <tr key={row.id} className='text-xs text-center'>
                <td className='border-dashed border-t border-gray-200'>
                  <span className='flex flex-col px-6 py-2 capitalize'>
                    {row.label}
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
                label='Produit'
                type='text'
                id='produit'
                name='produit'
                placeHolder='Eau'
                value={produit}
                onChange={(e) => setProduit(e.target.value)}
              />
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

export default Produits
