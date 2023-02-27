import React from 'react'

function PopularProducts() {
  return (
    <div>
      <h1 className='text-center font-Gyrloibold text-2xl'>POPULAR PRODUCTS NOW</h1>
      <p className='text-center font-Gyrloi'>Check out the most popular products that people are in love with now!</p>
      
    </div>
  )
}

export default PopularProducts


// Backend Code
// export const getServerSideProps: GetServerSideProps<Props> = async (
//   context
// ) => {
//   const categories = await fetchCategories();
//   const products = await fetchProducts();
//   const session = await getSession(context);

//   return {
//     props: {
//       categories,
//       products,
//       session,
//     },
//   };
// };
