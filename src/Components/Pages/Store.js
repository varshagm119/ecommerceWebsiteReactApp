import React from 'react'
import Product from '../Products/Product'
import { useUserAuth } from '../../Context/UserAuthContext'
import { Link } from 'react-router-dom'

const Store = () => {
  const {user} = useUserAuth();
  const idToken = user.uid
  // console.log(idToken);
  // console.log(user)
  return (
    <div>
      <div className='p-4 box mt-3 text-center'>Hi <br/> {user&&user.email}</div>
      <div className="p-4 box mt-3 text-center">
        <Link to='/updatepwd'>Change Password</Link>
      </div>
      <Product />
    </div>
  )
}

export default Store