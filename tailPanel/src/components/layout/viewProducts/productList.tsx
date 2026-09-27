import type { GetProductsResponse } from "../../../types/product.js";

function ProductList({data}:{data:GetProductsResponse}){
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  return data.products.map((product)=> {

      return(
         <div className="bg-white rounded-lg flex flex-col gap-3 p-3">
              <img className="h-50 w-full " src={`${imageUrl}${product.image}`} alt="product image" />
              <label htmlFor="name" className="font-semibold text-md">{product.name}</label>
         </div>
      )
  }
) 
}
export default ProductList;