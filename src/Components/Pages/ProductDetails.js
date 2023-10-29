import React from "react";
import { Outlet, Route, Routes, useParams } from "react-router-dom";
import Comments from "../Comments/Comments";

const ProductDetails = () => {
  const params = useParams();
  return (
    <div>
      {params.productId}
      <p>Review of {params.productId} is good </p>
      <Routes>
        <Route
          path={`/store/${params.productId}/comments`}
          element={<Comments />}
        />
      </Routes>
      <Outlet />
    </div>
  );
};

export default ProductDetails;
