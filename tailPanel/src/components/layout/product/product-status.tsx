function ProductStatus(){
    const date = new Date().toISOString().split('T')[0];
    return(
        <div className="bg-white rounded-lg p-4 flex flex-col gap-3">
            <div className="font-semibold text-2xl">Product Status</div>
            <div className="flex justify-between">
                 <div>Status:</div>
                 <div>Draft</div>
            </div>
             <div className="flex justify-between">
                 <div>Visibility:</div>
                 <div>Private</div>
            </div>
             <div className="flex justify-between">
                 <div>Creared:</div>
                 <div>{date}</div>
            </div>
        </div>
    )
}

export default ProductStatus;