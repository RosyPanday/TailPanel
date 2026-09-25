import { Home, ChevronRight } from "lucide-react";
import { useAddProducts } from "../../../hooks/use-add-product.js";
import ProductInformation from "./product-information.js";
import PricingAndInventory from "./pricing-and-inventory.js";
import ProductImage from "./product-image.js";
import Action from "./actions.js";
import ProductStatus from "./product-status.js";

function AddProductContent() {
  const { register, handleSubmit, onSubmitEvent, errors } = useAddProducts();
  return (
    <div className="flex flex-col gap-4 m-4">
      {/* top */}
      <div className="flex gap-3 items-center">
        <div>
          {" "}
          <Home className="size-5 text-gray-600"> </Home>
        </div>
        <div>
          <ChevronRight className="size-5 text-gray-600"></ChevronRight>
        </div>
        <div className="text-gray-600">Products</div>
        <div>
          <ChevronRight className="size-5 text-gray-600"></ChevronRight>
        </div>
        <div className="font-semibold">Add Product</div>
      </div>
      {/* heading */}
      <div>
        <h3 className="font-bold text-3xl">Add a New Product</h3>
      </div>
      <div className="text-gray-600 text-md">
        Create a new product and add it to your inventory.
      </div>
      {/* form */}
      <form onSubmit={handleSubmit(onSubmitEvent)}>
        <div className="flex gap-6 w-full">
          <div className="flex flex-1  flex-col gap-4">
            <ProductInformation register={register} errors={errors} />
            <PricingAndInventory register={register} errors={errors} />
          </div>
          <div className="flex flex-col gap-5">
             <ProductImage register={register} errors={errors}/>
             <Action />
             <ProductStatus />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProductContent;
