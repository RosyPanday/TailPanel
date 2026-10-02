import type { GetProductsResponse } from "../../../types/product.js";

function ProductList({ data }: { data: GetProductsResponse }) {
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  return data.products.map((product) => {
    let statusStyle="";
    if(product.status==="IN_STOCK"){
         statusStyle="bg-green-100 text-green-700";
    }else if(product.status==="OUT_OF_STOCK"){
         statusStyle="bg-red-100 text-red-700";
    } else if(product.status==="LOW_STOCK"){
         statusStyle="bg-amber-100 text-amber-700";
    }
    return (
      <div className="bg-white rounded-lg flex flex-col gap-3 p-3 mt-3 w-70 flex-1" key={product.id}>
        {/* image */}
        <div className="flex justify-start">
          <img
            className="h-60 object-cover rounded-lg"
            src={`${imageUrl}${product.image}`}
            alt="product image"
          />
        </div>
        <label htmlFor="name" className="font-semibold text-md">
          {product.name}
        </label>
        <div className="flex gap-3 text-gray-600 text-xs">
            <label >{product.category}</label>
            <label >{product.sku}</label>
        </div>
        <div className="flex justify-between items-center">
           <label className="text-blue-600 font-semibold text-2xl">{product.price}</label>
           <label className={`${statusStyle} p-1 rounded-lg text-xs`}> {product.status}</label>
        </div>
        <div className="flex justify-between items-center">
           <label className="text-gray-600 text-sm">Stock:</label>
           <label className="text-sm"> {product.quantity} units</label>
        </div>
        <div className="flex justify-between items-center">
           <label className="text-gray-600 text-sm">Price:</label>
           <label className="text-sm"> {product.price}</label>
        </div>
      </div>
    );
  });
}
export default ProductList;
