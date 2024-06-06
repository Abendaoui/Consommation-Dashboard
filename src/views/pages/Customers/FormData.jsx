import React, { useState } from 'react'
import { InputWrapper } from '../../../components/admin'
import { FormButton } from '../../../components/admin/subComponents'
const FormData = () => {
  const [form, setForm] = useState({
    operator: '',
    product: '',
    year: '',
    month: '',
    trimester: '',
    start: '',
    fin: '',
    consommation: '',
    department: '',
    region: '',
    observation: '',
  })
  const handleSave = (ev) => {
    ev.preventDefault()
    console.log(form)
  }
  return (
    <section>
      <form className='max-w-2xl mx-auto mt-10 bg-white px-6 py-4 rounded-lg shadow-md'>
        <div className='divide-y divide-gray-200'>
          {/* Data */}
          <div className='py-8 text-sm leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
            {/* Operator & Product */}
            <div className='flex items-center space-x-4 text-sm'>
              {/* Operateur */}
              <InputWrapper
                className='w-1/2'
                select={true}
                label='Operateur'
                id='operateur'
                name='operateur'
                value={form.operator}
                onChange={(e) => setForm({ ...form, operator: e.target.value })}
                options={[
                  { value: '', label: 'Choisir' },
                  { value: 'redal', label: 'Redal' },
                  { value: 'lydec', label: 'Lydec' },
                ]}
              />
              {/* Produit */}
              <InputWrapper
                className='w-1/2'
                select={true}
                label='Produit'
                id='product'
                name='product'
                value={form.product}
                onChange={(e) => setForm({ ...form, product: e.target.value })}
                options={[
                  { value: '', label: 'Choisir' },
                  { value: 'eau', label: 'Eau' },
                  { value: 'electricite', label: 'Electricite' },
                ]}
              />
            </div>
            {/* Year & Month & Trimister */}
            <div className='flex items-center space-x-4 text-sm'>
              {/* Year */}
              <InputWrapper
                className='w-1/4'
                select={true}
                label='Année'
                id='year'
                name='year'
                value={form.year}
                onChange={(e) => setForm({ ...form, year: e.target.value })}
                options={[
                  { value: '', label: 'Choisir' },
                  { value: 2022, label: 2022 },
                  { value: 2023, label: 2023 },
                  { value: 2024, label: 2024 },
                  { value: 2025, label: 2025 },
                ]}
              />
              {/* Month */}
              <InputWrapper
                className='w-1/4'
                select={true}
                label='Mois'
                id='month'
                name='month'
                value={form.month}
                onChange={(e) => setForm({ ...form, month: e.target.value })}
                options={[
                  { value: '', label: 'Choisir' },
                  { value: 'janvier', label: 'Janvier' },
                  { value: 'février', label: 'Février' },
                  { value: 'mars', label: 'Mars' },
                  { value: 'avril', label: 'Avril' },
                  { value: 'mai', label: 'Mai' },
                  { value: 'juin', label: 'Juin' },
                  { value: 'juillet', label: 'Juillet' },
                  { value: 'août', label: 'Août' },
                  { value: 'septembre', label: 'Septembre' },
                  { value: 'octobre', label: 'Octobre' },
                  { value: 'novembre', label: 'Novembre' },
                  { value: 'décembre', label: 'Décembre' },
                ]}
              />
              <InputWrapper
                className='w-1/2'
                label='Trimester'
                type='text'
                id='trimester'
                name='trimester'
                placeHolder=''
                value={form.trimester}
                onChange={(e) =>
                  setForm({ ...form, trimester: e.target.value })
                }
              />
            </div>
            {/* Date */}
            <div className='flex items-center space-x-4 text-sm'>
              <InputWrapper
                className='w-1/2'
                label='Debut Periode'
                type='date'
                id='debut'
                name='debut'
                placeHolder=''
                value={form.start}
                onChange={(e) => setForm({ ...form, start: e.target.value })}
              />
              <InputWrapper
                className='w-1/2'
                label='Fin Periode'
                type='date'
                id='fin'
                name='fin'
                placeHolder=''
                value={form.fin}
                onChange={(e) => setForm({ ...form, fin: e.target.value })}
              />
            </div>
            {/* Consommation & Departement & Region */}
            <div className='flex items-center space-x-4 text-sm'>
              <InputWrapper
                className='w-1/2'
                label='Consommation'
                type='text'
                id='consommation'
                name='consommation'
                placeHolder=''
                value={form.consommation}
                onChange={(e) =>
                  setForm({ ...form, consommation: e.target.value })
                }
              />
              {/* Year */}
              <InputWrapper
                className='w-1/4'
                select={true}
                label='Departement'
                id='dep'
                name='dep'
                value={form.department}
                onChange={(e) =>
                  setForm({ ...form, department: e.target.value })
                }
                options={[
                  { value: '', label: 'Choisir' },
                  { value: 'tangier', label: 'Tangier' },
                  { value: 'fés', label: 'Fés' },
                  { value: 'rabat', label: 'Rabat' },
                  { value: 'salé', label: 'Salé' },
                ]}
              />
              {/* Month */}
              <InputWrapper
                className='w-1/4'
                select={true}
                label='Région'
                id='region'
                name='region'
                value={form.region}
                onChange={(e) => setForm({ ...form, region: e.target.value })}
                options={[
                  { value: '', label: 'Choisir' },
                  { value: 1, label: 'Oriental' },
                  { value: 3, label: 'Fés-Mekéns' },
                  { value: 5, label: 'Rabat-Salé-Kénitra' },
                  { value: 8, label: 'Casablanca-State' },
                ]}
              />
            </div>
            <div className='flex flex-col text-sm'>
              <label htmlFor='observation' className='leading-loose mb-2'>
                Observation
              </label>
              <textarea
                className='px-2 py-2 border-2 focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 resize-none'
                name='observation'
                id='observation'
                rows='5'
                value={form.observation}
                onChange={(e) =>
                  setForm({ ...form, observation: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          {/* Buttons */}
          <div className='pt-4 flex items-center space-x-4'>
            <FormButton
              type='submit'
              title='Ajouter'
              className='bg-gray-800'
              onClick={handleSave}
            />
          </div>
        </div>
      </form>
    </section>
  )
}

export default FormData
