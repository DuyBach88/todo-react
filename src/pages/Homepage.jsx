import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
function Homepage() {
    const navigation = useNavigate();
  return (
    <>
    <button
      onClick={() => {
        navigation('/products');
      }}
    >
      Go to Product page
    </button>

    <Link to='/adminlayout'>Go to admin layout</Link>
  </>
  )
}

export default Homepage
