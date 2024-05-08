import React from 'react'
import { useNavigate } from 'react-router-dom';
function ProductPage() {
    const navigation = useNavigate();
  return (
    <button
    onClick={() => {
      navigation('/');
    }}
  >
    Back to Home
  </button>
  )
}

export default ProductPage
