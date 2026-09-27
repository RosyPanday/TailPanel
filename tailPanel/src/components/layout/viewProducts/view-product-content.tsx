import { ChevronRight, Divide, Home } from "lucide-react";
import { useGetProductsQuery } from "../../../hooks/product/use-get-products-query.js";
import ProductList from "./productList.js";

function ViewProductContent() {
  const {data,isPending,error}= useGetProductsQuery();
  return (
    <div className="flex flex-col gap-3 p-4">
      {/* heading */}
      <div className="flex items-center gap-3">
          <button><Home className="size-4 text-gray-600 cursor-pointer"></Home></button>
          <ChevronRight className="size-4 text-gray-600" ></ChevronRight>
          <button className=" text-gray-600 cursor-pointer ">E-Commerce</button>
          <ChevronRight className="size-4 text-gray-600" ></ChevronRight>
          <button className=" text-black font-semibold cursor-pointer">Products</button>
      </div>
      {/* products */}
      <div className="flex flex-col gap-3">
          {isPending && <div className="ml-100 mt-50 size-50 justify-center items-center rounded-full border-20 border-white/30 border-t-white animate-spin"/>}
          {error &&  <p className="text-red-900">something went wrong</p>}
          <div className="flex flex-wrap gap-4">
          {data && <ProductList data={data}/>}
          </div>
      </div>
    </div>
  );
}

export default ViewProductContent;