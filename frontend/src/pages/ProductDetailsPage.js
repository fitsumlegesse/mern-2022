import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
  //Line 1,6-7
    // Here we are using the useParams hook from react-router-dom
    // at line 2 to get the id passed in the url /product-details/:id
    // line 8 destructures it and line 9 prints it out in the console  
    const { id } = useParams();
    console.log(id)
  return (
    <div>ProductDetailsPage</div>
  )
}

export default ProductDetailsPage