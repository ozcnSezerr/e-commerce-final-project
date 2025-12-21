import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../store/actions/productActions";

import ShopHeader from "../components/shop/ShopHeader";
import ShopCategories from "../components/shop/ShopCategories";
import ShopToolBar from "../components/shop/ShopToolBar";
import ShopProducts from "../components/shop/ShopProducts";

export default function ShopPage() {
  const dispatch = useDispatch();
  const { categoryId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const catId = categoryId ? parseInt(categoryId) : null;
    dispatch(setCategory(catId));

    window.scrollTo(0, 0);
  }, [categoryId, dispatch, location.pathname]);

  return (
    <>
      <ShopHeader />
      <ShopCategories />
      <ShopToolBar />
      <ShopProducts />
    </>
  );
}
