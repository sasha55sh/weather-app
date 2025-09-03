import React, { FC } from "react";

const ProductSceleton: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-xs gap-2.5 bg-slateBlue/60 p-2.5 rounded-md">
      <div className="animate-pulse w-full h-[300px] rounded-xl bg-lightPeach/30 mb-2"></div>
      <div className="animate-pulse h-3 w-2/3 bg-gray-300 rounded-xl"></div>
      <div className="animate-pulse h-4 w-1/3 bg-gray-300 rounded-xl"></div>
    </div>
  );
};

export default ProductSceleton;
