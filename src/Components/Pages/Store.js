import React from 'react'
import Product from '../Products/Product'
import { useUserAuth } from '../../Context/UserAuthContext'

const Store = () => {
  const {user} = useUserAuth();
  return (
    <div>
      <div className='p-4 box mt-3 text-center'>Hi <br/> {user&&user.email}</div>
      <Product />
    </div>
  )
}

export default Store