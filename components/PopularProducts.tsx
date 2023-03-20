import React from 'react'
import { GetServerSideProps } from 'next';
import { fetchCategories } from '../utils/fetchCategories';
import { fetchProducts } from '../utils/fetchProducts';
import Product from './Product';





interface Props {
  categories: Category[];
  products: Product[];
 // session: Session | null; 
}


const PopularProducts = ({ categories, products }: Props) => {
  console.log(products);

  const showProducts = (category: number) => {
    return products
      .filter((product) => product.category._ref === categories[category]._id.toString())
      .map((product) => <Product product={product} key={product._id} />); // filter products by category
  };


  return (
    <div>
      <h1>Popular Products</h1>
      <p>Check out the most popular products that people are in love with now!</p>
      {products?.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <img src={product.image.asset.url} alt={product.name} />
        </div>
      ))}
    </div>
  )
}

export default PopularProducts


// Backend Code
 export const getServerSideProps: GetServerSideProps<Props> = async (
   context
 ) => {
   const categories = await fetchCategories();
   const products = await fetchProducts();
  // const session = await getSession(context);
   

   return {
     props: {
       categories,
       products,
      // session,
     
     },
  };
 };
