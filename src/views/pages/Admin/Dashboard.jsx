import React, { useState } from 'react'
import {
  AddButton,
  CustomDialog,
  DataTable,
  FormSearch,
  InputWrapper,
} from '../../../components/admin'
import { FormButton } from '../../../components/admin/subComponents'
import { userHeaders } from '../../../assets/data/data'
const userData = [
  {
    id: 1,
    fullName: 'Admin Admin',
    email: 'admin@gmail.com',
    department: 'Département 1',
    delege: 'Eren Yeger',
    phone: '0641526984',
    status: 'admin',
  },
  {
    id: 2,
    fullName: 'John Doe',
    email: 'johndoe@gmail.com',
    department: 'Département 2',
    delege: 'Admin',
    phone: '0745851296',
    status: 'user',
  },
]
const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    department: '',
    delege: '',
    phone: '',
    status: '',
  })
  const onDelete = () => {}
  const onEdit = () => {}
  const handleSave = (ev) => {
    ev.preventDefault()
    console.log(user)
  }
  return (
    <section className='mx-auto max-w-7xl'>
      <AddButton title={'Ajouter Un Utilisateur'} handleOpen={handleOpen} />
      <article className='mt-10'>
        <div className='mb-8 flex justify-between items-center'>
          <FormSearch />
        </div>
        <div className='overflow-x-auto bg-white rounded-lg overflow-y-auto relative'>
          <DataTable
            headers={userHeaders}
            body={userData.map((row) => (
              <tr key={row.id} className='text-xs text-center'>
                <td className='border-dashed border-t border-gray-200'>
                  <div className='flex flex-col px-6 py-2'>
                    <span className='text-gray-700 flex items-center capitalize'>
                      {row.fullName}
                    </span>
                    <span className='text-gray-500 flex items-center'>
                      {row.email}
                    </span>
                  </div>
                </td>
                <td className='border-dashed border-t border-gray-200'>
                  <span className='flex flex-col px-6 py-2 capitalize'>
                    {row.department}
                  </span>
                </td>
                <td className='border-dashed border-t border-gray-200'>
                  <span className='flex flex-col px-6 py-2 capitalize'>
                    {row.delege}
                  </span>
                </td>
                <td className='border-dashed border-t border-gray-200'>
                  <span className='flex flex-col px-6 py-2'>{row.phone}</span>
                </td>
                <td className='border-dashed border-t border-gray-200 capitalize'>
                  <span
                    className={`flex flex-col rounded py-1 px-3 ${
                      row.status === 'user' ? 'bg-green-400' : 'bg-red-500'
                    }`}
                  >
                    {row.status}
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
                label='Nom et Prenom'
                type='text'
                id='fullname'
                name='fullname'
                placeHolder='John Doe'
                value={user.fullName}
                onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              />
              {/* Email */}
              <InputWrapper
                label='E-mail'
                type='email'
                id='email'
                name='email'
                placeHolder='Johndoe@gmail.com'
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <div className='flex items-center space-x-4 text-sm'>
                {/* Phone */}
                <InputWrapper
                  className='w-1/2'
                  label='Telephone'
                  type='tel'
                  id='phone'
                  name='phone'
                  placeHolder='06........'
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />
                {/* Delege Par */}
                <InputWrapper
                  className='w-1/2'
                  label='Délége Par'
                  type='text'
                  id='delege'
                  name='delege'
                  placeHolder=''
                  value={user.delege}
                  onChange={(e) => setUser({ ...user, delege: e.target.value })}
                />
              </div>
              <div className='flex items-center space-x-4 text-sm'>
                {/* Status */}
                <InputWrapper
                  className='w-1/2'
                  select={true}
                  label='Status'
                  id='status'
                  name='status'
                  value={user.status}
                  onChange={(e) => setUser({ ...user, status: e.target.value })}
                  options={[
                    { value: 0, label: 'User' },
                    { value: 1, label: 'Admin' },
                  ]}
                />
                {/* Departement */}
                <InputWrapper
                  className='w-1/2'
                  select={true}
                  label='Departement'
                  id='Departement'
                  name='Departement'
                  value={user.department}
                  onChange={(e) =>
                    setUser({ ...user, department: e.target.value })
                  }
                  options={[
                    { value: 'm', label: 'Marketing' },
                    { value: 'h', label: 'HR' },
                    { value: 'a', label: 'Analyse' },
                    { value: 'd', label: 'Developer' },
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

export default Dashboard
